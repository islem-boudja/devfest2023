"use client";
import { useState, useRef, use, useEffect } from "react";
import { delay, motion, useInView } from "framer-motion";
import Image from "next/image";
const ScanningContainer = () => {
  const [scanningComplete, setScanningComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      console.log("in view");
    }
  }, [isInView]);
  const rotate = {
    rotateY: [0, 180],
    transition: {
      duration: 1,
      delay: 3,
    },
  };
  const scanningAnimation = {
    y: ["0", "-9rem", "0rem"],
    transition: {
      y: {
        duration: 3,
        repeat: null,
      },
    },
    onComplete: () => {
      // Set the state to mark scanning as complete
      setScanningComplete(true);
    },
  };

  const rotateAnimation = {
    rotate: 360, // Rotate the card by 360 degrees
    transition: {
      duration: 1, // Adjust the duration as needed
    },
  };

  return (
    <div className="relative" ref={ref}>
      <motion.div className="relative w-64 h-36 bg-gray-950 " animate={rotate}>
        <Image src="/next.svg" alt="logo" width={400} height="100" />
      </motion.div>
      <motion.div
        className="absolute w-64 h-3 bg-gray-200 rounded-md shadow-md overflow-hidden"
        animate={scanningAnimation}
      ></motion.div>
    </div>
  );
};

export default ScanningContainer;
