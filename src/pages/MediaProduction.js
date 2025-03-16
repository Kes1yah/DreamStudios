import React from "react";
import { motion } from "framer-motion";
import { FaVideo, FaCameraRetro, FaFilm, FaMicrophone, FaEdit, FaMusic } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Videography",
    description: "Every Frame Tells a Story.",
    icon: FaVideo,
    color: "from-gray-700 to-black",
  },
  {
    title: "Photography",
    description: "Freeze Time, Frame Perfection!",
    icon: FaCameraRetro,
    color: "from-gray-700 to-black",
  },
  {
    title: "Post-Production",
    description: "Crafting Visual Masterpieces, One Edit at a Time",
    icon: FaEdit,
    color: "from-gray-700 to-black",
  },
  {
    title: "Sound Production",
    description: "Crystal Clear Sound, Unmatched Impact.",
    icon: FaMicrophone,
    color: "ffrom-gray-700 to-black",
  },
  {
    title: "Music Composition",
    description: "Turning Emotions into Melodies.",
    icon: FaMusic,
    color: "from-gray-700 to-black",
  },
  {
    title: "Film Production",
    description: "Bringing Stories to Life, One Scene at a Time.",
    icon: FaFilm,
    color: "from-gray-700 to-black",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" },
  }),
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const MediaProductionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 opacity-80"></div>

      <motion.h1
        className="relative text-5xl font-extrabold text-yellow-400 mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Media Production Services 
      </motion.h1>

      <p className="relative text-lg text-gray-300 text-center max-w-2xl">
        We transform ideas into stunning visuals and audio experiences. Explore our world-class media production services.
      </p>

      {/* Service Cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              className={`p-8 rounded-lg shadow-lg flex flex-col items-center text-center cursor-pointer transform transition-all duration-300 bg-gradient-to-br ${service.color} hover:scale-105`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={index}
            >
              <motion.div className="text-6xl text-white mb-4">
                <Icon />
              </motion.div>
              <h2 className="text-2xl font-bold text-white">{service.title}</h2>
              <p className="text-white mt-2">{service.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Button */}
      <motion.button
        className="relative mt-10 px-6 py-3 bg-yellow-400 text-gray-900 font-bold text-lg rounded-full shadow-lg hover:bg-yellow-300 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/contact")}
      >
        Book a Service Now!
      </motion.button>
    </div>
  );
};

export default MediaProductionPage;