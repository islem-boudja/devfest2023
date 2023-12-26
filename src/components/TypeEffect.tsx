"use client";
import React, { useState, useEffect, useRef } from "react";

const Typeprompt = () => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    let intervalDuration = 10;

    const animateText = () => {
      setText(TEXT.substring(0, currentIndex + 1));
      currentIndex++;

      // Scroll to the bottom on each animation frame
      if (contentRef.current) {
        contentRef.current.scrollTop = contentRef.current.scrollHeight;
      }
      if (currentIndex === TEXT.length) {
        clearInterval(intervalId); // Stop the animation
        setTimeout(() => {
          // Start the animation again after a 1-second delay
          currentIndex = 0;
          intervalId = setInterval(animateText, intervalDuration);
        }, 1000); // 1000 milliseconds = 1 second
      }
    };

    let intervalId = setInterval(animateText, intervalDuration);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-[#262150] w-[365px] h-[453.705px] rounded-xl flex flex-col justify-around font-sans font-medium">
      <div
        ref={contentRef}
        className=" h-[350px] mx-4 rounded-lg text-white overflow-y-hidden p-3"
      >
        <p className=" pt-5">{text.substring(25, text.length)}</p>
      </div>
      <div className="bg-[#435585] h-12 mx-4 rounded-lg text-white ">
        <p className="  mx-auto pt-3 px-3 font-semibold text-medium">
          {text.substring(0, 24)}
        </p>
      </div>
    </div>
  );
};

export { Typeprompt };

const TEXT =
  "In the enchanting expanse of Eldoria, where ancient magic swirled through cerulean skies, the mesmerizing journey of Aric, a sorcerer with insatiable curiosity, unfolded. His fate intertwined with Zephyr, a dragon whose scales glistened with ethereal hues, leading to an extraordinary partnership.As shadows cast ominous dances, foretelling the malevolent rise of the enigmatic Shadowweaver and his dark incantations, Aric united with Mirabelle, a rogue enchantress of sharp intellect, and Grimgar, a stoic knight bearing a sword etched with ancient runes. Together, this eclectic ensemble embarked on an odyssey of mythic proportions.";
