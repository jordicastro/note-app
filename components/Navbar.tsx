"use client";
import { useEffect, useState } from "react";
import { Note } from "@/types/Note";
import Title from "@/components/Title";
import Link from "next/link";
import { RiHome5Line as HomeIcon } from "react-icons/ri";
import { BsThreeDots as DotMenuIcon } from "react-icons/bs";
import { ModeToggle } from "./ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { useParams } from "next/navigation";

interface NavbarProps {
  icon?: string;
  title?: string;
  isCollapsed: boolean;
  onResetWidth: () => void;
}

const Navbar = ({ icon, title, isCollapsed, onResetWidth }: NavbarProps) => {
  const tempNote: Note = {
    _id: "1",
    title: "Untitled",
    icon: "",
    content: "",
  }
  const [note, setNote] = useState<Note>(tempNote);
  const { id } = useParams();

  useEffect(() => {
    const getNote = async () => {
      const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch note");
      }
      const data = await res.json();
      setNote(data.note);
    };
    getNote();
  }, [id]);

  return (
    <>
      <nav className="flex items-center gap-x-4 w-full mx-auto  py-2 px-3 bg-transparent z-99999">
          {isCollapsed && (
            <MenuIcon
              onClick={onResetWidth}
              role="button"
              className="h-6 w-6 text-muted-foreground"
            />
          )}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-x-4 bg-transparent">
            <Link href={"/"} className="bg-transparent">
              <HomeIcon size={20} />
            </Link>

            <Title note={note}/>

          </div>
          <div className="flex justify-center items-center gap-x-2">
            <ModeToggle />
            <DotMenuIcon size={20} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
