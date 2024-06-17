"use client";
import React from 'react'
import Link from 'next/link'
import { RiHome5Line as HomeIcon } from 'react-icons/ri'
import { BsThreeDots as MenuIcon } from 'react-icons/bs'
import darkModeButton from "@/public/assets/dark-mode-button.svg"
import { FaRegMoon as Moon } from "react-icons/fa";
import { LuSun as Sun } from "react-icons/lu";
import Image from 'next/image'
import { useState } from 'react'



const Navbar = () => {

  const [darkMode, setDarkMode] = useState(true); 

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }



  return (
    <div className={`${darkMode && "dark"}`}>
    <nav className="flex justify-between fixed w-full mx-auto items-center py-1 pr-[10%] bg-transparent dark:bg-sky-500">
        <Link href={"/"} className="bg-transparent">
          <HomeIcon size={24}/>
        </Link>
        <div className="flex justify-center items-center bg-transparent">
            <button onClick={toggleDarkMode} className="w-8 h-auto mx-2">
                {darkMode ? <Moon size={20}/> : <Sun size={20}/> }
            </button>
            <button className="hover:brightness-75 bg-transparent">
                <MenuIcon size={24}/>
            </button>
        </div>
    </nav>
    </div>
  )
}

export default Navbar