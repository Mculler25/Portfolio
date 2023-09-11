import React from "react";

export const Nav = () => {
    return (
        <nav className='m-3 flex flex-row justify-center p-3'>
            <li className='text-red-500 text-2xl list-none m-3 tracking-wide'>Home</li>
            <li className='text-red-500 text-2xl list-none m-3 tracking-wide'>
            <a href="#AboutMe">About Me</a>
            </li>
            <li className='text-red-500 text-2xl list-none m-3 tracking-wide'>
               <a href="#Projects">Projects</a>
            </li>
            <li className='text-red-500 text-2xl list-none m-3 tracking-wide'>Contact Me</li>
        </nav>
    )
}