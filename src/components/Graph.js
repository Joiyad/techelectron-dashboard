import React from 'react';
import { VictoryArea, VictoryGroup} from 'victory';

const graphData2 = [
    { x: 1, y: 8 },
    { x: 2, y: 10 },
    { x: 3, y: 7 },
    { x: 4, y: 9 },
    { x: 5, y: 6 },
    { x: 6, y: 15 },
]

const graphData3 = [
    { x: 1, y: 5 },
    { x: 2, y: 10 },
    { x: 3, y: 7 },
    { x: 4, y: 9 },
    { x: 5, y: 6 },
    { x: 6, y: 3 },
]

const graphData = [graphData2, graphData3];
  
  const Graph = ({id}) => {
  return (
    <div>
       <VictoryGroup 
      width={180} 
      height={180} 
    >
      <VictoryArea 
        data={graphData[id-2]} 
        style={{data: { fill: 'lightblue', stroke: 'teal' }}} 
      />
    </VictoryGroup> 
    </div>
  )
}

export default Graph