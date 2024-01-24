
import { BarChart } from '@mui/x-charts/BarChart';

const xAxis = {
  scaleType: 'band',
  data: [
    '0-1',
    '1-2',
    '2-3',
    '3-4',
  ],
};


const getSeries = () => [
    {
      label: 'A',
      data: [1, 2, 1, 4],
      stack: 'total',
    },
    {
      label: 'B',
      data: [3, 1.5, 5, 2],
      stack: 'total',
    },
    {
      label: 'C',
      data: [7, 2.4, 6, 1.7],
      stack: 'total',
    },
    {
      label: 'D',
      data: [9, 2, 2, 4],
      stack: 'total',
    },
  ];

export default function StackOrderDemo() {
  return (
    <BarChart
        height={800}
        xAxis={[xAxis]}
        series={getSeries()}
        
    />
  );
}
