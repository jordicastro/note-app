import React from 'react'
import Line from '@/components/Line'
import Image from 'next/image'
import ReactIcon from "@/public/assets/ReactNotes-logo.svg"
import LectureNotesIcon from "@/public/assets/LectureNotes-logo.svg"
import Carousel from './Carousel'

const Hero = () => {
    const notes = [
        {
            icon: "../public/assets/LectureNotes-logo.svg",
            title: "Lecture Notes Spring 2024"
        },
        {
            icon: {ReactIcon},
            title: "React Notes"

        },
        {
            icon: "Markdown-icon.svg",
            title: "Markdown Tutorial"
        },
        {
            icon: "empty-page.svg",
            title: "Projects"
        }
    ]

  return (
    <>
        <h1 className="flex justify-center flex-col items-center my-7">Good afternoon, Jordi</h1>
        <section className="space-y-3">
            <button className="border border-slate-500">ListorGridView</button>
            <Line />

            <div className="border border-slate-500 mx-7 w-auto h-48 rounded-xl ">
                {notes.map((note, index) => (
                    <div key={index} className="flex justify-start items-center note-item hover:bg-dark-200 ">
                        <Image src={`/${note.icon}`} alt="icon" width={40} height={40} />
                        <p className="mx-2">{note.title}</p>
                    </div>
                ))}
            </div>

        </section>
        <Carousel />

    </>
  )
}

export default Hero