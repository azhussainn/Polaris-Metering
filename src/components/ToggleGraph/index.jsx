import { useContext } from 'react';
import ButtonContainer from "../ButtonContainer";
import ToggleButton from "../ToggleButton";
import { MainContext } from '../../Providers';

const ToggleGraph = () => {

    const { graphType, changeGraphType } = useContext(MainContext);

    return (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <ButtonContainer>
                
                <div onClick={() => changeGraphType("line")} style={{ cursor: "pointer", textAlign: "center",  minWidth: 50, padding: "0 10px", background: "#405f61" , borderRadius: 20 }}>
                    <p style={{ margin: "0 auto", fontWeight: 700, color: "white" }}>LINE</p>
                </div>

                <ToggleButton on={graphType === 'bar'} handleChange={changeGraphType} />

                <div onClick={() => changeGraphType("bar")} style={{ cursor: "pointer", textAlign: "center",  minWidth: 50, padding: "0 10px", background: "#554763", borderRadius: 20 }}>
                    <p style={{ margin: "0 auto", fontWeight: 700, color: "white" }}>BAR</p>
                </div>
                
            </ButtonContainer>  
        </div>
    )
}

export default ToggleGraph