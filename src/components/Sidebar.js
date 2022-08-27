import React, { useState } from "react";
import MenuItem from "./MenuItem";

const sidebarItems = [
  [
    { id: "0", title: "Dashboard", imageLink: "/dashboard.png", },
    { id: "1", title: "Filters", imageLink: "/filter.png" },
    { id: "2", title: "Subscriptions", imageLink: "/people.png" },
    { id: "3", title: "Consumers", imageLink: "/user.png" },
    { id: "4", title: "Advertisements", imageLink: "/advertising.png" },
    { id: "5", title: "Print Labels", imageLink: "/printer.png" },
    { id: "6", title: "Payments", imageLink: "/money-bag.png" },
    { id: "7", title: "Plans", imageLink: "/settings.png" },
    { id: "8", title: "Magazines", imageLink: "/open-magazine.png" },
  ],
];

const Sidebar = ({ showSidebar, hideSidebar }) => {
  const [selected, setSelected] = useState("0");

    const onClick = () => {};

  return (
    <div
      className={
        `fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col z-10 border-2 bg-gray-100
        ${showSidebar ? `flex` : `hidden`}`
      }
    >
      <div className="flex-shrink-0 overflow-hidden p-2">
      <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 md:px-4 sidebar-separator-top">
      <button onClick={hideSidebar} type="button" className=" block sm:hidden">
        <img src='/menu.png' alt="back" className="w-8"/>
      </button>
      <button onClick={onClick} type="button" className="px-5 py-2 bg-white hidden xl:block">
        <img src='/logo.png' alt="logo" className="w-32"/>
      </button>
        </div>
      </div>
      <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col xl:px-8">
        {sidebarItems[0].map((i) => (
          <MenuItem
            key={i.id}
            item={i}
            onClick={setSelected}
            selected={selected}
          />
        ))}
      </div>
      <div className="p-2 flex flex-col">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 xl:px-8">
          <div className="w-10 rounded-[50%] overflow-hidden border-2 border-black">
            <img src="/dashboard.png" alt="profile" />
          </div>
          <div className="block sm:hidden xl:block ml-2 font-bold text-md">
            Jerry Wilson
            <p className="text-sm">Admin</p>
          </div>
        </div>
        <button className="hidden xl:flex px-9 py-1  bg-gray-400 hover:bg-gray-300 rounded-md m-auto">
          <img src="/logout.png" alt="logout" className="w-6 mr-2"/><p>Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
