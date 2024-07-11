"use client";
import Link from "next/link";
import { useState } from "react";
import { BsThreeDots as MenuIcon } from "react-icons/bs";
import { Note } from "@/types/Note";
import { File } from "lucide-react";
import { useFont } from "@/hooks/useFont";

interface NotesListProps {
  notes: Note[];
}

const NotesList: React.FC<NotesListProps> = ({ notes }) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const { currentFont } = useFont();

  const notesToDisplay = isExpanded ? notes : notes.slice(0, 4);

  return (
    <div className="mx-7 w-auto h-48 rounded-xl mt-3">
      {notesToDisplay.map((note: Note, index: number) => (
        <div key={index}>
          <Link href={`/notes/${note._id}`}>
            <div className="flex justify-start items-center my-2 note-item hover:bg-dark-300 hover:underline">
              {!!note.icon ? (<h5 className="text-base sm:text-xl md:text-2xl">{note.icon}</h5>) : <File />}
              <h5 className="mx-3 text-base sm:text-lg md:text-xl">{note.title}</h5>
            </div>
          </Link>
        </div>
      ))}

      <button
        className="border border-slate-400 my-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <MenuIcon size={16} className="hover:brightness-75" />
      </button>
    </div>
  );
};

export default NotesList;
