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

interface HeroProps {
  notes: Note[];
}

const Hero: React.FC<HeroProps> = ({ notes }) => {
  const [view, setView] = useState("list");
  const greetings = ["Good morning, ", "Good afternoon, ", "Good evening, "];

  const handleListButtonClick = () => {
    setView("list");
  };
  const handleGridButtonClick = () => {
    setView("grid");
  };
  const [greeting, setGreeting] = useState(greetings[0]);
  const [name, setName] = useState("Jordi");

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

  return (
    <>
      {/* conditional greeting  */}
      <div className="flex justify-center flex-row items-center space-x-3 my-7 mt-24">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
          {greeting}{" "}
        </h1>
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl">{name}</h1>
      </div>
      <section className="space-y-8">
        {/* list-or-grid view  */}
        <div className="flex">
          <button
            onClick={handleListButtonClick}
            className={`size-8 ${view === "list" && "brightness-50"} active:scale-95  object-contain dark:hidden`}
          >
            <Image src={listButton} alt="List Button" />
          </button>
          <button
            onClick={handleGridButtonClick}
            className={`size-8 ${view === "grid" && "brightness-50"} active:scale-95  object-contain dark:hidden`}
          >
            <Image src={gridButton} alt="Grid Button" />
          </button>

          <button
            onClick={handleListButtonClick}
            className={`size-8 ${view === "list" && "brightness-50"}  object-contain hidden dark:block`}
          >
            <Image src={listButtonDark} alt="List Button Dark" />
          </button>
          <button
            onClick={handleGridButtonClick}
            className={`size-8 ${view === "grid" && "brightness-50"}  object-contain hidden dark:block`}
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
    </>
  );
};

export default Hero;
