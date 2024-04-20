// File from where I'm exporting the Mean , Median and Mode functions 




// Function to calculate the mean of values stored in a Map
export const calcMean = (mp: Map<any, any>): number[] => {
    // Initialize an array to store the mean values
    let meanArray: number[] = new Array(mp.size).fill(0);

    // Iterate over the Map to calculate mean for each key
    mp.forEach((val, key) => {
        // Calculate the mean and store it in the meanArray
        meanArray[key] = parseFloat((val.reduce((a: number, b: number) => a + b, 0) / val.length).toFixed(3))
    })

    return meanArray;
}

// Function to calculate the median of values stored in a Map
export const calcMedian = (mp: Map<any, any>): number[] => {
    // Initialize an array to store the median values
    let medianArray: number[] = new Array(mp.size).fill(0);

    // Iterate over the Map to calculate median for each key
    mp.forEach((value, key) => {
        // Check if the length of the array is odd or even to determine the median
        if (value.length % 2 !== 0) {
            medianArray[key] = parseFloat(value[Math.floor(value.length / 2)].toFixed(3))
        } else {
            let firstMid = parseFloat(value[Math.floor(value.length / 2)].toFixed(3))
            let secondMid = parseFloat(value[Math.floor((value.length / 2) - 1)].toFixed(3))
            medianArray[key] = parseFloat((((firstMid ? firstMid : 0) + (secondMid ? secondMid : 0)) / 2).toFixed(3))
        }
    })

    return medianArray;
}

// Function to calculate the mode of values stored in a Map
export const calcMode = (mp: Map<any, any>): number[] => {
    // Initialize an array to store the mode values
    let modeArray: number[] = new Array(mp.size).fill(0);

    // Initialize an array of Maps to store the frequency of each value for each key
    let freqArrMap: Map<number, number>[] = new Array(mp.size).fill(new Map());

    // Iterate over the Map to calculate frequency for each value for each key
    mp.forEach((value, key) => {
        const freqMap = new Map();
        // console.log("Mode: ",key,value)

        //for each class of Alchol , there is an array for it, using that array we are finding the frequency of each number occuring in that array
        for (let i = 0; i < value.length; i++) {
            let val = value[i];
            if (freqMap.has(val)) {
                freqMap.set(val, freqMap.get(val) + 1)
            } else {
                freqMap.set(val, 1)
            }
        }

        freqArrMap[key] = freqMap
    })
    // console.log("Map: ", mp)
    // console.log("freqArrMap: ", freqArrMap)

    // Iterate over the array of frequency Maps(freqArrMap) to find the mode for each class of alchol
    //Iterating over the frequency Maps(freqArrMap) and finding the element with the highest frequency for each class of Alchol
    for (let i = 0; i < freqArrMap.length; i++) {
        let indiMap = freqArrMap[i];
        let frqNumber: number = 0, frqCnt: number = 0;
        indiMap.forEach((value, key) => {
            if (frqCnt <= value) {
                frqCnt = value;
                //toFixed(number) is used to fix the number of digits after the decimal point , it returns the string of the number , hence have used parseFloat(number) to convert the string into a floating point number 
                frqNumber = parseFloat(key.toFixed(3))
            }
        })
        modeArray[i] = frqNumber
    }

    return modeArray;
}
