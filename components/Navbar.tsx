"use client";
import { useEffect, useState } from "react";
import { Note } from "@/types/Note";
import Title from "@/components/Title";
import Link from "next/link";
import { RiHome5Line as HomeIcon } from "react-icons/ri";
import { ModeToggle } from "./ModeToggle";
import { MenuIcon } from "lucide-react";
import { useParams } from "next/navigation";
import Menu from "@/components/Menu";
import Line from "./Line";
import { getNoteById } from "@/actions/queries";

interface NavbarProps {
  icon?: string;
  title?: string;
  isCollapsed: boolean;
  onResetWidth: () => void;
  refreshNotes: () => void;
}

const Navbar = ({ icon, title, isCollapsed, onResetWidth, refreshNotes }: NavbarProps) => {
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
      const data = await getNoteById(id as string);
      setNote(data.note);
    };
    getNote();
  }, [id]);

  return (
    <>
      <nav className="flex items-center gap-x-4 w-full mx-auto  py-2 px-3 bg-transparent z-[9999]">
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
            <Menu refreshNotes={refreshNotes}/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
