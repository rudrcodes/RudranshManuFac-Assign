import { useMemo } from 'react';
import jsonData from "../Wine-Data.json"
import { Table } from '@mantine/core';

import { gammaMapCalc } from '../helpers/mapCalc.ts'

import { calcMean, calcMedian, calcMode } from '../helpers/commonCalc.ts';

export const SecondTable = () => {

    const gammaMap = useMemo(() => gammaMapCalc(jsonData), [jsonData])
    const meanArray = useMemo(() => calcMean(gammaMap), [gammaMap])
    const medianArray = useMemo(() => calcMedian(gammaMap), [gammaMap])
    const modeArray = useMemo(() => calcMode(gammaMap), [gammaMap])


    let classArray = new Array(gammaMap.size).fill(0)
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
            <h1>Gamma Table</h1>
            <Table striped highlightOnHover withTableBorder withColumnBorders>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Measure</Table.Th>

                        {classArray.map((val, idx) => {
                            return <Table.Th key={val}>Class {val}</Table.Th>
                        })}

                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    <Table.Th> Gamma Mean</Table.Th>
                    {meanRow}
                </Table.Tbody>
                <Table.Tbody>
                    <Table.Th> Gamma Median</Table.Th>
                    {medianRow}
                </Table.Tbody>
                <Table.Tbody>
                    <Table.Th> Gamma Mode</Table.Th>
                    {modeRow}
                </Table.Tbody>
            </Table>
        </div>
    );
}



