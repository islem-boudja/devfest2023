import Link from "next/link";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { Abril_Fatface } from "next/font/google";
const abril = Abril_Fatface({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
const LogoNavbar = () => {
  return (
    <nav className=" fixed h-14 w-full z-40 flex justify-center mt-3">
      <Link href="/">
        <Image src="/taleo.svg" width={90} height={100} alt="logo" />
      </Link>
    </nav>
  );
};

export default LogoNavbar;
