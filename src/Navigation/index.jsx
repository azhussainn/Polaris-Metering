import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import('../screens/Home'));
const Alerts = lazy(() => import('../screens/Alerts'));
const Configuration = lazy(() => import('../screens/Configuration'));

const Navigation = () => {
    return (
        <Router>
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="alert/:id/" element={<Alerts />} />
                    <Route path="config" element={<Configuration />} />
                </Routes>
            </Suspense>
        </Router>
    )
}

export default Navigation