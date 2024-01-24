import MeterFilters from './MeterFilters';
import ButtonContainer from "../ButtonContainer";
import FilterItem from "./FilterItem";
import useFilter from '../../hooks/useFilter';

const CONTAINER_STYLE = { 
  display: "flex", flexWrap: "wrap", 
  gap: 10 
}

const Filters = () => {

  const {
    startDate, endDate,
    startTime, endTime,
    onChangeStartDuration,
    onChangeStartTime,
    onChangeEndDuration,
    onChangeEndTime
  } = useFilter()
  return (

    <section style={CONTAINER_STYLE}>

      <MeterFilters />

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

    </section>
  )
}

export default Filters