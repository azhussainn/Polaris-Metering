export const graphSetting = { height: 700 };


const getInitialMetersValuesObj = (dataset) => {
    if(!dataset || dataset.length === 0) return {}
    const tempObj = {}
    Object.keys(dataset[0]).map(item => tempObj[item] = 0);
    delete tempObj['timestamp'];
    return tempObj;
}


const getNormalizedData = (dataset, index, windowSize, tempObj, total) => {
        //getting the getting window
        const currentWindow = dataset.slice(index, index + windowSize);

        //getting the sum of the current window
        const aggregateObj = {...tempObj}

        currentWindow.reduce((acc, item) => {
            Object.keys(acc).forEach(key => {
                aggregateObj[key] += Number(item[key]);
            })
            return aggregateObj
        }, aggregateObj)


        //getting the average from the sum
        Object.keys(aggregateObj).forEach(key => {
            aggregateObj[key] = Math.floor(aggregateObj[key] / total);
        })


        const startTime = currentWindow[0].timestamp.split(" ");
        return {
            ...aggregateObj,
            "timestamp": `${startTime[0]} ${startTime[1]}`
        };
}


export const normalizeDataset = (dataset, limit) => {
    const dataSize = dataset.length
    const normalizedDataset = [];
    if (dataSize > limit) {
        const intialMetersObj = getInitialMetersValuesObj(dataset);
        const windowSize = Math.floor(dataSize / limit);
        const remaining = dataSize % 10;
        let i = 0;
        while(i <  dataSize - remaining){
            const normalizedItem = getNormalizedData(dataset, i, windowSize, intialMetersObj, windowSize);
            normalizedDataset.push(normalizedItem);
            i += windowSize
        }

        if(remaining > 0){
            const normalizedItem = getNormalizedData(dataset, i, windowSize, intialMetersObj, remaining);
            normalizedDataset.push(normalizedItem);
        }

        return normalizedDataset;
    } else {
        dataset.forEach(ele => {
            Object.keys(ele).forEach(key => {
                if (key !== "timestamp") ele[key] = Number(ele[key]);
            })
        })
    }
    return dataset;
}


export const valueFormatter = (value) => `${value} watts`;


export const getSeries = (dataset, enableCluster, selectedMeters) => {
    if(!dataset || dataset.length === 0) return []

    const filterQuery = (item) => (
        (item !== 'timestamp') && 
        (item !== 'cluster' || enableCluster) && 
        (item !== 'cluster' && selectedMeters.length > 0 ? selectedMeters.includes(item) : true)
    )

    return Object.keys(dataset[0]).filter(
        filterQuery).map(item => ({ 
            "dataKey": item, label: item, 
            "valueFormatter": valueFormatter 
        }))
}

export const getStackSeries = (data, showCluster, selectedMeters, allMeters) => {
    const metersData = selectedMeters.length > 0 ? selectedMeters : allMeters;
    const currentMeters = showCluster ? [...metersData, "cluster"] :  [...metersData]
    return currentMeters.map(meter => {
      return {
        label: meter,
        data: data.map(item => item[meter]),
        stack: "total"
      }
    })
  }


export const getUserDate = (inputString) => {
    if (!inputString) return null;
    return decodeURIComponent(inputString)
}


export const getUserMeters = (inputVal) => {
    if (!inputVal) return [];
    return inputVal.split(",").filter(item => item.trim().length > 0)
}


export const filterByDate = (dataset, startDate, endDate) => {
    if (!startDate && !endDate) return dataset;
    let startCount = 0
    if (startDate && startDate.length > 0) {
        for (let item of dataset) {
            if (item.timestamp === startDate) break;
            startCount++;
        }
    }

    let endCount = dataset.length - 1;
    if (endDate && endDate.length > 0) {
        while (endCount >= startCount) {
            const item = dataset[endCount];
            if (item.timestamp === endDate) break;
            endCount--;
        }
    }
    return dataset.slice(startCount, endCount + 1);
}


export const getAllMeters = (obj) => {
    if (!obj) return [];
    return Object.keys(obj).filter(key => key !== "cluster" && key !== 'timestamp');
}


export const reverseDateString = (inputStr) => {
    return inputStr.split("-").reverse().join("-");
}
  