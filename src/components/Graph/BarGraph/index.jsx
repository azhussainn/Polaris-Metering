import { BarChart } from '@mui/x-charts/BarChart';
import { graphSetting } from '../../../utils';
import useGraphLabel from '../../../hooks/useGraphLabel';

export default function BarGraph({ dataset, series }) {
    useGraphLabel();
    return (
        <BarChart
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
