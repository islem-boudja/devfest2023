"use client";
import { useEffect } from "react";
import Title from "./Title";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import ButtonArrow from "./ButtonWrapper";
import { Typeprompt } from "./TypeEffect";
const FourthSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className=" fourth-section overflow-hidden h-screen relative bg-backgound-color flex items-center justify-around w-full ">
      <div
        className=" text-primary-color flex flex-col gap-10"
        data-aos="zoom in"
      >
        <Title title="Intuitive text crafting" />
        <p className=" w-52 font-sans">
          Embark on a journey of storytelling simplicity with Taleo's intuitive
          text input. Effortlessly create narratives by entering keywords,
          allowing our intelligent system to weave them into compelling stories
          that capture your unique voice.
        </p>
        <ButtonArrow
          text="Tell us what you feel"
          href="/generate/words-to-story"
        />
        <div className=" max-w-md flex flex-col"></div>
      </div>
      <div className="" data-aos="fade-left">
        <Typeprompt />
      </div>
    </div>
  );
};

export default FourthSection;
