"use client";
import ScanningContainer from "./ScannedImage";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Title from "./Title";
import Link from "next/link";
import ButtonArrow from "./ButtonWrapper";
const ThirdSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className=" third-section overflow-hidden h-screen relative bg-backgound-color flex items-center justify-around w-full ">
      <div
        className=" text-primary-color flex flex-col gap-10"
        data-aos="zoom in"
      >
        <Title title="Visual brilliance, Word harmony" />
        <p className=" max-w-md ">
          Bring your story to life through a tapestry of visuals and AI
          ingenuity. Tailor your tale with images that resonate, and let Taleo's
          image processing technology elevate your narrative, turning each
          moment captured into a storytelling masterpiece.
        </p>
        <ButtonArrow text="upload your image" href="/generate/image-to-story" />
      </div>
      <div className="" data-aos="fade-left">
        <Image
          src="/third-section-image.svg"
          alt="logo"
          width={300}
          height="100"
          className=" rounded-3xl"
        />
      </div>
    </div>
  );
};

export default ThirdSection;
