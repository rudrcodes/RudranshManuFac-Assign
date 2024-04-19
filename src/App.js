import { Table } from '@mantine/core';
import './App.css';
import { calcMean, calcMedian, calcMode } from './helpers/calculations.ts';
import mainMap from './helpers/calculations.ts'
function App() {
  const meanArray = calcMean()
  const medianArray = calcMedian()
  const modeArray = calcMode()
  console.log("MeanArray: ", meanArray)
  console.log("MedianArray: ", medianArray)
  console.log("modeArray: ", modeArray)
  console.log("mainMap: ", mainMap)
  // console.log(jsonData)



  let classArray = new Array(mainMap.size).fill(0)
  classArray.map((elem, i) => {
    classArray[i] = i + 1
  })
  console.log(classArray)

  const combinedMap = new Array(classArray.length + 1).fill([])
  console.log("combinedMapBefore: ", combinedMap)
  for (let i = 0; i < combinedMap.length; i++) {
    combinedMap[i + 1] = [[meanArray[i], medianArray[i], modeArray[i]]]
  }
  console.log("combinedMap: ", combinedMap)

  const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  ];

  const rows = combinedMap.map((value, index) => (
    <Table.Tr key={index}>
      <Table.Td>Flavonoids Mean</Table.Td>
      <Table.Td>{value[0]}</Table.Td>
      <Table.Td>{value[1]}</Table.Td>
      <Table.Td>{value[2]}</Table.Td>
    </Table.Tr>
  ));
  // const rows = elements.map((element) => (
  //   <Table.Tr key={element.name}>
  //     <Table.Td>Flavonoids Mean</Table.Td>
  //     <Table.Td>{element.name}</Table.Td>
  //     <Table.Td>{element.symbol}</Table.Td>
  //     <Table.Td>{element.mass}</Table.Td>
  //   </Table.Tr>
  // ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Measure</Table.Th>
          {/* Here I have to loop over the map or my own DS (data structure) */}

          {classArray.map((val, idx) => {
            return <Table.Th key={val}>{val}</Table.Th>
          })}

        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

export default App;
