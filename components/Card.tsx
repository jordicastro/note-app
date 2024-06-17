import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  icon: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
    blurWidth?: number;
    blurHeight?: number;
  };
  title: string,
  _id: string
}

const Card: React.FC<CardProps> = ({icon, title, _id}) => {
  return (
    <Link href={`/notes/${_id}`} className="flex flex-col items-start justify-start p-4 mr-4 rounded-3xl w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-full space-y-4 bg-dark-200 hover:border border-dark-400 ">
          <div className="my-1">
          <Image className="size-5 bg-dark-200" 
              src={icon.src} 
              alt={title} 
              height={25} 
              width={25} 
            />
          </div>
          <p className="bg-dark-200">{title}</p>
    </Link>
  )
}

export default Card