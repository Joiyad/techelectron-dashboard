import React from 'react'
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";

const MenuItem = ({item: {id, title, imageLink}}, onClick, selected) => {
  return (
    <div className={clsx("w-full mt-6 flex items-center px-3 sm:px-0 xl:px-3 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer hover:bg-gray-200 rounded-md hover:transition-all", selected === id ? "sidebar-item-selected" : "sidebar-item")}
      onClick={() => onClick(id)}
    >
      <img src={imageLink} alt="logo" width="20" height="10" />
      <div className="block sm:hidden xl:block ml-2">{title}</div>
      <div className="block sm:hidden xl:block flex-grow" />
    </div>
  )
}

export default MenuItem