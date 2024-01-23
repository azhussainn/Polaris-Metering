import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import('../screens/Home'));
const Alerts = lazy(() => import('../screens/Alerts'));

const Navigation = () => {
    return (
        <Router>
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="alert/:id/" element={<Alerts />} />
                </Routes>
            </Suspense>
        </Router>
    )
}

export default Navigation