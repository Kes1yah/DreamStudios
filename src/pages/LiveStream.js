
import React from "react";
import { motion } from "framer-motion";
import { FaVideo, FaBroadcastTower, FaHeadset, FaCloudUploadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const streamingServices = [
  {
    title: "HD Video Streaming",
    description: "Crystal-clear live streaming with high-quality resolution.",
    icon: FaVideo,
  },
  {
    title: "Multi-Platform Broadcast",
    description: "Stream seamlessly to YouTube, Facebook, and other platforms.",
    icon: FaBroadcastTower,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance for your streaming needs.",
    icon: FaHeadset,
  },
  {
    title: "Cloud Storage",
    description: "Save and access your recordings anytime with secure cloud storage.",
    icon: FaCloudUploadAlt,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" },
  }),
  hover: { scale: 1.05, boxShadow: "0px 4px 15px rgba(255, 215, 0, 0.5)" },
};

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center cursor-pointer transition-all duration-300"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      custom={index}
    >
      <motion.div className="text-5xl text-yellow-400 mb-4">
        <Icon />
      </motion.div>
      <h3 className="text-xl font-bold text-yellow-300">{service.title}</h3>
      <p className="text-gray-300 mt-2 text-sm">{service.description}</p>
    </motion.div>
  );
};

const LiveStreaming = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-16 px-6 md:px-20">
      <motion.h1 
        className="text-4xl font-extrabold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Live Streaming Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {streamingServices.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/contact" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg shadow-md hover:bg-yellow-500 transition">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default LiveStreaming;