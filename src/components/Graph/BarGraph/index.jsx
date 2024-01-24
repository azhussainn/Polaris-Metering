import { useContext } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { graphSetting } from '../../../utils';
import useGraphLabel from '../../../hooks/useGraphLabel';
import { MainContext } from '../../../Providers';

export default function BarGraph({ xAxis, series, dataset }) {
    useGraphLabel();
    const { data } = useContext(MainContext);
    if (!data || !data.length) return null;
    return (
        <>
            <BarChart
                dataset={dataset}
                xAxis={[xAxis]}
                series={series}
                {...graphSetting}

            />
        </>
    );
}
