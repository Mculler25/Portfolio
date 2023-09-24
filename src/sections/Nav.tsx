import React from "react";

export const Nav = () => {
  return (
    <nav className='flex flex-row justify-center p-3 gap-2 md:gap-10'>
      <li className='bg-red-500 text-white text-md md:text-xl list-none tracking-wide px-4 hover:text-gray-500'>Home</li>
      <li className='bg-red-500 text-white text-md md:text-xl list-none tracking-wide px-4 hover:text-gray-500'>
        <a href="#AboutMe">About Me</a>
      </li>
      <li className='bg-red-500 text-white text-md md:text-xl list-none tracking-wide px-4 hover:text-gray-500'>
        <a href="#Projects">Projects</a>
      </li>
      <li className='bg-red-500 text-white text-md md:text-xl list-none tracking-wide px-4 hover:text-gray-500'>
        <a href="#Contact">Contact Me</a>
      </li>
    </nav>
  )
}
