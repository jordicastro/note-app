import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  _id: string;
  title: string;
  icon: string;
}

const Card: React.FC<CardProps> = ({ icon, title, _id }) => {
  return (

      <Link
        href={`/notes/${_id}`}
        className="flex flex-col items-start justify-start p-8 rounded-3xl gap-y-4 aspect-square bg-[#F7F7F7] dark:bg-[#242424] shadow-lg hover:border border-[#61DAF8] "
      >
        <div className="my-1">
          <h5 className="bg-dark-200 text-base sm:text-xl md:text-4xl">{icon}</h5>
        </div>
        <h6 className="bg-dark-200 text-base sm:text-xl md:text-2xl overflow-hidden line-clamp-2">{title}</h6>
      </Link>
  );
};

export default Card;
