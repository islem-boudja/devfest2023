import Image from "next/image";
import Title from "./Title";
import Link from "next/link";
import ButtonArrow from "./ButtonWrapper";
import { Typeprompt } from "./TypeEffect";
const FourthSection = () => {
  return (
    <div className=" fourth-section overflow-hidden h-screen relative bg-backgound-color flex items-center justify-around w-full ">
      <div className=" text-primary-color flex flex-col gap-10">
        <Title title="Intuitive text crafting" />
        <p className=" w-52 ">
          Embark on a journey of storytelling simplicity with Taleo's intuitive
          text input. Effortlessly create narratives by entering keywords,
          allowing our intelligent system to weave them into compelling stories
          that capture your unique voice.
        </p>
        <ButtonArrow text="Tell us what you feel" />
        <div className=" max-w-md flex flex-col"></div>
      </div>
      <div className="">
        <Typeprompt />
      </div>
    </div>
  );
};

export default FourthSection;
