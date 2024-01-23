import { lazy, Suspense, useContext } from 'react';
import { getSeries } from "../../utils";
import { MainContext } from '../../Providers';

const BarGraph = lazy(() => import('./BarGraph'));
const LineGraph = lazy(() => import('./LineGraph'));

const Graph = () => {

    const { data, graphType, showCluster, selectedMeters } = useContext(MainContext);

    if (!data || !data.length) return null;
    const series = getSeries(data, showCluster, selectedMeters);

    if (graphType === 'bar') {
        return (
            <Suspense fallback={<p>Loading...</p>}>
                <BarGraph series={series} />
            </Suspense>
        )

    }

    if (graphType === 'line') {
        return (
            <Suspense fallback={<p>Loading...</p>}>
                <LineGraph series={series} />
            </Suspense>
        )
    }

    return null;

}

export default Graph