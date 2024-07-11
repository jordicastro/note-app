"use client";

import { useEffect, useState } from "react";
import { File } from "lucide-react";
import { useRouter } from "next/navigation";

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandInput,
} from "@/components/ui/command";

import { useSearch } from "@/hooks/useSearch";
import { Note } from "@/types/Note";


const SearchCommand = () => {
    const router = useRouter();
    const [notes, setNotes] = useState<Note[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    const toggle = useSearch((store) => store.toggle);
    const isOpen = useSearch((store) => store.isOpen);
    const onClose = useSearch((store) => store.onClose);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect( () => {
        const getNotes = async () => {
          const res = await fetch(`http://localhost:3000/api/notes`, {
            cache: "no-store",
          });
          if (!res.ok) {
            throw new Error("Failed to fetch notes");
          }
           const data = await res.json();
    
           setNotes(data.notes);
        }
    
        getNotes();
    }, [])

    useEffect( () => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                toggle();
            }
        }

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, [toggle]);

    const onSelect = (id: string) => {
        router.push(`/notes/${id}`);
        onClose();
    };

    if (!isMounted) return null;

  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
        <CommandInput 
            placeholder={"Search notes..."}
        />
        <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Notes">
                {notes?.map( (note) => (
                    <CommandItem
                        key={note._id}
                        value={`${note._id}-${note.title}`}
                        title={note.title}
                        onSelect={onSelect}
                    >
                        {note.icon ? (
                            <p className="mr-2 text-[18px]">
                                {note.icon}
                            </p>
                        ) : (
                            <File className="mr-2 h-4 w-4" />
                        )}
                        <span>
                            {note.title}
                        </span>
                    </CommandItem>
                ))}
            </CommandGroup>
        </CommandList>
    </CommandDialog>
  )
}

export default SearchCommand