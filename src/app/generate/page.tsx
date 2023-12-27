import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" generate-page relative h-screen bg-backgound-color overflow-hidden flex flex-col items-center justify-center">
      <section className=" flex flex-col items-center justify-center">
        <h1 className=" text-primary-color text-4xl font-sans font-medium mb-16 ">
          Select how you want to tell your story
        </h1>
        <div className="flex items-center justify-center gap-4 mt-4 text-primary-color">
          {options.map((option) => (
            <Link
              href={option.href}
              className=" w-[350px] h-[300px] border-2 bg-[#2621504d] border-primary-color rounded-xl z-40"
            >
              <h1 className=" my-4 mx-3 font-bold font-sans text-lg">
                {option.title}
              </h1>
              <p className=" my-4 mx-3  font-sans text-md">
                {option.descreption}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

const options = [
  {
    href: "/generate/words-to-story",
    title: "generate a story from text prompts",
    descreption:
      "Taleo transforms your text prompts into captivating narratives. Input your ideas, and watch as AI breathes life into stories, effortlessly combining words to create a unique and immersive storytelling experience.",
  },
  {
    href: "/generate/image-to-story",
    title: "generate a story and a picture from text prompts",
    descreption:
      "Taleo's innovative text-to-image feature brings your narratives to life with visual flair. Simply provide a text prompt, and witness as Taleo generates stunning images to complement your story. Immerse yourself in the fusion of words and visuals, enhancing the storytelling experience like never before.",
  },
  {
    href: "/generate/image-to-story",
    title: "generate a story from an image",
    descreption:
      "Taleo's image-to-text feature transforms your uploaded pictures into captivating stories. Upload an image, and let Taleo's AI unravel a narrative inspired by the visual elements, seamlessly blending creativity with the power of storytelling. Immerse yourself in a unique storytelling experience that begins with a single image.",
  },
];
