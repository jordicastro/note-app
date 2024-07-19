import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Note } from "@/types/Note";

export const revalidate = 0;

const Home = async () => {

  return (
    <div className="min-h-screen flex flex-col justify-end">
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
