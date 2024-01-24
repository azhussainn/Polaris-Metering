import { HomeContext } from ".";

const HomeProvider = ({ data, children }) => {
  return (
    <HomeContext.Provider
      value={data}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
