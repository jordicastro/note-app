"use client";
import React, { use } from 'react'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Note } from '@/types/Note'
import Navbar from '@/components/Navbar';
import NoteTitle from '@/components/NoteTitle';
import TextEditor from '@/components/TextEditor';

const NotePage = ({}) => {

  const [note, setNote] = useState<Note | null>(null)
  const params = useParams<{ notes: string; id: string }>()
  // get id from url 
  const id = params.id;

  useEffect( () => {
    const getNote = async () => {
      const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
        cache: "no-store"
      })      
      if (!res.ok) {
        throw new Error("Failed to fetch note")
      }
      const data = await res.json();
      setNote(data.note);
    }
    getNote();

  }, [id])

  console.log(note)

  return (
    <div > 
        {note &&
        <div > 
            <Navbar icon={note.icon} title={note.title}/>
            <NoteTitle icon={note.icon} title={note.title}/>
            <TextEditor id={note._id} initialContent={note.content}/>
        </div>
        }
    </div>
)

}

export default NotePage