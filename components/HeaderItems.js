import React from 'react'

const HeaderItems = ({icon, title}) => {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-14">
      <p className="text-xl sm:text-2xl font-light uppercase group-hover:animate-bounce">
        {icon}
      </p>
      <p className="opacity-0 text-white transition duration-150 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}

export default HeaderItems