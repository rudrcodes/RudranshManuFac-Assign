
import jsonData from "../Wine-Data.json"


const mp = new Map();
for (let i = 0; i < jsonData.length; i++) {
    let obj = jsonData[i];
    if (mp.has(obj.Alcohol)) {
        mp.get(obj.Alcohol).push(obj.Flavanoids);
    } else {
        mp.set(obj.Alcohol, [obj["Flavanoids"]])
    }
}
// jsonData.map((obj) => {
//     if (mp.has(obj.Alcohol)) {
//         mp.get(obj.Alcohol).push(obj.Flavanoids);
//     } else {
//         mp.set(obj.Alcohol, [obj["Flavanoids"]])
//     }
// })

//we have to sort the array of each class
mp.forEach((value, key) => {
    mp.set(key, value.sort((a, b) => a - b))
})

// console.log("Map: ", mp)

export const calcMean = (): number[] => {
    //create a map to keep track of means of diferrent classes of Alchols (“Flavanoids”)
    //meanArray?
    let meanArray: number[] = new Array(mp.size).fill(0);
    mp.forEach((val, key) => {
        meanArray[key] = parseFloat((val.reduce((a: number, b: number) => a + b, 0) / val.length).toFixed(3))

        // let sum = 0;
        // for (let i = 0; i < val.length; i++) {
        //     sum += val[i];
        // }
        // console.log(key, sum / val.length)
    })
    // console.log("meanArr: ", meanArray)
    //calculate mean of each class
    return meanArray;
}

export const calcMedian = (): number[] => {
    let medianArray: number[] = new Array(mp.size).fill(0);

    mp.forEach((value, key) => {
        if (value.length % 2 !== 0) {
            medianArray[key] = parseFloat(value[Math.floor(value.length / 2)].toFixed(3))
            // medianArray[key] = Number(value[Math.floor(value.length / 2)].toFixed(4))
        } else {
            let firstMid = parseFloat(value[Math.floor(value.length / 2)].toFixed(3))
            let secondMid = parseFloat(value[Math.floor((value.length / 2) - 1)].toFixed(3))
            // console.log(firstMid, secondMid)
            medianArray[key] = parseFloat((((firstMid ? firstMid : 0) + (secondMid ? secondMid : 0)) / 2).toFixed(3))
        }

    })


    return medianArray;

}

export const calcMode = (): number[] => {
    let modeArray: number[] = new Array(mp.size).fill(0);

    let freqArrMap: Map<number, number>[] = new Array(mp.size).fill(new Map());

    mp.forEach((value, key) => {
        //hr value (array) ka freq map bnana h
        const freqMap = new Map();
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
    freqArrMap.map((indiMap, index) => {
        //count the most frequent number
        let frqNumber: number = 0, frqCnt: number = 0;
        indiMap.forEach((value, key) => {
            if (frqCnt <= value) {
                frqCnt = value;
                frqNumber = Math.max(frqNumber, key)
                // frqNumber = frqNumber == -Infinity ? 0 : frqNumber
            }
        })
        modeArray[index] = frqNumber
        // console.log(frqNumber, frqCnt)
        // console.log("indiMap: ", indiMap)
    })

    return modeArray;

}



//exporting the whole map
// console.log("mainMap 2: ", mp)

export default mp