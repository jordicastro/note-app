import { Note } from "@/types/Note";
import React from "react";
import Link from "next/link";
import { File, Plus, Ellipsis, Trash, Router } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ConfirmModal } from "./modal/ConfirmModal";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface NavNotesListProps {
  notes: Note[];
}

const NavNotesList = ({ notes }: NavNotesListProps) => {
  const router = useRouter();

  const onDelete = async (id: string) => {
    const res = await fetch(`/api/notes/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Failed to delete note");
    }

    toast.success("Note deleted successfully");

    router.push("/");
  };

  const createPage = async () => {
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: "Untitled", icon: "", content: "" }),
    });
    if (!res.ok) {
      throw new Error("Failed to create note");
    }

    const data = await res.json();

    router.push(`/notes/${data.note._id}`);
  };

  return (
    <>
      {notes?.map((note) => (
        <div
          key={note._id}
          className="hover:border border-primary/5 hover:bg-primary/5 group/note"
        >
          <Link
            href={`/notes/${note._id}`}
            className="flex items-center justify-between gap-x-2 px-2 py-1 "
          >
            <div className="flex justify-center items-center gap-x-2 py-1">
              {note.icon === "" ? (
                <File className="h-4 w-4" />
              ) : (
                <p className="text-sm">{note.icon}</p>
              )}
              <p className="text-sm text-muted-foreground line-clamp-1">
                {note.title}
              </p>
            </div>
            <div className="flex justify-center items-center text-muted-foreground gap-x-2 ">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="rounded-sm opacity-0 group-hover/note:opacity-100 bg-secondary/10 hover:bg-neutral-300 dark:hover:bg-neutral-600">
                    <Ellipsis className="h-4 w-4" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-60 dark:bg-[#252525]"
                  align="start"
                  side="right"
                  forceMount
                >
                  <DropdownMenuItem className="group/delete mt-4">
                    <ConfirmModal onConfirm={() => onDelete(note._id)}>
                      <div
                        className="flex w-full h-full"
                        role="button"
                        onClick={() => {}}
                      >
                        <Trash className="h-4 w-4 mr-2 group-hover/delete:text-red-400" />
                        <span className="group-hover/delete:text-red-400">
                          Delete
                        </span>
                      </div>
                    </ConfirmModal>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator className="bg-primary/10 mx-1 my-4" />

                  <div className="pl-1 pb-2 text-muted-foreground text-xs">
                    Last edited by: Jordi Castro
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              <div
                className="rounded-sm opacity-0 group-hover/note:opacity-100 bg-secondary/10 hover:bg-neutral-300 dark:hover:bg-neutral-600"
                onClick={createPage}
              >
                <Plus className="h-4 w-4" />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default NavNotesList;
