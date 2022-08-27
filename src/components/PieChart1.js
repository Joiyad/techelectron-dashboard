import React from "react";
import { VictoryPie } from "victory";

const data = [
  { x: 25, y: 40 },
  { x: 35, y: 20 },
  { x: 40, y: 80 },
];

const PieChart1 = () => {
  return (
    <div>
      <div className="w-84 md:w-84 lg:w-96 md:px-12 border-r-2">
        <VictoryPie
          padAngle={({ datum }) => 2}
          innerRadius={100}
          data={data}
          colorScale={["#19CD50", "#CACDD0", "blue"]}
          labelComponent={undefined}
        />
      </div>
      <div className="flex flex-row gap-x-8 md:pl-6 lg:w-16">
        <div className="flex flex-row gap-x-2">
          <div className="w-6 h-6 bg-blue-700 rounded-md"></div>
          <p className="text-xm font-semibold">Active</p>
        </div>
        <div className="flex flex-row gap-x-2">
          <div className="w-6 h-6 bg-emerald-500 rounded-md"></div>
          <p className="text-xm font-semibold">Patrion</p>
        </div>
        <div className="flex flex-row gap-x-2">
          <div className="w-6 h-6 bg-gray-400 rounded-md"></div>
          <p className="text-xm font-semibold">Inactive</p>
        </div>
      </div>
    </div>
  );
};

export default PieChart1;
