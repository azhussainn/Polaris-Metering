import { useState, useCallback, useMemo } from 'react';
import { useSearchParams } from "react-router-dom";
import Header from '../../components/Header';
import Graph from '../../components/Graph';
import { 
  normalizeDataset, getUserDate, 
  getUserMeters, filterByDate,
  getAllMeters
} from '../../utils';
import dataset from "../../constants/data.json"

const MAX_BAR_SIZE = 10;

const Home = () => {
    const [searchParams, ] = useSearchParams();

    const defaultStartDate = getUserDate(
      searchParams.get('start') || 
      dataset.length > 0 ? dataset[0].timestamp : null
    );

    const defaultEndDate = getUserDate(
      searchParams.get('end') || 
      dataset.length > 0 ? dataset[dataset.length - 1].timestamp : null
    );
    const defaultUserMeters = getUserMeters(searchParams.get('meters'))

    const [startDuration, setStartDuration] = useState(defaultStartDate);
    const [endDuration, setEndDuration] = useState(defaultEndDate);
    const [selectedMeters, setSelectedMeters] = useState(defaultUserMeters);

    const filteredData = useMemo(() => 
      filterByDate(dataset, startDuration, endDuration), 
    [ startDuration, endDuration ]);
    

    const data = useMemo(() => 
      normalizeDataset(filteredData, MAX_BAR_SIZE), 
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [ startDuration, endDuration ]);

    const allMeters = getAllMeters(data[0]);

    const [graphType, setGraphType] = useState('bar');
    const [showCluster, setShowClusters] = useState(false);
  
    const changeGraphType = useCallback((val) => {
      if(typeof val === 'string'){
        setGraphType(val);
        return
      }
      setGraphType(prevType => {
        if (prevType === 'bar') return "line"
        return 'bar'
      })
    }, []);
  
    const toggleClusters = useCallback(() => {
      setShowClusters(prevVal => !prevVal)
    }, []);

    const handleChangeDuration = useCallback((type, val) => {
        if(type === "start"){
          setStartDuration(val);
        }
        if(type === 'end'){
          setEndDuration(val);
        }
    }, []);


    const handleChangeMeters = useCallback((val) => {
      setSelectedMeters(prevMeters => {
        if(prevMeters.includes(val)){
          return prevMeters.filter(item => item !== val);
        }else{
          return [...prevMeters, val]
        }
      })
    }, []);
  
    return (
      <main className="App" style={{ padding: "20px" }}>
        <Header
            showCluster={showCluster}
            graphType={graphType}
            allMeters={allMeters}
            startDuration={startDuration}
            endDuration={endDuration}
            selectedMeters={selectedMeters}
            changeGraphType={changeGraphType}
            toggleClusters={toggleClusters}
            handleChangeDuration={handleChangeDuration}
            handleChangeMeters={handleChangeMeters}
        />
        <Graph
          dataset={data}
          type={graphType}
          showCluster={showCluster}
          selectedMeters={selectedMeters}
        />
      </main>
    );
}

export default Home