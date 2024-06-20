import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Note } from '@/types/Note'

interface CardProps {
  _id: string,
  title: string,
  icon: string,
}

const Card: React.FC<CardProps> = ({icon, title, _id}) => {
  return (
    <Link href={`/notes/${_id}`} className="flex flex-col items-start justify-start p-4 mr-4 rounded-3xl w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-full space-y-4 bg-dark-200 hover:border border-dark-400 ">
          <div className="my-1">
          {/* <Image className="size-5 bg-dark-200" 
              src={icon.src} 
              alt={title} 
              height={25} 
              width={25} 
            /> */}
            <h5 className="bg-dark-200">{icon}</h5>
          </div>
          <h5 className="bg-dark-200">{title}</h5>
    </Link>
  )
}

export default Card