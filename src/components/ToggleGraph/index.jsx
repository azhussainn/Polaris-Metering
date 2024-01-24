import { useContext } from 'react';
import ButtonContainer from "../ButtonContainer";
import ToggleButton from "../ToggleButton";
import { MainContext } from '../../Providers';
import { ICON_STYLE, LABEL_STYLE } from '../../styles';

const ToggleGraph = () => {

    const { graphType, changeGraphType } = useContext(MainContext);

    return (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <ButtonContainer>
                
                <div onClick={() => changeGraphType("line")} style={ICON_STYLE}>
                    <p style={LABEL_STYLE}>LINE</p>
                </div>

                <ToggleButton on={graphType === 'bar'} handleChange={changeGraphType} />

                <div onClick={() => changeGraphType("bar")} style={{...ICON_STYLE, background: "#554763"}}>
                    <p style={LABEL_STYLE}>BAR</p>
                </div>
                
            </ButtonContainer>  
        </div>
    )
}

export default ToggleGraph