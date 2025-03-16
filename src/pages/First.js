import React, { useEffect } from "react";
import { motion } from "framer-motion";

const First = ({ onFinish }) => {
  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        if (typeof onFinish === "function") {
          onFinish();
        } else {
          console.error("onFinish is not a function");
        }
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [onFinish]);

  return (
    <motion.div
      className="relative h-screen w-full flex items-center justify-center bg-black text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Video Background */}
      <video
        src="/videos/firstvideo.mp4"
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted={true}
      />

      {/* Transparent Layer */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Overlay Text */}
      <div className="absolute text-center">
        <motion.h1
          className="text-6xl font-extrabold text-black-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Helping
        </motion.h1>
        <motion.h1
          className="text-6xl font-extrabold text-black-400 mt-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Brands
        </motion.h1>
        <motion.h1
          className="text-6xl font-extrabold text-black-500 mt-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          Break The Box
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default First;
