import React from 'react'
import { CartesianGrid, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Line } from 'recharts'
import { LargeGraphData } from '../data/Large-Graph-data'

const Graph = () => {
  return (
    <div>
       <div className="flex-grow mt-4 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={200} data={LargeGraphData}>
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#6B8DE3" />
                <stop offset="1" stopColor="#7D1C8D" />
              </linearGradient>
            </defs>
            <CartesianGrid
              horizontal
              vertical={false}
              strokeWidth="1"
              stroke="#252525"
            />
            <XAxis
              dataKey="x"
              axisLine
              tickLine={false}
              tickMargin={10}
            />
            <YAxis 
              dataKey="revenue"
              axisLine={false}
              tickLine={false} 
              tickMargin={10} 
            />
            <Tooltip content="revenue" cursor={false} />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#1672F8"
              strokeWidth="5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Graph