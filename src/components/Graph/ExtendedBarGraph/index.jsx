import { useState, useCallback, useContext } from 'react';
import BarGraph from '../BarGraph';
import ToggleStackBarGraph from '../../ToggleStackBarGraph';
import { HomeContext } from '../../../Providers';
import { getSeries } from '../../../utils';

const normalXAxis = {
  scaleType: 'band',
  dataKey: 'timestamp',
  categoryGapRatio: 0.3,
  barGapRatio: 0.1,
}

const getStackSeries = (data, showCluster, selectedMeters, allMeters) => {
  const metersData = selectedMeters.length > 0 ? selectedMeters : allMeters;
  const currentMeters = showCluster ? [...metersData, "cluster"] :  [...metersData]
  return currentMeters.map(meter => {
    return {
      label: meter,
      data: data.map(item => item[meter]),
      stack: "total"
    }
  })
}

const ExtendedBarGraph = () => {

  const { data, showCluster, selectedMeters, allMeters } = useContext(HomeContext);
  const [type, setType] = useState('normal')

  const toggleBarGraph = useCallback((val) => {
    if (typeof val === 'string') {
      setType(val)
    } else {
      setType(prevType => {
        if (prevType === 'normal') return 'stack'
        return 'normal'
      })
    }
  }, [])

  return (
    <>
      <ToggleStackBarGraph type={type} toggleBarGraph={toggleBarGraph} />
      <BarGraph
        xAxis={type === 'normal' ?
          normalXAxis :
          {
            scaleType: 'band',
            data: data.map(item => item.timestamp),
          }
        }
        series={type === 'normal' ? 
          getSeries(data, showCluster, selectedMeters,) : 
          getStackSeries(data, showCluster, selectedMeters, allMeters)
        }
        dataset={type === 'normal' ? data : null}
      />
    </>
  )
}

export default ExtendedBarGraph