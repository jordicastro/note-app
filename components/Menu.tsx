"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { ConfirmModal } from "./modal/ConfirmModal";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";
import { cn } from "@/lib/utils";
import MenuItem from "./MenuItem";
import {
    Mic,
    SlidersHorizontal as Slider,
    Copy,
    Ellipsis,
    Link,
    LucideIcon,
    Recycle,
    Trash,
    CornerUpRight as RightArrow,
    Undo,
    Clock,
    FileClock,
    LineChart,
    Bell,
    Download,
    FileUp,
    Cable,
} from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { useFont } from "@/hooks/useFont";


const Menu = () => {
    const { id } = useParams();
    const router = useRouter();
    const { currentFont, setCurrentFont } = useFont();

    const items = [
        {
            title: "Small Text",
            isSwitch: true,
        },
        {
            title: "Full Width",
            isSwitch: true,
        },
        {
            title: "Suggest edits",
            isSwitch: true,
            isNew: true,
        },
        {
            title: "Lock page",
            isSwitch: true,
        },
        {
            title: "Table of contents",
            isSwitch: true,
            lastItem: true,
        },
        {
            title: "Dictate",
            icon: Mic,
            shortcut: "⌘ + O",
            lastItem: true,
        },
        {
            title: "Customize page",
            icon: Slider,
        },
        {
            title: "Turn into wiki",
            icon: Recycle,
            lastItem: true,
        },
        {
            title: "Copy Link",
            icon: Link,
            shortcut: "⌘ + L",
        },
        {
            title: "Duplicate",
            icon: Copy,
            shortcut: "⌘ + D",
        },
        {
            title: "Move to",
            icon: RightArrow,
            shortcut: "⌘ + SHFT + P"

        },
        {
            title: "Delete",
            icon: Trash,   
            lastItem: true,         
        },
        {
            title: "Undo",
            icon: Undo,
            shortcut: "⌘ + Z",
        },
        {
            title: "View edit history",
            icon: Clock,
        },
        {
            title: "Show deleted pages",
            icon: FileClock,
        },
        {
            title: "View analytics",
            icon: LineChart,
        },
        {
            title: "Notify me",
            icon: Bell,
            dropdownTrigger: "Comments",
            lastItem: true,
        },
        {
            title: "Import",
            icon: Download,
        },
        {
            title: "Export",
            icon: FileUp,
            lastItem: true,
        },
        {
            title: "Connect to",
            icon: Cable,
            dropdownTrigger: "Slack",
            lastItem: true,

        }
    ]

    const noteData = {
            wordCount: 101,
            authorName: "Jordi Castro",
            editTime: "3:00 AM"
    }

    const onDelete = async () => {
        
        const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
            method: "DELETE", 
        });
        if (!res.ok) {
            throw new Error("Failed to delete note");
        }

        toast.success("Note deleted successfully");

        router.push("/");
    }

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button size="sm" variant="ghost">
                <Ellipsis className="h-6 w-6 " />
            </Button>
        </DropdownMenuTrigger>

            <DropdownMenuContent className="w-80 h-[70vh] dark:bg-[#252525]" align="end" alignOffset={8} forceMount>
                <ScrollArea className="w-80 h-full">
                <DropdownMenuItem >
                <div className="font-sans flex flex-col justify-center items-center w-24 h-auto p-2 rounded-md hover:bg-primary/10"
                                role="button"
                                onClick={(e) => {e.preventDefault(); setCurrentFont("sans")} }
                            >
                                <span className={cn(
                                    "text-xl font-bold font-sans",
                                    currentFont === "sans" && "text-[#4281DB]"
                                    )}>
                                    Abc
                                
                                </span>
                                Sans
                            </div>  
                            <div 
                                className="font-serif flex flex-col justify-center items-center w-24 h-auto p-2 rounded-md hover:bg-primary/10"
                                role="button"
                                onClick={(e) => {e.preventDefault(); setCurrentFont("serif")} }
                            >
                                <span className={cn(
                                    "text-xl font-bold font-serif",
                                    currentFont === "serif" && "text-[#4281DB]"
                                    )}>
                                    Abc
                                
                                </span>
                                Serif
                            </div>
                            <div 
                                className="font-mono flex flex-col justify-center items-center w-24 h-auto p-2 rounded-md hover:bg-primary/10"
                                role="button"
                                onClick={(e) => {e.preventDefault(); setCurrentFont("mono")} }
                            >
                                <span className={cn(
                                    "text-xl font-bold font-mono",
                                    currentFont === "mono" && "text-[#4281DB]"
                                    )}>
                                    Abc
                                
                                </span>
                                Mono
                            </div>
                </DropdownMenuItem>

                <DropdownMenuSeparator className="bg-primary/10 mx-1 my-4"/>

                <DropdownMenuItem className="group/delete">
                    <ConfirmModal onConfirm={onDelete}>
                        <div className="flex w-full h-full" role="button" onClick={() => {}}>
                            <Trash className="h-4 w-4 mr-2 group-hover/delete:text-red-400" />
                            <span className="group-hover/delete:text-red-400">Delete</span>
                        </div>
                    </ConfirmModal>
                </DropdownMenuItem>

                <DropdownMenuSeparator className="bg-primary/10 mx-1 my-4" />
                
                {items.map( (item, index) => (
                    <div key={index}>
                        <DropdownMenuItem onClick={(e) => {e.preventDefault()}}>
                            <MenuItem title={item.title} icon={item.icon as LucideIcon} isNew={item.isNew} isSwitch={item.isSwitch} shortcut={item.shortcut} dropdownTrigger={item.dropdownTrigger} onClick={() => {}} />
                        </DropdownMenuItem>
                            {item.lastItem && <DropdownMenuSeparator className="bg-primary/10 mx-1 my-4" />}
                    </div>
                ))}

                <div className="flex flex-col justify-start items-start text-muted-foreground text-xs" >
                    <span>Word count: {noteData.wordCount}</span>
                    <span>Last edited by {noteData.authorName}</span>
                    <span>Today at {noteData.editTime}</span>
                    
                </div>

                </ScrollArea>
            </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Menu