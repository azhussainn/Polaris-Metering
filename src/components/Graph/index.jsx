import { lazy, Suspense, useContext } from 'react';
import { getSeries } from "../../utils";
import { HomeContext, MainContext } from '../../Providers';

const ExtendedBarGraph = lazy(() => import('./ExtendedBarGraph'));
const LineGraph = lazy(() => import('./LineGraph'));

const Graph = () => {

    const { graphType, showCluster } = useContext(MainContext);
    const { data, selectedMeters } = useContext(HomeContext);

    if (!data || !data.length) return null;

    if (graphType === 'bar') {
        return (
            <Suspense fallback={<p>Loading...</p>}>
                <ExtendedBarGraph />
            </Suspense>
        )

    }

    if (graphType === 'line') {
        return (
            <Suspense fallback={<p>Loading...</p>}>
                <LineGraph series={getSeries(data, showCluster, selectedMeters)} />
            </Suspense>
        )
    }

    return null;

}

export default Graph