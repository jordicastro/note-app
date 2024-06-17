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
    <Link href={`/notes/${_id}`} className="flex flex-col items-start justify-start p-2 mr-4 rounded-xl w-64 h-full space-y-4 hover:border border-dark-300 ">
          <div className="my-1">
          <Image className="size-5" 
              src={icon.src} 
              alt={title} 
              height={25} 
              width={25} 
            />
          </div>
          <p>{title}</p>
    </Link>
  )
}

export default Card