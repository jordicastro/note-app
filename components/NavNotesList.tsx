import { Note } from '@/types/Note'
import React from 'react'
import Link from 'next/link';
import { File, Plus, Ellipsis, Trash } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavNotesListProps {
    notes: Note[];
}

const NavNotesList = ({notes}: NavNotesListProps) => {
  return (
    <>
        {notes?.map((note) => (
              <div key={note._id} className="hover:border border-primary/5 hover:bg-primary/5 group/note">
                    <Link href={`/notes/${note._id}`} className="flex items-center justify-between gap-x-2 px-2 py-1 ">
                    <div className="flex justify-center items-center gap-x-2 py-1">
                      {note.icon === "" ? (
                        <File className="h-4 w-4" />
                      ) : (
                        <p className="text-sm">{note.icon}</p>
                      )}
                      <p className="text-sm text-muted-foreground line-clamp-1">{note.title}</p>
                    </div>
                    <div className="flex justify-center items-center text-muted-foreground gap-x-2 ">
                            <div
                                className="rounded-sm opacity-0 group-hover/note:opacity-100 bg-secondary/10 hover:bg-neutral-300 dark:hover:bg-neutral-600"
                            >
                                <Ellipsis className="h-4 w-4" />
                            </div>
                      <div
                        className="rounded-sm opacity-0 group-hover/note:opacity-100 bg-secondary/10 hover:bg-neutral-300 dark:hover:bg-neutral-600"
                        onClick={() => {console.log("add child note")}}
                      >
                        <Plus className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
              </div>
            ) )}
    </>
  )
}

export default NavNotesList