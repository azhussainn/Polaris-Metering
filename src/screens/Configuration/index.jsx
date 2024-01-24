import { FLEX_BOX } from "../../styles";
import ToggleGraph from "../../components/ToggleGraph";
import ToggleCluster from "../../components/ToggleCluster";
import ButtonContainer from "../../components/ButtonContainer";
import { Link } from "react-router-dom";
import { Graph } from "../../components/Icons";

const Configuration = () => {
  return (
    <div style={FLEX_BOX}>

      {/* Toggle Graph Type */}
      <ToggleGraph />
      
      {/* Toggle Cluster */}
      <ToggleCluster />

      {/* Link to Home */}
      <ButtonContainer>
        <Link to="/" style={{ padding: "5px" }} aria-label="home">
          <Graph />
        </Link>
      </ButtonContainer>
    </div>
  )
}

export default Configuration