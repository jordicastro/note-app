"use client";
import React, { use } from "react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Note } from "@/types/Note";
import Navbar from "@/components/Navbar";
import NoteTitle from "@/components/NoteTitle";
import Editor from "@/components/blocknote/Editor";
import { changeNoteContentById, getNoteById } from "@/actions/queries";

const NotePage = ({}) => {
  const [note, setNote] = useState<Note | null>(null);
  const { id } = useParams();
  const lodash = require("lodash");

  useEffect(() => {
    const getNote = async () => {
      const data = await getNoteById(id as string);
      setNote(data.note);
    };
    getNote();
  }, [id]);

  const onChange = async (content: string) => {
    await changeNoteContentById(id as string, content);
  };

  // wait 1 second after user stops typing to update note
  const debounceOnChange = lodash.debounce(onChange, 1000)

  return (
    <div className="pb-40 min-h-screen">
      {note && (
        <div>
          <div className="md:max-w-4xl lg:max-w-5xl mx-auto space-y-16">
            <NoteTitle icon={note.icon} title={note.title} />
            <Editor id={note._id} initialContent={note.content} onChange={debounceOnChange} />
          </div>
        </div>
      )}
    </div>
  );
};

export default NotePage;
