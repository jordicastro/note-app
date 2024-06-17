import React from 'react'
import Card from './Card'

import reactIcon from "@/public/assets/react-icon.svg"
import fireIcon from "@/public/assets/fire-icon.png"
import markdownIcon from "@/public/assets/markdown-icon.svg"
import emptyPageIcon from "@/public/assets/empty-page-icon.svg"
import { IoIosArrowDroprightCircle as RightArrow } from "react-icons/io";
import Link from 'next/link'
import Image from 'next/image'

const notes = [
  {
      _id: "1",
      icon: fireIcon,
      title: "Lecture Notes Spring 2024"
  },
  {
      _id: "2",
      icon: reactIcon,
      title: "React Notes"

  },
  {
      _id: "3",
      icon: markdownIcon,
      title: "Markdown Tutorial"
  },
  {
      _id: "4",
      icon: emptyPageIcon,
      title: "Projects"
  }
]

const Carousel = () => {
  return (
    <>
      <div className="flex justify-center items-center border border-slate-500 rounded-xl w-auto h-64 my-3 gap-8">
        {notes.map((note, index) => (
          <Card key={index} icon={note.icon} title={note.title} _id={note._id} />
        ))}
      <button className="">
        <RightArrow size={24} className="hover:brightness-75"/>
      </button>
        
      </div>
    </>
  )
}

export default Carousel