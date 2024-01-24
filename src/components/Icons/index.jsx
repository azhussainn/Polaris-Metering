import { lazy } from 'react';

const Config = lazy(() => import('./Config'));
const Graph = lazy(() => import('./Graph'));

export {
    Config,
    Graph
}