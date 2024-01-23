import MainProvider from '../../Providers/MainProvider';
import Header from '../../components/Header';
import Graph from '../../components/Graph';
import useMetering from '../../hooks/useMetering';

const Home = () => {

  const { 
    data,
    showCluster,
    graphType,
    allMeters,
    startDuration,
    endDuration,
    selectedMeters,
    changeGraphType,
    toggleClusters,
    handleChangeDuration,
    handleChangeMeters
  } = useMetering()

  return (
    <main className="App" style={{ padding: "20px" }}>
      <MainProvider
        data={{
          data,
          showCluster,
          graphType,
          allMeters,
          startDuration,
          endDuration,
          selectedMeters,
          changeGraphType,
          toggleClusters,
          handleChangeDuration,
          handleChangeMeters
        }}
      >
      <Header/>
      <Graph />
      </MainProvider>
    </main>
  );
}

export default Home