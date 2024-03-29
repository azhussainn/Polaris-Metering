import { useContext, useCallback } from 'react';
import { HomeContext } from '../Providers';
import { reverseDateString } from '../utils';

const useFilter = () => {

    const {
        startDuration, endDuration,
        handleChangeDuration
    } = useContext(HomeContext);

    const [defaultStartDate, startTime] = startDuration.split(" ");
    const [defaultEndDate, endTime] = endDuration.split(" ");

    const startDate = reverseDateString(defaultStartDate);
    const endDate = reverseDateString(defaultEndDate);

    //changes the start date
    const onChangeStartDuration = useCallback((e) => {
        const date = reverseDateString(e.target.value);
        handleChangeDuration("start", date + " " + startTime);
    }, [ startTime, handleChangeDuration ]);

    //changes the end date
    const onChangeEndDuration = useCallback((e) => {
        const date = reverseDateString(e.target.value);
        handleChangeDuration("end", date + " " + startTime);
    }, [ startTime, handleChangeDuration ]);

    //changes the start time
    const onChangeStartTime = useCallback((e) => {
        const date = reverseDateString(startDate);
        handleChangeDuration("start", date + " " + e.target.value);
    }, [ startDate, handleChangeDuration ]);

    //changes the end time
    const onChangeEndTime = useCallback((e) => {
        const date = reverseDateString(endDate);
        handleChangeDuration("end", date + " " + e.target.value);
    }, [ endDate, handleChangeDuration ]);

    return  {
        startDate,
        endDate,
        startTime,
        endTime,
        onChangeStartDuration,
        onChangeStartTime,
        onChangeEndDuration,
        onChangeEndTime
    }
}

export default useFilter