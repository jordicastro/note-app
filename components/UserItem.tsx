"use client";

import { ChevronsLeftRight, Ellipsis, LogOut } from "lucide-react";

import { 
    Avatar,
    AvatarImage
} from "@/components/ui/avatar";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const UserItem = () => {
    const email = "jordi.castro003@gmail.com";
    const name = "Jordi Castro";
    const avatar = "https://avatars.githubusercontent.com/u/98429724?v=4";
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div
                role="button" className="flex items-center text-sm p-4 w-full hover:bg-primary/5"
            >
                <div className="gap-x-2 flex items-center max-w-[150px]">
                    <Avatar className="w-5 h-5 transition ease-in-out duration-300 transform hover:scale-110">
                        <Link href="https://github.com/jordicastro">
                            <AvatarImage src={avatar} alt="Jordi" />
                        </Link>
                    </Avatar>
                    <span className="text-start font-medium line-clamp-1">
                        {name}&apos;s Notes
                    </span>
                </div>
                    <ChevronsLeftRight className="rotate-90 ml-2 h-4 w-4" />
            </div>

        </DropdownMenuTrigger>
        <DropdownMenuContent
            className="w-80 bg-secondary"
            align="start"
            alignOffset={11}
            forceMount
        >
            <div
                className="flex flex-col space-y-4 p-2"
            >
                <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-muted-foreground">
                        {email}
                    </p>
                    <Ellipsis 
                        className="h-4 w-4 text-muted-foreground hover:cursor-not-allowed"
                        onClick={() => {}}
                    />
                </div>
                <div className="flex items-center gap-x-4">
                    <div className="rounded-lg bg-secondary p-1">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={avatar} alt="Jordi" />
                        </Avatar>
                    </div>
                    <div className="space-y-1">
                        <p className="text-sm line-clamp-1">
                            {name}&apos;s Notes
                        </p>
                    </div>
                </div>
            </div>
        <DropdownMenuSeparator className="bg-primary/10 mx-1"/>

        <DropdownMenuItem className="flex justify-center hover:cursor-not-allowed">
            <div className="flex items-center justify-center gap-x-2 cursor-not-allowed group/logout">
                <LogOut className="h-4 w-4 mr-2 text-muted-foreground group-hover/logout:text-red-400" />
                <p className="text-sm text-muted-foreground font-medium group-hover/logout:text-red-400">
                    Log Out
                </p>
            </div>
        </DropdownMenuItem>

        </DropdownMenuContent>


    </DropdownMenu>
  )
}

export default UserItem