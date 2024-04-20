import { useMemo } from 'react';
import { FlavMapCalc } from '../helpers/mapCalc.ts'
import { calcMean, calcMedian, calcMode } from '../helpers/commonCalc.ts';
import jsonData from "../Wine-Data.json"

import { Table } from '@mantine/core';


export const FirstTable = () => {

    const flavMap = useMemo(() => FlavMapCalc(jsonData), [jsonData])
    console.log("FlavMap: ", flavMap)
    const meanArray = useMemo(() => calcMean(flavMap), [flavMap])
    const medianArray = useMemo(() => calcMedian(flavMap), [flavMap])
    const modeArray = useMemo(() => calcMode(flavMap), [flavMap])

    let classArray = new Array(flavMap.size).fill(0)
    for (let i = 0; i < classArray.length; i++) {
        classArray[i] = i + 1
    }

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


    const meanRow = meanArray.map((element, idx) => {
        if (idx !== 0)
            return <Table.Td>{element}</Table.Td>

        return null
    });
    const medianRow = medianArray.map((element, idx) => {
        if (idx !== 0)
            return <Table.Td>{element}</Table.Td>

        return null
    });
    const modeRow = modeArray.map((element, idx) => {
        if (idx !== 0)
            return <Table.Td>{element}</Table.Td>

        return null
    });
    return (
        <div>
            <h1>Flavanoids Table</h1>

            <Table striped highlightOnHover withTableBorder withColumnBorders>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Measure</Table.Th>

                        {classArray.map((val, idx) => {
                            return <Table.Th key={idx}>Class {val}</Table.Th>
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



