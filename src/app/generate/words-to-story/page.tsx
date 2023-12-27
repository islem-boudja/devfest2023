import ButtonArrow from "@/components/ButtonWrapper";
import Title from "@/components/Title";
import Image from "next/image";
export default function Home() {
  return (
    <main className=" h-screen bg-backgound-color generate-page relative overflow-hidden ">
      <div className="container flex h-full w-full items-center gap-4">
        <div className=" bg-[#262150] rounded-lg h-[650px] my-24 w-1/5">
          <div className=" relative mt-2 mr-2 bg-[#435585] text-white py-3 rounded-e-2xl">
            <p className=" pl-3">New story</p>
            <span className=" absolute right-4 top-1/2 -translate-y-1/2">
              +
            </span>
          </div>
        </div>
        <div className=" main-section relative rounded-lg h-[650px] my-24 w-4/5 flex justify-center items-center  ">
          <div className=""></div>
        </div>
      </div>
    </main>
  );
}
