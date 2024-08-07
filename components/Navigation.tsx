"use client";

import { cn } from "@/lib/utils";
import {
  ChevronsLeft,
  Ellipsis,
  File,
  MenuIcon,
  Plus,
  Search,
  Settings,
  Trash,
} from "lucide-react";
import React, { useRef, ElementRef, useState, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useParams, usePathname } from "next/navigation";

import Navbar from "./Navbar";
import UserItem from "./UserItem";
import { useRouter } from "next/navigation";
import { Note } from "@/types/Note";
import Item from "./Item";
import Link from "next/link";
import { useSearch } from "@/hooks/useSearch";
import { useSettings } from "@/hooks/useSettings";
import { useFont } from "@/hooks/useFont";
import NavNotesList from "./NavNotesList";
import { set } from "mongoose";
import { createNote, getNotes } from "@/actions/queries";

export const revalidate = 0;

const Navigation = () => {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 480px)"); // for mobile
  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"nav">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const [showCollapsedShortcut, setShowCollapsedShortcut] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);
  const search = useSearch();
  const settings = useSettings();
  const { currentFont } = useFont();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--current-font",
      `var(--font-${currentFont})`,
    );
  }, [currentFont]);

  useEffect( () => {
    const fetchNotes = async () => {
      const data = await getNotes();
      setNotes(data);
    }
    fetchNotes();
  }, [router]);

  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapse();
    }
  }, [pathname, isMobile]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "\\" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        isCollapsed ? resetWidth() : collapse();
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isCollapsed]);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;
    let newWidth = event.clientX;

    if (newWidth < 240) newWidth = 240;
    if (newWidth > 480) newWidth = 480;

    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      navbarRef.current.style.setProperty(
        "width",
        `calc(100% - ${newWidth}px)`,
      );
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 240px)",
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px");

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const createPage = async () => {
    const data = await createNote();

    await refreshNotes();

    router.push(`/notes/${data.note._id}`);
  };

  const refreshNotes = async () => {
    const Notesdata = await getNotes();
    setNotes(Notesdata);
  }

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar bg-secondary dark:bg-[#242424] overflow-y-auto relative flex w-60 flex-col z-[999]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0",
        )}
      >
        <div
          onClick={collapse}
          role="button"
          onMouseEnter={() => {
            setShowCollapsedShortcut(true);
          }}
          onMouseLeave={() => {
            setShowCollapsedShortcut(false);
          }}
          className={cn(
            "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
            isMobile && "opacity-100",
          )}
        >
          <ChevronsLeft className="h-6 w-6" />
        </div>
        {showCollapsedShortcut && (
          <div className="flex justify-center items-center w-16 z-[999999] h-auto rounded-xl p-2 bg-muted text-muted-foreground absolute top-[36px] right-1 text-xs transition ease-out duration-300">
            ⌘ + \
          </div>
        )}
        <div>
          <UserItem />
          <Item
            label="Search"
            icon={Search}
            isSearch
            onClick={search.onOpen}
            showCollapsedShortcut={showCollapsedShortcut || false}
          />
          <Item label="Settings" icon={Settings} onClick={settings.onOpen} />
          <Item onClick={createPage} label="New page" icon={Plus} />
        </div>
        <div className="mt-4">
          <p className="px-2 text-muted-foreground font-bold">Notes</p>
          <NavNotesList notes={notes} refreshNotes={refreshNotes}/>
        </div>
        <div
          className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"
          onMouseDown={handleMouseDown}
          onClick={resetWidth}
        />
      </aside>
      <nav
        ref={navbarRef}
        className={cn(
          "absolute top-0 z-[9999] left-60 w-[calc(100%-240px)]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "left-0 w-full",
        )}
      >
        {!!params.id ? (
          <Navbar isCollapsed={isCollapsed} onResetWidth={resetWidth} refreshNotes={refreshNotes}/>
        ) : (
          <nav className="bg-transparent px-3 py-4 w-full">
            {isCollapsed && (
              <MenuIcon
                onClick={resetWidth}
                role="button"
                className="h-6 w-6 text-muted-foreground"
              />
            )}
          </nav>
        )}
      </nav>
    </>
  );
};

export default Navigation;
