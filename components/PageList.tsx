import React from 'react'
import reactIcon from "@/public/assets/react-icon.svg"
import fireIcon from "@/public/assets/fire-icon.png"
import markdownIcon from "@/public/assets/markdown-icon.svg"
import emptyPageIcon from "@/public/assets/empty-page-icon.svg"
import { BsThreeDots as MenuIcon } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import { Note } from '@/types/Note'
import { useState, useEffect } from 'react'

interface PageListProps {
    notes: Note[];
}

const PageList:React.FC<PageListProps> = ({notes}) => {


    // const notes = [
    //     {
    //         _id: "1",
    //         icon: fireIcon,
    //         title: "Lecture Notes Spring 2024"
    //     },
    //     {
    //         _id: "2",
    //         icon: reactIcon,
    //         title: "React Notes"

    //     },
    //     {
    //         _id: "3",
    //         icon: markdownIcon,
    //         title: "Markdown Tutorial"
    //     },
    //     {
    //         _id: "4",
    //         icon: emptyPageIcon,
    //         title: "Projects"
    //     }
    // ]

  return (
    <div className="border border-slate-500 mx-7 w-auto h-48 rounded-xl mt-3">
                {notes.map((note: Note, index: number) => (
                    <div key={index}>
                        <Link href={`/notes/${note._id}`}>
                            <div className="flex justify-start items-center my-2 note-item hover:bg-dark-300 hover:underline ">
                                {/* <Image className="size-5 hover:bg-dark-300" src={note.icon} alt="icon" width={25} height={25} /> */}
                                <h5>{note.icon}</h5>
                                <h5 className="mx-3 ">{note.title}</h5>
                            </div>
                        </Link>
                    </div>
                ))}

        <button className="border border-slate-400 my-4">
            <MenuIcon size={16} className="hover:brightness-75"/>
        </button>
    </div>
  )
}

export default PageList;