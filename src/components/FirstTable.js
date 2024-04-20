import { useMemo } from 'react';
import mainMap from '../helpers/calculations.ts'
import { calcMean, calcMedian, calcMode } from '../helpers/calculations.ts';

import { Table } from '@mantine/core';



export const FirstTable = () => {

    const meanArray = useMemo(() => calcMean(), [])
    const medianArray = useMemo(() => calcMedian(), [])
    const modeArray = useMemo(() => calcMode(), [])
    // const modeArray = useMemo(() => calcMode(), [])
    console.log("MeanArray: ", meanArray)
    console.log("MedianArray: ", medianArray)
    console.log("modeArray: ", modeArray)
    console.log("mainMap: ", mainMap)


    let classArray = new Array(mainMap.size).fill(0)
    for (let i = 0; i < classArray.length; i++) {
        classArray[i] = i + 1
    }
    console.log("classArray: ", classArray)


    //create a combined array of classes and their respective mean, median and modes

    // const combinedArray = useMemo(() => {
    //   const arr = new Array(classArray.length + 1).fill([])
    //   console.log("combinedArray: ", arr)
    //   for (let i = 0; i < arr.length; i++) {
    //     arr[i + 1] = [[meanArray[i], medianArray[i], modeArray[i]]]
    //   }
    //   return arr
    // }, [classArray, meanArray, medianArray, modeArray])

    // console.log("combinedArray: ", combinedArray)

    const elements2 = [];
    for (let i = 0; i < classArray.length; i++) {
        let newObj = {
            metrics: "Metrics",
            mean: meanArray[i + 1],
            median: medianArray[i + 1],
            mode: modeArray[i + 1],
        }
        elements2.push(newObj);

    }
    const elements = [
        { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
        { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
        { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
        { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
        { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    ];
    // const rows = elements.map((element) => (
    //   <Table.Tr key={element.name}>
    //   <Table.Td>{element.position}</Table.Td>
    //   <Table.Td>{element.name}</Table.Td>
    //   <Table.Td>{element.symbol}</Table.Td>
    //   <Table.Td>{element.mass}</Table.Td>
    // </Table.Tr>
    // ));
    const meanRow = meanArray.map((element, idx) => {
        if (idx !== 0)
            return <Table.Td>{element}</Table.Td>
    });
    const medianRow = medianArray.map((element, idx) => {
        if (idx !== 0)
            return <Table.Td>{element}</Table.Td>
    });
    const modeRow = modeArray.map((element, idx) => {
        if (idx !== 0)
            return <Table.Td>{element}</Table.Td>
    });
    return (
        <div>
            <h1>Flavanoids Table</h1>

            <Table striped highlightOnHover withTableBorder withColumnBorders>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Measure</Table.Th>
                        {/* Here I have to loop over the map or my own DS (data structure) */}

                        {classArray.map((val, idx) => {
                            return <Table.Th key={val}>Class {val}</Table.Th>
                        })}

                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    <Table.Th> Flavanoids Mean</Table.Th>
                    {meanRow}
                </Table.Tbody>
                <Table.Tbody>
                    <Table.Th> Flavanoids Median</Table.Th>
                    {medianRow}
                </Table.Tbody>
                <Table.Tbody>
                    <Table.Th> Flavanoids Mode</Table.Th>
                    {modeRow}
                </Table.Tbody>
            </Table>
        </div>
    );
}



