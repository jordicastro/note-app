import { create } from "zustand";

type FontStore = {
    currentFont: string;
    setCurrentFont: (font: string) => void;
}

export const useFont = create<FontStore>( (set, get) => ({
    currentFont: "sans",
    setCurrentFont: (font) => set({ currentFont: font })
}));