import { useContext } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { graphSetting } from '../../../utils';
import useGraphLabel from '../../../hooks/useGraphLabel';
import { MainContext } from '../../../Providers';

export default function BarGraph({ series }) {
    useGraphLabel();
    const { data } = useContext(MainContext);
    if (!data || !data.length) return null;
    return (
        <BarChart
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
