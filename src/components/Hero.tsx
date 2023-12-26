import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "./../lib/utils";
import { EB_Garamond } from "next/font/google";

const eb_Garamond = EB_Garamond({
  subsets: ["latin"],
});
const Hero = () => {
  return (
    <header className=" hero relative h-screen bg-hero-pattern  flex items-center justify-center text-primary-color ">
      <div className=" -translate-y-1/4 flex flex-col items-center gap-5">
        <h1 className={cn(" text-6xl font-bold", eb_Garamond.className)}>
          Tell your story in one place
        </h1>
        <p className=" text-xl font-medium max-w-xl">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet, dui sit suspendisse.
        </p>
        <Link
          href="/signup"
          className=" border-primary-color border-2 rounded-2xl  px-4 py-2 mt-6 font-medium hover:bg-primary-color hover:text-white transition duration-300 ease-in-out"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Hero;
