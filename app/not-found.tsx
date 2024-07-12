"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <Image
        src="/assets/not-found.svg"
        height="300"
        width="300"
        alt="Error"
        className="dark:hidden"
      />
      <Image
        src="/assets/not-found-dark.svg"
        height="300"
        width="300"
        alt="Error-dark"
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">This page does not exist.</h2>
      <Button asChild>
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
}
