"use client";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Abril_Fatface } from "next/font/google";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
const abril = Abril_Fatface({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
import { cn } from "./../lib/utils";
const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <nav
      className=" fixed flex justify-between px-5  z-50 top-0  items-center backdrop-blur-sm w-full  "
      data-aos="fade-down"
    >
      <div className="logo">
        <Link href="/">
          <Image src="/taleo.svg" width={90} height={100} alt="logo" />
        </Link>
      </div>
      <div className=" flex items-center justify-center gap-3 text-primary-color ">
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
