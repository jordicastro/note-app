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

interface NavbarProps {
  icon?: string,
  title?: string
}

const Navbar: React.FC<NavbarProps> = ({icon, title}) => {

  const [darkMode, setDarkMode] = useState(true); 

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log('darkMode Navbar state:', darkMode)
    // changeTheme(darkMode);
  }

  return (
    <div className={`${darkMode && "dark"}`}>
      <nav className="flex justify-between w-full mx-auto items-center py-1 pr-[10%] bg-transparent dark:bg-dark-200">
            <div className="flex gap-2 bg-transparent">
          <Link href={"/"} className="bg-transparent">
              <HomeIcon size={18}/>
          </Link>
              {icon && title && 
              <>
                <h6>/</h6>
                <h6>{icon}</h6>
                <h6>{title}</h6>
              </>
              }
            </div>
          <div className="flex justify-center items-center bg-transparent">
              <button onClick={toggleDarkMode} className="w-8 h-auto mx-2">
                  {darkMode ? <Moon size={18}/> : <Sun size={18}/> }
              </button>
              <button className="hover:brightness-75 bg-transparent">
                  <MenuIcon size={18}/>
              </button>
          </div>
      </nav>
    </div>
  )
}

export default Navbar