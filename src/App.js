import Navigation from "./Navigation";
import MainProvider from "./Providers/MainProvider";
import useMain from "./hooks/useMain";
import './App.css';

const App = () => {
    const data = useMain();
    return (
        <MainProvider data={data}>
            <Navigation />
        </MainProvider>
    )
};

export default App;
