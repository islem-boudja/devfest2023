"use client";
import { useState } from "react";

import ButtonArrow from "@/components/ButtonWrapper";
import Title from "@/components/Title";
import Image from "next/image";
import FileUpload from "@/components/FileUpload";
export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState<any>("");
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch(
        "http://localhost:3001/api/stories/imgtostory",
        {
          method: "POST",
          body: formData,
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
            <p className=" pl-3">Visual brilliance, Word harmony</p>
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
                    Visual brilliance, Word harmony
                  </h1>
                  <p className=" max-w-sm text-primary-color font-semibold font-sans">
                    Bring your story to life through a tapestry of visuals and
                    AI ingenuity. Tailor your tale with images that resonate,
                    and let Taleo's image processing technology elevate your
                    narrative, turning each moment captured into a storytelling
                    masterpiece.
                  </p>
                  <div className=" text-primary-color mt-16">
                    <label htmlFor="image" className=" mr-3">
                      Choose an image:
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={handleFileChange}
                    />
                    <button
                      onClick={handleUpload}
                      className="border-primary-color border-2 rounded-2xl  px-4 py-2 my-4 font-medium bg-primary-color text-gray-900 transition duration-300 ease-in-out"
                    >
                      Upload Image
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          {result && (
            <div className=" text-white h-full mt-10 flex flex-col gap-3 ml-3 ">
              <h1 className=" text-2xl">{result.story.title}t</h1>
              <img src={result.story.image} width={100} height={100} alt="" />
              <p>{result.story.body}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
