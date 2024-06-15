import Link from 'next/link'
import React from 'react'
import { RiHome5Line as HomeIcon } from 'react-icons/ri'
import { BsThreeDots as MenuIcon } from 'react-icons/bs'
import darkModeButton from "@/public/assets/dark-mode-button.svg"
import Image from 'next/image'

const Navbar = () => {



  return (
    <nav className="flex justify-between items-center px-2 py-1 rounded-xl border border-slate-500">
        <Link href={"/"}>
          <HomeIcon size={16}/>
        </Link>
        <div className="flex justify-center">
            <button className="w-10 h-10 border border-slate-500 mx-2">
                <Image src={darkModeButton} alt="Dark Mode Button" />
            </button>
            <button className="border border-slate-400">
                <MenuIcon size={16}/>
            </button>
        </div>
    </nav>
  )
}

export default Navbar