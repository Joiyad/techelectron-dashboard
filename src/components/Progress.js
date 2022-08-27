const data = [
    { id: 1, title: "Jan-Feb", percent: "24.3%" },
    { id: 2, title: "Mar-Apr", percent: "10.3%" },
    { id: 3, title: "May-Jun", percent: "18.4%" },
    { id: 4, title: "Jul-Aug", percent: "7.5%" },
    { id: 5, title: "Sep-Oct", percent: "19.9%" },
    { id: 6, title: "Nov-Dec", percent: "19.9%" },
  ];
  
  const Progress = () => (
    <div>
    <div className="flex flex-wrap lg:w-2/3 mt-8 gap-y-2">
      {data.map(({id, title, percent}) => (
          <div key={id} className="flex flex-row">
          <div className="text-xm font-semibold h-2 w-20">{title}</div>
          <div className="w-[200px] md:w-[300px] lg:w-[400px] relative pt-1">
            <div className="overflow-hidden h-2 flex bg-blue-200">
              <div className="bg-blue-700" style={{width: percent}}></div>
            </div>
          </div>
          <p className="ml-2 text-xm font-semibold">{percent}</p>
        </div>
      ))}
    </div>
    <div className="flex flex-row gap-x-2 mt-16 pl-5">
          <div className="w-6 h-6 bg-blue-700 rounded-md"></div>
          <p className="text-xm font-semibold">Magazine</p>
        </div>
    </div>
  );

  export default Progress;