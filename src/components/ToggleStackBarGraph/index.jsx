import ButtonContainer from "../ButtonContainer";
import ToggleButton from "../ToggleButton"
import { ICON_STYLE, LABEL_STYLE } from '../../styles';


const ToggleStackBarGraph = ({ type, toggleBarGraph }) => {
    return (
        <ButtonContainer extraStyle={{ width: "fit-content", float: "right" }}>
            <div onClick={() => toggleBarGraph("stack")}  style={ICON_STYLE}>
                <p style={LABEL_STYLE}>Stack</p>
            </div>
            
            <ToggleButton on={type === 'normal'} handleChange={toggleBarGraph} />

            <div onClick={() => toggleBarGraph("normal")} style={{...ICON_STYLE, background: "#554763"}}>
                <p style={LABEL_STYLE}>Normal</p>
            </div>
        </ButtonContainer>
    )
}

export default ToggleStackBarGraph