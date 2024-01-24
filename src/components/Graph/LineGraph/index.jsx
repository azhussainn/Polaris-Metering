import { useContext } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { graphSetting } from '../../../utils';
import useGraphLabel from '../../../hooks/useGraphLabel';
import { HomeContext } from '../../../Providers';

export default function LineGraph({ series }) {
  useGraphLabel();
  const { data } = useContext(HomeContext);
  if (!data || !data.length) return null;
  return (
    <LineChart
      dataset={data}
      xAxis={[{
        scaleType: 'band',
        dataKey: 'timestamp',
        categoryGapRatio: 0.3,
        barGapRatio: 0.1,
      }]}
      series={series}
      {...graphSetting}
    />
  );
}
