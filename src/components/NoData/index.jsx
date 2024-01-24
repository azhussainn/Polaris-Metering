import { useContext } from "react";
import { HomeContext } from "../../Providers";
import { FLEX_BOX } from "../../styles";

const NoData = () => {
    const { startDuration, endDuration } = useContext(HomeContext);

    return (
        <div style={FLEX_BOX}>
            <p className="no-items">
                Data not present for {startDuration} - {endDuration}
            </p>
        </div>
    )
}

export default NoData