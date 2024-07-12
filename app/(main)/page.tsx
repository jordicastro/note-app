import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Note } from "@/types/Note";

const getNotes = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/notes");

    if (!res.ok) {
      throw new Error("Failed to fetch notes");
    }

    return res.json();
  } catch (error) {
    console.error("Error loading notes ", error);
  }
};

const Home = async () => {
  const { notes } = await getNotes();

  const fixCorruptNotes = async (notes: Note[]) => {
    for (const note of notes) {
      if (note.content === "[]") {
        try {
          const res = await fetch(
            `http://localhost:3000/api/notes/${note._id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ content: "" }),
            },
          );
          console.log(res);
        } catch (error) {
          console.log("error fixing corrupt note", error);
        }
      }
    }
  };

  await fixCorruptNotes(notes);

  console.log(notes);
  return (
    <div className="min-h-screen flex flex-col justify-end">
      {/* <Navbar /> */}
      <Hero notes={notes} />
      <Footer />
    </div>
  );
};

export default Home;
