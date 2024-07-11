"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader
} from "@/components/ui/dialog";
import { useSettings } from "@/hooks/useSettings";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ModeToggle";
import { LogOut, Settings } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { set } from "mongoose";
import { useFont } from "@/hooks/useFont";

export const SettingsModal = () => {
    const settings = useSettings();
    const { currentFont, setCurrentFont } = useFont();


    return (
        <Dialog
            open={settings.isOpen}
            onOpenChange={settings.onClose}
        >
            <DialogContent>
                <DialogHeader className="border-b pb-3">
                    <div className="flex gap-x-2 align-center justify-start">
                        <Settings className="h-6 w-6 hover:rotate-90" />
                        <h2 className="text-lg font-medium">
                            Settings
                        </h2>
                    </div>
                </DialogHeader>
                <div className="flex items-center justify-between mb-2">
                    <div className="flex flex-col gap-y-1">
                        <Label>
                            Appearance
                        </Label>
                        <span className="text-[0.8rem] text-muted-foreground">
                        ⌘ + SHFT + L
                        </span>

                    </div>
                    <ModeToggle />
                </div>
                
                <div className="w-full border border-muted-foreground/10 rounded-xl" />

                <div className="">
                    <div className="mb-2">
                        Font
                    </div>
                    <div 
                        className="flex items-center justify-between"
                    >
                        <div className="font-sans flex flex-col justify-center items-center w-24 h-auto p-2 rounded-md hover:bg-primary/10"
                            role="button"
                            onClick={() => setCurrentFont("sans")}
                        >
                            <span className={cn(
                                "text-2xl font-bold font-sans",
                                currentFont === "sans" && "text-[#4281DB]"
                                )}>
                                Abc
                            
                            </span>
                            Sans
                        </div>  
                        <div 
                            className="font-serif flex flex-col justify-center items-center w-24 h-auto p-2 rounded-md hover:bg-primary/10"
                            role="button"
                            onClick={() => setCurrentFont("serif")}
                        >
                            <span className={cn(
                                "text-2xl font-bold font-serif",
                                currentFont === "serif" && "text-[#4281DB]"
                                )}>
                                Abc
                            
                            </span>
                            Serif
                        </div>
                        <div 
                            className="font-mono flex flex-col justify-center items-center w-24 h-auto p-2 rounded-md hover:bg-primary/10"
                            role="button"
                            onClick={() => setCurrentFont("mono")}
                        >
                            <span className={cn(
                                "text-2xl font-bold font-mono",
                                currentFont === "mono" && "text-[#4281DB]"
                                )}>
                                Abc
                            
                            </span>
                            Mono
                        </div>
                    </div>

                    <div className="w-full border border-muted-foreground/10 rounded-xl my-3" />
                </div>

                <div className="flex items-center justify-center gap-x-2 cursor-not-allowed group/logout">
                    <LogOut className="h-4 w-4 mr-2 text-muted-foreground group-hover/logout:text-red-400" />
                    <p className="text-sm text-muted-foreground font-medium group-hover/logout:text-red-400">
                        Log Out
                    </p>
                </div>

            </DialogContent>
        </Dialog>
    );
}