import { MainContext } from ".";

const MainProvider = ({ data, children }) => {
  return (
    <MainContext.Provider
      value={data}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
