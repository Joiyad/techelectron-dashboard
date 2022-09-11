import MenuItem from "./MenuItem";

const sidebarItems = [
  [
    { id: "0", title: "Dashboard", imageLink: "/dashboard.png", path:"" },
    { id: "1", title: "Filters", imageLink: "/filter.png", path:"/filters" },
    { id: "2", title: "Subscriptions", imageLink: "/people.png", path:'subscriptions' },
    { id: "3", title: "Consumers", imageLink: "/user.png", path:'consumers' },
    { id: "4", title: "Advertisor", imageLink: "/advertisor.png", path:'advertisor' },
    { id: "5", title: "Advertisements", imageLink: "/advertising.png", path:'advertisements' },
    { id: "6", title: "Patreon", imageLink: "/patreon.png", path:'patreon' },
    { id: "7", title: "Print Labels", imageLink: "/printer.png", path:'print-labels' },
    { id: "8", title: "Payments", imageLink: "/money-bag.png", path:'payments' },
    { id: "9", title: "Plans", imageLink: "/plans.png", path:'plans' },
    { id: "10", title: "Magazines", imageLink: "/open-magazine.png", path:'magazines' },
    { id: "11", title: "Setup", imageLink: "/setup.png", path:'setup' },
  ],
];

const Sidebar = ({ showSidebar, hideSidebar }) => {
    const onClick = () => {};

  return (
    <div className={`fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col z-10 border-2 bg-stone-200 ${showSidebar ? `flex` : `hidden`}`}>
      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 md:px-4 sidebar-separator-top">
        
        {/* Button for small width */}
        <button onClick={hideSidebar} type="button" className=" block sm:hidden">
          <img src='/menu.png' alt="back" className="w-8"/>
        </button>
        <button onClick={onClick} type="button" className="px-5 py-2 bg-white hidden xl:block">
          <img src='/logo.png' alt="logo" className="w-32"/>
        </button>
        </div>
      </div>
      
      {/* Sidebar items */}
      <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col xl:px-8">
        {sidebarItems[0].map((i) => (
          <MenuItem
            key={i.id}
            item={i}
          />
        ))}
      </div>
      
      {/* Admin profile */}
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
