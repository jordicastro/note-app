"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import React from "react";

const Error = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center  space-y-4">
      <Image
        src="/assets/error.svg"
        height="300"
        width="300"
        alt="Error"
        className="dark:hidden"
      />
      <Image
        src="/assets/error-dark.svg"
        height="300"
        width="300"
        alt="Error-dark"
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">Something went wrong!</h2>
      <Button asChild>
        <Link href="/">Go back</Link>
      </Button>
    </div>
  );
};

export default Error;
