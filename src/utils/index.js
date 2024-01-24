export const graphSetting = { height: 700 };

export const normalizeDataset = (dataset, limit) => {
    const dataSize = dataset.length
    const normalizedDataset = [];
    if (dataSize > limit) {

        const tempObj = {}
        Object.keys(dataset[0]).map(item => tempObj[item] = 0);
        delete tempObj['timestamp'];
        const windowSize = Math.floor(dataSize / limit);

        for (let i = 0; i < dataSize; i += windowSize) {

            //getting the getting window
            const currentWindow = dataset.slice(i, i + windowSize);

            //getting the sum of the current window
            const aggregateObj = tempObj
            currentWindow.reduce((acc, item) => {
                Object.keys(acc).forEach(key => {
                    aggregateObj[key] += Number(item[key]);
                })
                return aggregateObj
            }, aggregateObj)


            //getting the average from the sum
            Object.keys(aggregateObj).forEach(key => {
                aggregateObj[key] = Math.floor(aggregateObj[key] / windowSize);
            })

            const startTime = currentWindow[0].timestamp.split(" ");
            normalizedDataset.push({
                ...aggregateObj,
                "timestamp": `${startTime[0]} ${startTime[1]}`
            });
        }

        return normalizedDataset;
    } else {
        dataset.map(ele => {
            Object.keys(ele).forEach(key => {
                if (key !== "timestamp") ele[key] = Number(ele[key]);
            })
            return ele
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
  