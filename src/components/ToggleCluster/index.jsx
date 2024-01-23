import { useContext } from 'react';
import ButtonContainer from "../ButtonContainer";
import ToggleButton from "../ToggleButton"
import { MainContext } from '../../Providers';

const ICON_STYLE = {
    cursor: "pointer", textAlign: "center", 
    minWidth: 50, padding: "0 10px", 
    background: "#405f61", borderRadius: 20
}

const LABEL_STYLE = {
    margin: "0 auto", fontWeight: 700, 
    color: "white"
}

const ToggleCluster = () => {

    const { showCluster, toggleClusters } = useContext(MainContext);

    return (
        <ButtonContainer>
            <div onClick={() => toggleClusters(false)}  style={ICON_STYLE}>
                <p style={LABEL_STYLE}>Hide Clusters</p>
            </div>
            
            <ToggleButton on={showCluster} handleChange={toggleClusters} />

            <div onClick={() => toggleClusters(true)} style={ICON_STYLE}>
                <p style={LABEL_STYLE}>Show Clusters</p>
            </div>
        </ButtonContainer>
    )
}

export default ToggleCluster