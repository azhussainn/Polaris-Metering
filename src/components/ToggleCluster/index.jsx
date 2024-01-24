import { useContext } from 'react';
import ButtonContainer from "../ButtonContainer";
import ToggleButton from "../ToggleButton"
import { MainContext } from '../../Providers';
import { ICON_STYLE, LABEL_STYLE } from '../../styles';

const ToggleCluster = () => {

    const { showCluster, toggleClusters } = useContext(MainContext);

    return (
        <ButtonContainer>
            <div onClick={() => toggleClusters(false)}  style={ICON_STYLE}>
                <p style={LABEL_STYLE}>Hide Clusters</p>
            </div>
            
            <ToggleButton on={showCluster} handleChange={toggleClusters} />

            <div onClick={() => toggleClusters(true)} style={{...ICON_STYLE, background: "#554763"}}>
                <p style={LABEL_STYLE}>Show Clusters</p>
            </div>
        </ButtonContainer>
    )
}

export default ToggleCluster