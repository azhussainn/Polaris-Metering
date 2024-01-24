import { useState, useCallback, useMemo } from 'react';
import { useSearchParams } from "react-router-dom";
import { 
  normalizeDataset, getUserDate, 
  getUserMeters, filterByDate,
  getAllMeters
} from '../utils';
import dataset from "../constants/data.json"

const MAX_BAR_SIZE = 10;

const useMetering = () => {
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

    return {
        data,
        allMeters,
        startDuration,
        endDuration,
        selectedMeters,
        handleChangeDuration,
        handleChangeMeters
    }
}

export default useMetering