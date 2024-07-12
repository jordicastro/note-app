import { File, Smile, X } from "lucide-react";
import React, { ElementRef, useRef, useState } from "react";
import IconPicker from "./IconPicker";
import { Button } from "./ui/button";
import TextareaAutosize from "react-textarea-autosize";
import { useParams } from "next/navigation";
import { useEffect } from "react";

interface NoteTitleProps {
  icon: string;
  title: string;
}

const NoteTitle: React.FC<NoteTitleProps> = ({ icon, title }) => {
  const inputRef = useRef<ElementRef<"textarea">>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title);
  const { id } = useParams();

  useEffect(() => {
    if (value === "") {
      setValue("Untitled");
    }
  }, [value]);

  const enableInput = () => {
    setIsEditing(true);
    setTimeout(() => {
      setValue(title);
      inputRef.current?.focus();
    }, 0);
  };

  const disableInput = () => {
    setIsEditing(false);
  };

  const onInput = (value: string) => {
    setValue(value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      disableInput();
      console.log(value);
      updateTitle();
    } else if (e.key === "Escape") {
      e.preventDefault();
      disableInput();
      setValue(title);
    }
  };

  const onIconSelect = async (icon: string) => {
    const res = await fetch(`/api/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ icon: icon }),
    });
    if (!res.ok) {
      throw new Error("Failed to update note");
    } else {
      console.log("icon updated");
    }
  };

  const onRemoveIcon = async () => {
    const res = await fetch(`/api/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ icon: "" }),
    });
    if (!res.ok) {
      throw new Error("Failed to update note");
    } else {
      console.log("icon removed");
    }
  };

  const updateTitle = async () => {
    const res = await fetch(`/api/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: value }),
    });
    if (!res.ok) {
      throw new Error("Failed to update note");
    } else {
      console.log("note updated");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center mt-24 gap-x-6 ">
        {!!icon ? (
          <div className="flex items-center gap-x-2 group/icon">
            <IconPicker onChange={onIconSelect}>
              <p className="lg:text-5xl md:text-4xl0 sm:text-4xl text-3xl hover:opacity-75 transition">
                {icon}
              </p>
            </IconPicker>

            <Button
              onClick={onRemoveIcon}
              className="rounded-full opacity-0 group-hover/icon:opacity-100 transition text-muted-foreground text-xs "
              variant="outline"
              size="icon"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div>
            <IconPicker onChange={onIconSelect}>
              <Button
                className="text-muted-foreground text-xs rounded-full"
                variant="outline"
                size="sm"
              >
                <Smile className="h-4 w-4 mr-2" />
                Add icon
              </Button>
            </IconPicker>
          </div>
        )}
        {isEditing ? (
          <TextareaAutosize
            ref={inputRef}
            onBlur={disableInput}
            onKeyDown={onKeyDown}
            value={value}
            onChange={(e) => onInput(e.target.value)}
            className="text-5xl bg-transparent font-bold break-words outline-none resize-none"
          />
        ) : (
          <div
            className="lg:text-5xl md:text-4xl sm:text-4xl text-3xl font-bold line-clamp-1 "
            onClick={enableInput}
          >
            {title}
          </div>
        )}
      </div>
    </>
  );
};

export default NoteTitle;
