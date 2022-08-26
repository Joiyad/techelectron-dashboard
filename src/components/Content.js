import React from "react";

const data = [
  {
    id: 1,
    title: "Total Consumers",
    Numbers: "1127",
    subtitle: "26 new subscription added",
    tag: "",
    imageLinks: "",
    graph:"",
  },
  {
    id: 2,
    title: "Active Subscriptions",
    Numbers: "969",
    subtitle: "26 new subscription added",
    tag: "17%",
    imageLinks: "",
    graph:"",
  },
  {
    id: 3,
    title: "Inactive Users",
    Numbers: "158",
    subtitle: "9 inactive user",
    tag: "9%",
    imageLinks: "",
    graph:"",
  },
];

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
        <div className="w-full flex flex-col md:flex-row border-b-2">
          {data.map(({ id, title, Numbers, subtitle, tag, imageLinks, graph }) => (
            <>
              <div key={id} className="p-2 lg:w-1/3 border-r-2">
                <div className="rounded-lg bg-card h-40">
                  <h2 className="text-xl font-semibold text-center">{title}</h2>
                  <div className="flex flex-row justify-center">
                    <div className="flex flex-row justify-center">
                      <div className="text-4xl text-center font-semibold">
                        {Numbers}
                      </div>
                      {tag && (
                        <div className="bg-emerald-400 m-2 rounded-md px-2">
                          {tag}
                        </div>
                      )}
                    </div>
                    <div>
                      {graph && (
                          <h1>graph</h1>
                      )
                      }
                    </div>
                  </div>
                  <p className="text-xl text-center text-gray-500">
                    {subtitle}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card h-80">
            {/* <Segmentation /> */}
            component4
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card h-80">
            {/* <Satisfication /> */}
            component5
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card overflow-hidden h-80">
            {/* <AddComponent /> */}
            component6
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
