"use client";

import { Switch } from "@/components/ui/switch"
import { ChevronRight, LucideIcon } from "lucide-react"

interface MenuItemProps {
    title: string;
    icon: LucideIcon;
    isNew?: boolean;
    isSwitch?: boolean;
    shortcut?: string;
    lastItem?: boolean;
    dropdownTrigger?: string;
    onClick?: () => void;
}

const MenuItem = ({title, icon: Icon, isNew, isSwitch, shortcut, dropdownTrigger, onClick}: MenuItemProps) => {

  return (
    <div className="flex justify-between items-center h-full w-full pr-2">
        <div className="flex gap-x-2">
            {!!Icon && (
                <Icon className="shrink-0 h-[18px] mr-2 text-muted-foreground"/>
            )}
            <p className="text-sm font-medium">
                {title}
            </p>
            {!!isNew && (
                <div className="flex justify-center items-center p-1 rounded-lg text-[#4281DB] font-sans bg-[#4281DB]/10">
                    New
                </div>
            )}
        </div>
        {!!isSwitch && (
            <Switch 
            />
        )}
        {!!shortcut && (
            <span className="text-muted-foreground text-xs">
                {shortcut}
            </span>
        )}
        {!!dropdownTrigger && (
            <div className="flex items-center text-muted-foreground">
                {dropdownTrigger}
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
        )}
    </div>
  )
}

export default MenuItem