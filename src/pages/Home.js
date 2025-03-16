import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const bubbleVariants = {
  animate: {
    y: [0, -20, 0],
    opacity: [0.3, 0.7, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const navLinks = [
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "./Portfolio" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
  { label: "Join Us", path: "/join" },
  { label: "Esports", path: "/esports" },
];

const socialLinks = [
  { icon: FaFacebook, link: "#" },
  { icon: FaTwitter, link: "#" },
  { icon: FaInstagram, link: "#" },
  { icon: FaLinkedin, link: "#" },
];

const IntroPage = ({ onFinish }) => {
  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        onFinish();
      }
    };
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [onFinish]);

  return (
    <motion.div
      className="h-screen w-full flex items-center justify-center bg-black text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Intro content can go here */}
    </motion.div>
  );
};

const HomePage = () => {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) return <IntroPage onFinish={() => setShowIntro(false)} />;

  return (
    <motion.div
      className="relative flex flex-col min-h-screen bg-gray-900 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Navigation Bar */}
      <nav className="w-full p-6 bg-gray-800 bg-opacity-75 backdrop-blur-md fixed top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white">DreamStudios</h1>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Background Bubbles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-400 rounded-full"
          style={{
            width: `${Math.random() * 50 + 20}px`,
            height: `${Math.random() * 50 + 20}px`,
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            opacity: 0.3,
          }}
          variants={bubbleVariants}
          animate="animate"
        />
      ))}

      {/* Centered Text */}
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-white">DreamStudios</h1>
          <p className="text-2xl text-gray-400 mt-4">Where Your Dream Comes to Life</p>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;