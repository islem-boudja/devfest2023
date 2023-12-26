import { cn } from "@/lib/utils";
import { EB_Garamond } from "next/font/google";
const eb_Garamond = EB_Garamond({
  subsets: ["latin"],
});

const SecondSection = () => {
  return (
    <div className=" h-screen relative bg-backgound-color flex items-center justify-center w-full second-section overflow-x-hidden overflow-y-hidden ">
      <div className=" absolute bg-slate-200 rounded-lg w-[230px] h-[150px] opacity-50 top-1/3 left-10 translate-y-1/3 blur-[2px]"></div>
      <div className=" absolute bg-slate-200 rounded-lg w-[300px] h-[190px] bottom-1/4 left-16 translate-x-1/4"></div>
      <div className=" absolute bg-slate-200 rounded-lg w-[300px] h-[190px] bottom-1/4 right-10 "></div>
      <div className=" absolute bg-slate-200 rounded-lg w-[300px] h-[161px] top-1/3 right-24 opacity-25 translate-y-1/4"></div>
      <div className=" absolute bg-slate-200 rounded-lg w-[290px] h-[190px] bottom-1/4 right-16 -translate-x-1/3 opacity-60 translate-y-1/2"></div>
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1
          className={cn(
            " text-primary-color text-4xl font-bold ",
            eb_Garamond.className
          )}
        >
          What is Taleo?
        </h1>
        <p className=" text-primary-color font-[300] text-2xl max-w-xl">
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
