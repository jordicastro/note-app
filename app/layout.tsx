import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body className={`h-full ${inter.className}`}>
        <div className="flex flex-col min-h-screen px-[5%] mx-auto border border-slate-400">
          <div className="">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
