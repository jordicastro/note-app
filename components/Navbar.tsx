import React from 'react'
import Link from 'next/link'
import { RiHome5Line as HomeIcon } from 'react-icons/ri'
import { BsThreeDots as MenuIcon } from 'react-icons/bs'
import darkModeButton from "@/public/assets/dark-mode-button.svg"
import { FaRegMoon as Moon1 } from "react-icons/fa";
import { RiMoonClearLine as Moon2 } from "react-icons/ri";
import Image from 'next/image'

const Navbar = () => {



  return (
    <nav className="fixed top-0 max-w-7xl w-full mx-auto flex justify-between items-center px-2 py-1 border border-slate-500">
        <Link href={"/"}>
          <HomeIcon size={24}/>
        </Link>
        <div className="flex justify-center items-center">
            <button className="w-8 h-auto mx-2">
                <Moon2 size={20}/>
            </button>
            <button className="hover:brightness-75">
                <MenuIcon size={24}/>
            </button>
        </div>
    </nav>
  )
}

export default Navbar