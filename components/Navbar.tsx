"use client";
import React from "react";
import Link from "next/link";
import { RiHome5Line as HomeIcon } from "react-icons/ri";
import { BsThreeDots as MenuIcon } from "react-icons/bs";
import darkModeButton from "@/public/assets/dark-mode-button.svg";
import { FaRegMoon as Moon } from "react-icons/fa";
import { LuSun as Sun } from "react-icons/lu";
import Image from "next/image";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const fonts = [
  {
    name: "Inter",
    url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap",
  },
  {
    name: "Roboto",
    url: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
  },
  {
    name: "Nunito",
    url: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap",
  },
  {
    name: "Poppins",
    url: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap",
  },
];

interface NavbarProps {
  icon?: string;
  title?: string;
}

const Navbar: React.FC<NavbarProps> = ({ icon, title }) => {
  const [darkMode, setDarkMode] = useState(true);


  let menuFonts = fonts.slice(0, 3);

  return (
    <div>
      <nav className="flex justify-between items-center w-full mx-auto fixed top-0 py-2 px-3 bg-transparent z-10">
        <div className="flex gap-2 bg-transparent">
          <Link href={"/"} className="bg-transparent">
            <HomeIcon size={20} />
          </Link>
          {icon && title && (
            <>
              <h6>/</h6>
              <h6>{icon}</h6>
              <h6>{title}</h6>
            </>
          )}
        </div>
        <div className="flex justify-center items-center gap-x-2">
          <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MenuIcon size={20} />
              </DropdownMenuTrigger>

              <DropdownMenuContent align="start">
                <DropdownMenuLabel>Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <div className="flex justify-center item-center gap-x-8">
                    <h6>Dark Mode</h6>
                    <h6 className="font-zinc-500">CMND+SHFT+L</h6>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <div className="flex gap-x-4">
                  {menuFonts.map((font) => (
                    <DropdownMenuItem key={font.name}>
                      <a
                        href={font.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex justify-center items-center gap-x-2"
                      >
                        <h6>{font.name}</h6>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
