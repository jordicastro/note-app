"use client";
import React from "react";
import Line from "@/components/Line";
import Image from "next/image";

import Carousel from "./Carousel";
import listButton from "@/public/assets/list-button.svg";
import listButtonDark from "@/public/assets/list-button-dark.svg";
import gridButton from "@/public/assets/grid-button.svg";
import gridButtonDark from "@/public/assets/grid-button-dark.svg";
import NotesList from "./NotesList";
import { Note } from "@/types/Note";

import { useState, useEffect } from "react";
import { useFont } from "@/hooks/useFont";



const Hero = () => {
  const [view, setView] = useState("list");
  const greetings = ["Good morning, ", "Good afternoon, ", "Good evening, "];

  const [greeting, setGreeting] = useState(greetings[0]);
  const [name, setName] = useState("Jordi");
  const [notes, setNotes] = useState<Note[]>([]);
  const { currentFont } = useFont();

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();

    console.log(hour);
    if (hour >= 5 && hour < 12) {
      setGreeting(greetings[0]);
    } else if (hour >= 12 && hour < 18) {
      setGreeting(greetings[1]);
    } else {
      setGreeting(greetings[2]);
    }
  }, []);

  useEffect( () => {
    console.log(currentFont);
  }, [currentFont]);

  useEffect( () => {
    const getNotes = async () => {
      const res = await fetch(`/api/notes`);
      if (!res.ok) {
        throw new Error("Failed to fetch notes");
      }
      const data = await res.json();
      setNotes(data.notes);
    }
    getNotes();
  }, [])

  return (
    <div className="px-[5%]">
      {/* conditional greeting  */}
      <div className="flex justify-center flex-row items-center space-x-3 my-7 mt-24">
        <h1 className={`font-${currentFont} text-3xl sm:text-3xl md:text-4xl lg:text-5xl`}>
          {greeting}{" "}
        </h1>
        <h1 className={`font-${currentFont} text-3xl sm:text-3xl md:text-4xl lg:text-5xl`}>{name}</h1>
      </div>
      <section className="space-y-8">
        {/* list-or-grid view  */}
        <div className="flex">
          <button
            onClick={() => {setView("list")}}
            className={`size-8 ${view === "list" && "brightness-50"} active:scale-95  object-contain dark:hidden`}
          >
            <Image src={listButton} alt="List Button" />
          </button>
          <button
            onClick={() => setView("grid")}
            className={`size-8 ${view === "grid" && "brightness-50"} active:scale-95  object-contain dark:hidden`}
          >
            <Image src={gridButton} alt="Grid Button" />
          </button>

          <button
            onClick={() => {setView("list")}}
            className={`size-8 ${view === "list" && "brightness-50"}  object-contain hidden dark:block`}
          >
            <Image src={listButtonDark} alt="List Button Dark" />
          </button>
          <button
            onClick={() => setView("grid")}
            className={`size-8 ${view === "grid" && "brightness-50"}  object-contain hidden dark:block font-`}
          >
            <Image src={gridButtonDark} alt="Grid Button Dark" />
          </button>
        </div>

        <Line />

        {view === "list" ? (
          <NotesList notes={notes} />
        ) : (
          <Carousel notes={notes} />
        )}
      </section>
    </div>
  );
};

export default Hero;
