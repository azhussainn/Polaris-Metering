import { lazy, Suspense } from 'react';
import { getSeries } from "../../utils";

const BarGraph = lazy(() => import('./BarGraph'));
const LineGraph = lazy(() => import('./LineGraph'));

const Graph = ({ dataset, type, showCluster, selectedMeters }) => {
    if (!dataset || !dataset.length) return null;
    const series = getSeries(dataset, showCluster, selectedMeters);

    if (type === 'bar') {
        return (
            <Suspense fallback={<p>Loading...</p>}>
                <BarGraph dataset={dataset} series={series} />
            </Suspense>
        )

    }

    if (type === 'line') {
        return (
            <Suspense fallback={<p>Loading...</p>}>
                <LineGraph dataset={dataset} series={series} />
            </Suspense>
        )
    }

    return null;

}

export default Graph