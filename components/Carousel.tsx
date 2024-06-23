import React from 'react'
import Card from './Card'

import reactIcon from "@/public/assets/react-icon.svg"
import fireIcon from "@/public/assets/fire-icon.png"
import markdownIcon from "@/public/assets/markdown-icon.svg"
import emptyPageIcon from "@/public/assets/empty-page-icon.svg"
import { IoIosArrowDroprightCircle as RightArrow } from "react-icons/io";
import Link from 'next/link'
import Image from 'next/image'
import { Note } from '@/types/Note'

interface CarouselProps {
  notes: Note[];
}

const Carousel: React.FC<CarouselProps> = ({ notes }) => {

  return (
    <>
      <div className="flex justify-center items-centerrounded-xl w-auto h-64 my-3 gap-8">
        {notes.map((note: Note, index: number) => (
          <Card key={index} title={note.title} icon={note.icon}  _id={note._id} />
        ))}
      <button className="">
        <RightArrow size={24} className="hover:brightness-75"/>
      </button>
        
      </div>
    </>
  )
}

export default Carousel