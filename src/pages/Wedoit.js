import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import YouTube from "react-youtube";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const videos = [
  { id: "8KZK1YmurCs", title: "Video 1" },
  { id: "CWxyIz3F09E", title: "Video 2" },
  { id: "5hPtU8Jbpg0", title: "Video 3" },
  { id: "aTC_RNYtEb0", title: "Video 4" },
  { id: "UU3WMfQOjes", title: "Video 5" },
];

const FlashcardVideos = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const handleSwipe = (direction) => {
    if (direction === "left") {
      setIndex((prevIndex) => (prevIndex + 1) % videos.length);
    } else if (direction === "right") {
      setIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
  });

  const opts = {
    height: '300',
    width: '500',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-4 bg-gray-900">
      <h2 className="text-4xl font-bold text-white mb-4">THIS IS HOW WE DO IT</h2>
      <motion.div
        {...swipeHandlers}
        className="relative flex items-center justify-center overflow-hidden bg-gray-800 rounded-lg"
        style={{ width: isHovered ? 520 : 500, height: isHovered ? 320 : 300 }} // Expand container on hover
        transition={{ duration: 0.3 }} // Smooth transition for container resize
      >
        <AnimatePresence>
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              className={`absolute w-[500px] h-[300px] bg-black rounded-xl shadow-lg ${i === index ? 'z-10' : 'z-0'}`}
              initial={{ x: i > index ? 100 : -100, opacity: 0 }}
              animate={{ 
                x: i === index ? 0 : i > index ? 100 : -100, 
                opacity: i === index ? 1 : 0,
                scale: isHovered && i === index ? 1.05 : 1, // Scale video on hover
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setIsHovered(true)} // Handle hover start
              onMouseLeave={() => setIsHovered(false)} // Handle hover end
            >
              <YouTube videoId={video.id} opts={opts} className="rounded-xl w-full h-full" />
              <div className="absolute bottom-0 bg-black bg-opacity-0 w-full text-white p-2 text-center rounded-b-xl">
                {video.title}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <div className="flex justify-between w-[500px] mt-4">
        <button
          className="text-white px-4 py-2 bg-gray-800 rounded-md"
          onClick={() => handleSwipe("right")}
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          className="text-white px-4 py-2 bg-gray-800 rounded-md"
          onClick={() => handleSwipe("left")}
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default FlashcardVideos;