import HomeProvider from '../../Providers/HomeProvider';
import Header from '../../components/Header';
import Graph from '../../components/Graph';
import useMetering from '../../hooks/useMetering';

const Home = () => {
  const data = useMetering();
  
  return (
    <main className="App" style={{ padding: "20px" }}>
      <HomeProvider data={data}>
        <Header />
        <Graph />
      </HomeProvider>
    </main>
  );
}

export default Home