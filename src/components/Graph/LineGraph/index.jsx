import { LineChart } from '@mui/x-charts/LineChart';
import { graphSetting } from '../../../utils';
import useGraphLabel from '../../../hooks/useGraphLabel';

export default function LineGraph({ dataset, series }) {
  useGraphLabel();
  if (!dataset || !dataset.length) return null;
  return (
    <LineChart
      dataset={dataset}
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
