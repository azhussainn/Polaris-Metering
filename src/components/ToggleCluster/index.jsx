import { useContext } from 'react';
import ButtonContainer from "../ButtonContainer";
import ToggleButton from "../ToggleButton"
import { MainContext } from '../../Providers';

const ToggleCluster = () => {

    const { showCluster, toggleClusters } = useContext(MainContext);

    return (
        <ButtonContainer>
            <div style={{ cursor: "pointer", textAlign: "center", minWidth: 50, padding: "0 10px", background: "#405f61", borderRadius: 20 }}>
                <p style={{ margin: "0 auto", fontWeight: 700, color: "white" }}>Hide Clusters</p>
            </div>
            
            <ToggleButton on={showCluster} handleChange={toggleClusters} />

            <div style={{ cursor: "pointer", textAlign: "center",  minWidth: 50, padding: "0 10px", background: "#554763", borderRadius: 20 }}>
                <p style={{ margin: "0 auto", fontWeight: 700, color: "white" }}>Show Clusters</p>
            </div>
        </ButtonContainer>
    )
}

export default ToggleCluster