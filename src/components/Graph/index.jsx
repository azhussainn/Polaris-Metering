import { lazy, Suspense, useContext } from 'react';
import { getSeries } from "../../utils";
import { HomeContext, MainContext } from '../../Providers';
import ExtendedBarGraph from './ExtendedBarGraph';
import { FLEX_BOX } from '../../styles';

const LineGraph = lazy(() => import('./LineGraph'));
const NoData = lazy(() => import('../NoData'));

const Graph = () => {

    const { graphType, showCluster } = useContext(MainContext);
    const { data, selectedMeters } = useContext(HomeContext);

    if (!data || !data.length) return <NoData />;

    if (graphType === 'bar') return  <ExtendedBarGraph />

    if (graphType === 'line') {
        return (
            <Suspense fallback={<div style={FLEX_BOX}><p className="no-items">Loading...</p></div>}>
                <LineGraph series={getSeries(data, showCluster, selectedMeters)} />
            </Suspense>
        )
    }

    return <NoData />;

}

export default Graph