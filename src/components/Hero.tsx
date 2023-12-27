"use client";

import React from "react";
import Link from "next/link";
import { cn } from "./../lib/utils";
import { EB_Garamond } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonArrow from "./ButtonWrapper";
const eb_Garamond = EB_Garamond({
  subsets: ["latin"],
});

const Hero = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <header className=" hero relative h-screen bg-hero-pattern  flex items-center justify-center text-primary-color ">
      <div className=" -translate-y-1/4 flex flex-col items-center gap-10">
        <h1
          className={cn(
            " text-6xl font-bold tracking-wider",
            eb_Garamond.className
          )}
          data-aos="zoom-in"
        >
          Tell your story in one place
        </h1>
        <p className=" text-xl font-medium max-w-xl text-center">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet, dui sit suspendisse.
        </p>
        <ButtonArrow text="get started" href="/generate" />
      </div>
    </header>
  );
};

export default Hero;
