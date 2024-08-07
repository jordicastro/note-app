"use client";

import { useParams, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Note } from "@/types/Note";
import { File } from "lucide-react";
import { updateTitleById } from "@/actions/queries";

interface TitleProps {
    note: Note;
}


const Title = ({note}: TitleProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const { id } = useParams();
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(note?.title || "Untitled");
    const icon = note?.icon || "";
    const lodash = require("lodash");

    const enableInput = () => {
        setTitle(note.title);
        setIsEditing(true);
        setTimeout( () => {
            inputRef.current?.focus();
            inputRef.current?.setSelectionRange(0, inputRef.current.value.length)
        }, 0);
    };

    const disableInput = () => {
        setIsEditing(false);
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value); 
    };

    const onKeyDown = async (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            disableInput();
            await updateTitleById(id as string, title);
            router.refresh();
        }
    }

    // wait 1 second after user stops typing to update note
    const debounceOnChange = lodash.debounce(onChange, 1000)


    return (
        <div className="flex items-center gap-x-1">
            {!!note.icon ? (<p>{note.icon}</p>) : <File className="h-4 w-4" />}
            { isEditing ? (
                <Input
                    ref={inputRef}
                    onClick={enableInput}
                    onBlur={disableInput}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={title}
                    className="h-7 px-2 focus-visible:ring-transparent"
                />
            ):(
                <Button
                    onClick={enableInput}
                    variant="ghost"
                    size="sm"
                    className="font-normal h-auto p-1"
    
                >
                    <span className="truncate">
                        {note?.title}
                    </span>
                </Button>
            )}
        </div>
      )
}

export default Title