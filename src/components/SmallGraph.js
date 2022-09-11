import React from 'react';
import { VictoryArea, VictoryGroup} from 'victory';
import { graphData } from '../data/small-Graph-data';

  
  const SmallGraph = ({id}) => {
  return (
    <div>
       <VictoryGroup 
      width={200} 
      height={180} 
    >
      <VictoryArea 
        data={graphData[id-1]} 
        style={{data: { fill: 'lightblue', stroke: 'teal' }}} 
      />
    </VictoryGroup> 
    </div>
  )
}

export default SmallGraph