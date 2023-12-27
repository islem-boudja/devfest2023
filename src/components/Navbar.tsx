import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "./../lib/utils";
const Navbar = () => {
  return (
    <nav className=" fixed flex justify-between px-5  z-50 top-0  items-center bg-transparent w-full ">
      <div className="logo">
        <Link href="/">
          <Image src="/next.svg" alt="logo" width="100" height="100" />
        </Link>
      </div>
      <div className=" flex items-center gap-1 text-primary-color">
        <Link
          href="/auth"
          className="border-primary-color border-2 rounded-2xl  px-4 py-2 mt-6 font-medium hover:bg-primary-color hover:text-gray-900 transition duration-300 ease-in-out"
        >
          log in
        </Link>
        <Link
          href="/auth"
          className="border-primary-color border-2 rounded-2xl  px-4 py-2 mt-6 font-medium hover:bg-primary-color hover:text-gray-900 transition duration-300 ease-in-out"
        >
          sign in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
