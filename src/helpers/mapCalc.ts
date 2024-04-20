
//These functions generate the Map containing the necessary data , using the JSON data passed to them



const sortFunc = (mp: Map<number, number[]>) => {
    mp.forEach((value, key) => {
        mp.set(key, value.sort((a: number, b: number) => a - b))
    })

    return mp
}
//Exporting the Flavanoids  Map
export const FlavMapCalc = (jsonData: any) => {

    const mp = new Map();
    for (let i = 0; i < jsonData.length; i++) {
        let obj = jsonData[i];
        if (mp.has(obj.Alcohol)) {
            mp.get(obj.Alcohol).push(obj.Flavanoids);
        } else {
            mp.set(obj.Alcohol, [obj["Flavanoids"]])
        }
    }

    //we have to sort the array of each class, as we want to get mode
    return sortFunc(mp);
}


//Exporting the Gamma Map
export const gammaMapCalc = (jsonData: any) => {

    const mp = new Map();
    for (let i = 0; i < jsonData.length; i++) {
        let calcGammValue: number = (jsonData[i].Ash * jsonData[i].Hue) / jsonData[i].Magnesium
        let obj = jsonData[i];
        if (mp.has(obj.Alcohol)) {
            mp.get(obj.Alcohol).push(calcGammValue);
        } else {
            mp.set(obj.Alcohol, [calcGammValue])
        }
    }

    //we have to sort the array of each class, as we want to get mode

    return sortFunc(mp)
}
