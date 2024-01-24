import { useState, useCallback } from 'react';

const useMain = () => {

    const [graphType, setGraphType] = useState('bar');
    const [showCluster, setShowClusters] = useState(false);

    //changes the type of the graph
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

    //toggles cluster visiblity
    const toggleClusters = useCallback((val) => {
      if(typeof val === 'boolean'){
        setShowClusters(val);
        return
      }
      setShowClusters(prevVal => !prevVal)
    }, []);
  
    return {
        graphType,
        showCluster,
        changeGraphType,
        toggleClusters,
    }
}

export default useMain