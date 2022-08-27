import React from "react";
import Graph from "./Graph";
import PieChart1 from "./PieChart1";
import {Progress} from "./Progress";

const data = [
  {
    id: 1,
    title: "Total Consumers",
    Numbers: "1127",
    subtitle: "26 new subscribers",
    tag: "",
    imageLink: "",
    graph: "",
  },
  {
    id: 2,
    title: "Active Subscriptions",
    Numbers: "969",
    subtitle: "26 new subscribers",
    tag: "17%",
    imageLink: "/increase.png",
    graph: "1",
    increase: true,
  },
  {
    id: 3,
    title: "Inactive Users",
    Numbers: "158",
    subtitle: "9 inactive user",
    tag: "10%",
    imageLink: "/decrease.png",
    graph: "1",
    increase: false,
  },
];

const incomeData = [
  {id:1, title:"February", income:"75,000"},
  {id:2, title:"January", income:"73,500"},
  {id:3, title:"December", income:"62,340", colored:true},
  {id:4, title:"November", income:"51,718"},
]

const Content = ({ hideSidebar }) => {
  return (
    <div className="flex w-full">
      <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
        .
      </div>
      <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2 md:px-8">
        <div className="w-full sm:flex p-2 items-end">
          <div className="sm:flex-grow flex justify-between">
            <div className="">
              <div className="flex items-center">
                <div className="text-3xl font-bold">Dashboard</div>
                <div className="flex items-center p-2 bg-card ml-2 rounded-xl"></div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="/date-icon.png"
                alt="date"
                width="20"
                className="mr-4"
              />
              <div className="flex justify-end">October 26</div>
            </div>
            <button
              onClick={hideSidebar}
              type="button"
              className="block sm:hidden"
              icon="res-react-dash-sidebar-open"
            >
              <img src="/menu.png" alt="menu" className="w-6" />
            </button>
          </div>
        </div>

        {/* Top Component */}
        <div className="w-full flex flex-col md:flex-row mt-4">
          {data.map(
            ({
              id,
              title,
              Numbers,
              subtitle,
              tag,
              imageLink,
              increase,
              graph,
            }) => (
              <>
                <div key={id} className="p-2 lg:w-1/3 border-r-2 border-b-2">
                  <div className="rounded-lg bg-card h-30">
                    <h2 className="text-xl font-semibold text-center">
                      {title}
                    </h2>
                    <div className="flex flex-row justify-center h-24 items-center pl-4">
                      <div className="inline-flex">
                        <div className="text-5xl text-center font-semibold">
                          {Numbers}
                        </div>
                        {tag && (
                          <div
                            className={`${
                              increase
                                ? `bg-green-200 text-green-600`
                                : `bg-red-200 text-red-600`
                            } m-2 rounded-[20px] pl-4 pr-6 font-semibold h-6 inline-flex`}
                          >
                            {tag}
                            <img
                              src={imageLink}
                              alt="icon"
                              className="w-4"
                            />
                          </div>
                        )}
                      </div>
                      <div>
                        {graph && (
                            <Graph id={id} />
                        )}
                      </div>
                    </div>
                    <p className="text-xm text-center text-gray-500">
                      {subtitle}
                    </p>
                  </div>
                </div>
              </>
            )
          )}
        </div>

        {/* Middle component */}
        <h2 className="text-xl font-semibold text-left my-8">Income</h2>
        <div className="w-full flex flex-wrap justify-center gap-2 md:gap-0">
          {incomeData.map(
            ({
              id,
              title,
              income,
              colored
            }) => (
              <>
                <div key={id} className={`${colored? `bg-blue-600 text-white` : ``} group px-2 py-2 w-auto lg:w-1/4 border-r-2 border-x-2`}>
                  <div className="rounded-lg bg-card h-20 px-4">
                    <h2 className={`${colored? ` text-white` : `text-gray-400`}text-xm font-semibold`}>
                      {title}
                    </h2>
                    <div className="text-2xl font-semibold">
                      ₹{income}
                    </div>
                    <button className="text-xs my-1 px-2 py-1 font-semibold rounded-md hidden group-hover:flex group-hover:transition-all group-hover:delay-200 hover:border-2">
                      Insights ▶
                    </button>
                  </div>
                </div>
              </>
            )
          )}
          <div className="hidden md:flex w-full bg-gradient-to-r from-blue-200 to-blue-700 h-6">
            {/* <img src="/bg.png" alt="bg" className="w-full h-16" /> */}
          </div>
        </div>

        {/* Last Component */}
        <div className="w-full border-t-2 flex flex-wrap mt-8">
        <div className="p-2 lg:w-1/3">
          <h2 className="text-left font-semibold text-xl">Subscriber</h2>
          <div className="rounded-lg bg-card h-80">
            <PieChart1/>
          </div>
        </div>
        <div className="p-2 lg:w-2/3 mt-20 md:mt-0">
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
