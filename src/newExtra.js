// import { Table } from '@mantine/core';
// import './App.css';
// import { calcMean, calcMedian } from './helpers/calculations.ts';
// // import { calcMean, calcMedian, calcMode } from './helpers/calculations.ts';
// import mainMap from './helpers/calculations.ts'
// import { useEffect, useMemo } from 'react';
// function App() {

//   const meanArray = useMemo(() => calcMean(), [])
//   const medianArray = useMemo(() => calcMedian(), [])
//   const modeArray = []
//   // const modeArray = useMemo(() => calcMode(), [])
//   console.log("MeanArray: ", meanArray)
//   console.log("MedianArray: ", medianArray)
//   console.log("modeArray: ", modeArray)
//   console.log("mainMap: ", mainMap)



//   let classArray = new Array(mainMap.size).fill(0)
//   for (let i = 0; i < classArray.length; i++) {
//     classArray[i] = i + 1
//   }

//   console.log(classArray)

//   const combinedMap = new Array(classArray.length + 1).fill([])
//   console.log("combinedMapBefore: ", combinedMap)
//   for (let i = 0; i < combinedMap.length; i++) {
//     combinedMap[i + 1] = [[meanArray[i], medianArray[i], modeArray[i]]]
//   }
//   console.log("combinedMap: ", combinedMap)

//   // const rows = combinedMap.map((value, index) => (
//   //   <Table.Tr key={index}>
//   //     <Table.Td>Flavonoids Mean</Table.Td>
//   //     <Table.Td>{value[0]}</Table.Td>
//   //     <Table.Td>{value[1]}</Table.Td>
//   //     <Table.Td>{value[2]}</Table.Td>
//   //   </Table.Tr>
//   // ));


//   return (
//     <Table>
//       <Table.Thead>
//         <Table.Tr>
//           <Table.Th>Measure</Table.Th>
//           {/* Here I have to loop over the map or my own DS (data structure) */}

//           {classArray.map((val, idx) => {
//             return <Table.Th key={val}>{val}</Table.Th>
//           })}

//         </Table.Tr>
//       </Table.Thead>
//       {/* <Table.Tbody>{rows}</Table.Tbody> */}
//     </Table>
//   );
// }

// export default App;


// function App() {
//     return (
//       <div>
//         assd
//         assd
//         assd
//         assd
//       </div>
//     )
//   }
  
//   export default App