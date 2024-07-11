import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";
import SearchCommand from "@/components/SearchCommand";
import { ModalProvider } from "@/components/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Note App",
  description: "A Note app built with Next.js + Tailwind CSS + MongoDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`h-full ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="note-app-theme"
        >
          <div className="hidden"><ModeToggle/></div>
            <Toaster />
            <ModalProvider />
            <SearchCommand />
            <div>{children}</div>

        </ThemeProvider>
      </body>
    </html>
  );
}
