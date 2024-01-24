import { FLEX_BOX } from "../../styles";
import ToggleGraph from "../../components/ToggleGraph";
import ToggleCluster from "../../components/ToggleCluster";
import ButtonContainer from "../../components/ButtonContainer";
import { Link } from "react-router-dom";

const Configuration = () => {
  return (
    <div style={FLEX_BOX}>
      <ToggleGraph />
      
      <ToggleCluster />

      <ButtonContainer>
        <Link to="/" style={{ padding: "5px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className='svg-items'
            fill="#000000"
            viewBox="0 0 24 24"
            height={35}
            width={35}
          >
            <path d="M11 1v19h4V1zm3 18h-2V2h2zm-9-9v10h4V10zm3 9H6v-8h2zm9-14v15h4V5zm3 14h-2V6h2zM2 22h21v1H1V1h1z" />
            <path fill="none" d="M0 0h24v24H0z" />
          </svg>
        </Link>
      </ButtonContainer>
    </div>
  )
}

export default Configuration