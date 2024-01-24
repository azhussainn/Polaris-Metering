import { useContext } from 'react';
import ButtonContainer from "../ButtonContainer";
import FilterItem from "./FilterItem";
import { HomeContext } from '../../Providers';
import useFilter from '../../hooks/useFilter';

const Filters = () => {

  const { 
    allMeters, selectedMeters, 
    handleChangeMeters 
  } = useContext(HomeContext);

  const { 
    startDate, endDate,
    startTime, endTime,
    onChangeStartDuration,
    onChangeStartTime,
    onChangeEndDuration,
    onChangeEndTime
  } = useFilter()
  return (

    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>

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

      <ButtonContainer>

        <FilterItem
          type="date"
          value={startDate}
          min={startDate}
          max={endDate}
          onChange={onChangeStartDuration}
          otherProps={{
            uniqueID: "start",
            label: "Start Date:",
          }}
        />

        <FilterItem
          type="time"
          value={startTime}
          onChange={onChangeStartTime}
          otherProps={{
            uniqueID: "startTime",
            label: "Start Time:",
          }}
        />

      </ButtonContainer>

      <ButtonContainer>

        <FilterItem
          type="date"
          value={endDate}
          min={startDate}
          max={endDate}
          onChange={onChangeEndDuration}
          otherProps={{
            uniqueID: "end",
            label: "End Date:",
          }}
        />

        <FilterItem
          type="time"
          value={endTime}
          onChange={onChangeEndTime}
          otherProps={{
            uniqueID: "endTime",
            label: "End Time:",
          }}
        />

      </ButtonContainer>

    </div>
  )
}

export default Filters