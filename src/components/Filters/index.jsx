import ButtonContainer from "../ButtonContainer";
import FilterItem from "./FilterItem";

const reverseDateString = (inputStr) => {
  return inputStr.split("-").reverse().join("-");
}

const Filters = ({ 
  startDuration, endDuration, 
  allMeters, selectedMeters,
  handleChangeDuration,
  handleChangeMeters
}) => {

  const [defaultStartDate, startTime] = startDuration.split(" ");
  const [defaultEndDate, endTime] = endDuration.split(" ");

  const startDate =  reverseDateString(defaultStartDate);
  const endDate = reverseDateString(defaultEndDate);

  const onChangeStartDuration = (e) => {
    const date = reverseDateString(e.target.value);
    handleChangeDuration("start", date + " " + startTime);    
  }

  const onChangeEndDuration = (e) => {
    const date = reverseDateString(e.target.value);
    handleChangeDuration("end", date + " " + startTime);    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onChangeStartTime = (e) => {
    const date = reverseDateString(startDate);
    handleChangeDuration("start", date + " " + e.target.value);  
  }

  const onChangeEndTime = (e) => {
    const date = reverseDateString(endDate);
    handleChangeDuration("end", date + " " + e.target.value);  
  }

  return (
    <form style={{ display: "flex", flexWrap: "wrap",  }} onSubmit={handleSubmit}>

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

    </form>
  )
}

export default Filters