import React from 'react'
import Card from './Card'
import { Note } from '@/types/Note'

import {
  Carousel as C,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface CarouselProps {
  notes: Note[];
}

const chunkNotes = (notes: Note[], chunkSize: number) => {
  const notesChunks = [];

  for (let i = 0; i < notes.length; i += chunkSize) {
    notesChunks.push(notes.slice(i, i + chunkSize));
  }
  return notesChunks;
}


const Carousel: React.FC<CarouselProps> = ({ notes }) => {

  const notesChunks = chunkNotes(notes, 4);

  return (
    <>
      <C>
        <CarouselContent>
          {notesChunks.map((chunk, index) => (
            <CarouselItem key={index}>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {chunk.map((note) => (
                  <Card key={index} title={note.title} icon={note.icon}  _id={note._id} />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </C>
    </>
  )
}

export default Carousel;