import { useContext } from 'react';
import ButtonContainer from "../ButtonContainer";
import FilterItem from "./FilterItem";
import { HomeContext } from '../../Providers';

const MeterFilters = () => {
    const {
        allMeters, selectedMeters,
        handleChangeMeters
    } = useContext(HomeContext);

    if (!allMeters || allMeters.length === 0) return null;

    return (
        <ButtonContainer>

            {allMeters.map((meter) => (
                <FilterItem
                    key={meter}
                    checked={selectedMeters.includes(meter)}
                    value={meter}
                    onChange={() => handleChangeMeters(meter)}
                    type="checkbox"
                    otherProps={{
                        uniqueID: meter,
                        label: meter.toUpperCase(),
                        customContainerStyle: { minWidth: "auto", padding: "0 5px" }
                    }}
                />
            ))}

        </ButtonContainer>
    )
}

export default MeterFilters