import React, { useState } from "react";
import SmallGraph from "./SmallGraph";
import PieChart1 from "./PieChart1";
import Progress from "./Progress";
import { data1 } from "../data/data1";
import { data2 } from "../data/data2";
import Graph from "./Graph";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const Content = ({ hideSidebar }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="flex w-full">
      <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">.</div>
        <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2 md:px-8">
          <div className="w-full sm:flex p-2 items-end">
            <div className="sm:flex-grow flex justify-between">
              <div className="">
                <div className="flex items-center">
                  <div className="text-3xl font-bold">Dashboard</div>
                <div className="flex items-center p-2 bg-card ml-2 rounded-xl"></div>
              </div>
            </div>

            {/* Date component */}
            <div className="flex items-center text-xs">
              <img className="hidden md:block mr-2" src="/date-icon.png" alt="date" width="20"/>
              <DatePicker className="w-16" selected={startDate} onChange={(date) => setStartDate(date)} />
              -
              <DatePicker className="w-16" selected={endDate} onChange={(date) => setEndDate(date)} />
            </div>

            {/* Button for navbar in small width devices */}
            <button onClick={hideSidebar} type="button" className="block sm:hidden">
              <img src="/menu.png" alt="menu" className="w-6" />
            </button>
          </div>
        </div>

        {/* Data component 1 */}
        <div className="w-full flex flex-col md:flex-row mt-12 border-b-2 pb-2 md:mt-4">
          {data1.map(({ id, title, Numbers, subtitle, tag, imageLink, increase, graph}) => (
              <>
                <div key={id} className="pl-2 lg:w-1/4 border-r-2 mb-8 md:mb-0">
                  <div className="rounded-lg bg-card h-30">
                    <h2 className="text-xl font-semibold text-center">{title}</h2>
                    <div className="flex flex-row justify-center h-20 items-center pl-4">
                      <div className="inline-flex">
                        <div className="text-4xl text-center font-semibold">{Numbers}</div>
                        {tag && (
                          <div
                            className={`${
                              increase
                                ? `bg-green-200 text-green-600`
                                : `bg-red-200 text-red-600`
                            } m-2 rounded-[20px] pl-4 pr-6 font-semibold h-6 inline-flex`}
                          >
                            {tag}
                            <img src={imageLink} alt="icon" className="w-4"/>
                          </div>
                        )}
                      </div>
                      <div>
                        {graph && (
                            <SmallGraph id={id} />
                        )}
                      </div>
                    </div>
                    <p className="text-xm text-center text-gray-500">{subtitle}</p>
                  </div>
                </div>
              </>
            )
          )}
        </div>

        {/* Data component 2 */}
        <div className="w-full flex flex-row border-b-2 pb-2">
          <div className="w-3/4 flex flex-col md:flex-row mt-4">
            {data2.map(({ id, title, Numbers, subtitle}) => (
                <>
                  <div key={id} className="pl-2 lg:w-1/3 border-r-2 border-b-2 md:border-b-0">
                    <div className="rounded-lg bg-card h-30">
                      <h2 className="text-1xl font-semibold text-center">{title}</h2>
                      <div className="text-3xl text-center font-semibold">{Numbers}</div>
                      <p className="text-xm text-center text-gray-500">{subtitle}</p>
                    </div>
                  </div>
                </>
              )
            )}
          </div>
          <div className="w-1/4 border-r-2 mt-4">
              <div className="rounded-lg bg-card h-30">
                <h2 className="text-1xl font-semibold text-center">Total Payment Recieved</h2>
                <div className="text-3xl text-center font-semibold">15,000 ₹</div>
              </div>
          </div>
        </div>

        {/* Data component 3(Main Graph) */}
        <div className="w-full pt-4 mt-12 md:mt-0">
              <h2 className="pl-4 md:pl-8 text-center md:text-left text-xl font-semibold">Income</h2>
              <Graph />
        </div>

        {/* pie chart component */}
        <div className="w-full border-t-2 flex flex-wrap mt-20 md:mt-8">
          <div className="p-2 lg:w-1/3">
            <h2 className="text-left font-semibold text-xl">Subscriber</h2>
            <div className="rounded-lg bg-card h-80">
              <PieChart1/>
            </div>
          </div>

          {/* progress bar component */}
          <div className="p-2 lg:w-2/3 mt-40 md:mt-0">
            <h2 className="md:ml-12 font-semibold text-xl">Advertisements</h2>
            <div className="rounded-lg bg-card h-80 md:pl-16">
              <Progress />
            </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Content;
