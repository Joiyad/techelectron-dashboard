import React from 'react'

const MenuItem = ({item: {id, title, imageLink, path}}) => {
  return (
    <a href={path} key={id} className="w-full mt-6 flex items-center px-3 sm:px-0 xl:px-3 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer hover:bg-white focus:bg-white rounded-md hover:transition-all">
      <img src={imageLink} alt="logo" width="20" height="10" />
      <div className="block sm:hidden xl:block ml-2">{title}</div>
      <div className="block sm:hidden xl:block flex-grow" />
    </a>
  )
}

export default MenuItem