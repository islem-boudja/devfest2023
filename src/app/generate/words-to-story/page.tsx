"use client";
import { useState } from "react";

import ButtonArrow from "@/components/ButtonWrapper";
import Title from "@/components/Title";
import Image from "next/image";
import FileUpload from "@/components/FileUpload";
export default function Home() {
  const [query, setquery] = useState("");
  const [result, setResult] = useState<any>("");
  const handletextChange = (e: any) => {
    const prompt = e.target.value;
    setquery(prompt);
  };

  const handleUpload = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/stories/imagestory",
        {
          method: "POST",
          body: JSON.stringify({
            keywords: query,
          }),
        }
      );

      if (response.ok) {
        console.log("Image uploaded successfully");
        const res = await response.json();
        console.log(res);
        setResult(res);
      } else {
        console.error("Failed to upload image");
      }
    } catch (error: any) {
      console.error("Error uploading image:", error.message);
    }
  };
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
        <div className=" main-section relative rounded-lg h-[650px] my-24 w-4/5 flex justify-center items-center gap-16 ">
          {!result && (
            <>
              <div>
                <Image
                  src="/third-section.svg"
                  width={300}
                  height={200}
                  alt=""
                  className=" rounded-xl"
                />
              </div>
              <div className=" flex flex-col -translate-y-10 gap-4 ">
                <div>
                  <h1 className=" text-4xl font-bold font-sans text-primary-color">
                    Intuitive text crafting
                  </h1>
                  <p className=" max-w-sm text-primary-color font-semibold font-sans">
                    Bring your story to life through a tapestry of visuals and
                    AI ingenuity. Tailor your tale with images that resonate,
                    and let Taleo's image processing technology elevate your
                    narrative, turning each moment captured into a storytelling
                    masterpiece.
                  </p>
                  <div>
                    <label htmlFor="image"></label>
                    <input
                      type="text"
                      id="text"
                      name="text"
                      onChange={handletextChange}
                    />
                    <button
                      onClick={handleUpload}
                      className="border-primary-color border-2 rounded-2xl  px-4 py-2 my-4 font-medium bg-primary-color text-gray-900 transition duration-300 ease-in-out"
                    >
                      submit
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          {result && (
            <div className=" text-white h-full mt-10 flex flex-col gap-3 ml-10 ">
              <h1 className=" text-3xl font-bold">
                {result.story.title.substring(0, result.story.title.length - 1)}
              </h1>
              <p className=" font-sans">{result.story.body}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
