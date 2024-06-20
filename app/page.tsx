import React from 'react'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const getNotes = async () => {
  try {
      const res = await fetch("http://localhost:3000/api/notes", {
          cache: "no-store"
      })

      if (!res.ok) {
          throw new Error("Failed to fetch notes")
      }

      return res.json()

  } catch (error) {
      console.error("Error loading notes ", error)
  }
}

const Home = async() => {
  const {notes} = await getNotes();
  console.log(notes);
  return (
    <>
      <Navbar/>
      <Hero notes={notes}/>
      <Footer />
    </>
  )
}

export default Home