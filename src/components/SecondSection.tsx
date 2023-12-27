"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { EB_Garamond } from "next/font/google";
const eb_Garamond = EB_Garamond({
  subsets: ["latin"],
});

const SecondSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className=" h-screen relative bg-backgound-color flex items-center justify-center w-full second-section overflow-x-hidden overflow-y-hidden ">
      <div
        data-aos="fade-right"
        className=" absolute bg-slate-200 rounded-xl w-[230px] h-[150px]  top-72 left-16 blur-[2px]"
      >
        <Image
          src="/image-5.svg"
          width={300}
          height={200}
          alt=""
          className=" rounded-xl"
        />
      </div>
      <div
        data-aos="fade-right"
        className=" absolute bg-slate-200 rounded-xl w-[280px] h-[160px] bottom-56 left-24 translate-x-1/4"
      >
        <Image
          src="/image-6.svg"
          width={300}
          height={200}
          alt=""
          className=" rounded-xl"
        />
      </div>
      <div
        className=" absolute bg-slate-200 rounded-lg w-[300px] h-[170px] bottom-60 right-10 z-20 "
        data-aos="fade-left"
      >
        <Image
          src="/image-1.svg"
          width={300}
          height={200}
          alt=""
          className=" rounded-xl"
        />
      </div>
      <div
        className=" absolute bg-slate-200 rounded-xl w-[300px] h-[161px] top-60 right-24  translate-y-1/4"
        data-aos="fade-left"
      >
        <Image
          src="/image-3.svg"
          width={300}
          height={200}
          alt=""
          className=" rounded-xl"
        />
      </div>
      <div
        data-aos="fade-left"
        className=" absolute bg-slate-200 rounded-xl w-[290px] h-[170px] bottom-40 right-16 -translate-x-1/3 opacity-60 translate-y-1/2"
      >
        <Image
          src="/image-2.svg"
          width={300}
          height={200}
          alt=""
          className=" rounded-xl"
        />
      </div>
      <div
        className="flex flex-col gap-6 items-center justify-center"
        data-aos="zoom-in"
      >
        <h1
          className={cn(
            " text-primary-color text-4xl font-bold ",
            eb_Garamond.className
          )}
        >
          What is Taleo?
        </h1>
        <p className=" text-primary-color font-[300] text-2xl max-w-md">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet, dui sit suspendisse.
        </p>
      </div>
      <div className="dot-container">
        <span className="dot first"></span>
        <span className="dot second"></span>
        <span className="dot third"></span>
        <span className="dot fourth"></span>
        <span className="dot fifth"></span>
        <span className="dot sixth"></span>
        <span className="dot seventh"></span>
        <span className="dot eighth"></span>
      </div>
    </div>
  );
};

export default SecondSection;
