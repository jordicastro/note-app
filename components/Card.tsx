import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Note } from "@/types/Note";

interface CardProps {
  _id: string;
  title: string;
  icon: string;
}

const Card: React.FC<CardProps> = ({ icon, title, _id }) => {
  return (
    <Link
      href={`/notes/${_id}`}
      className="flex flex-col items-start justify-start p-4 mr-4 rounded-3xl w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-full space-y-4 bg-[#F7F7F7] dark:bg-[#242424] shadow-lg hover:border border-[#61DAF8] "
    >
      <div className="my-1">
        <h5 className="bg-dark-200">{icon}</h5>
      </div>
      <h6 className="bg-dark-200">{title}</h6>
    </Link>
  );
};

export default Card;
