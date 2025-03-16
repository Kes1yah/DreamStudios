import React from "react";
import { motion } from "framer-motion";
import "@fontsource/cinzel"; // Luxury font

const ContactPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0F0F17] flex items-center justify-center">
      {/* Background Animated Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F2E] to-[#101018] opacity-70 animate-pulse"></div>

      {/* Left Box - Contact Information (Reduced Width) */}
      <motion.div
        className="absolute left-0 top-0 w-1/5 h-full bg-[#1E1E22] p-6 z-10 shadow-lg flex flex-col justify-center rounded-r-2xl"
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <h2 className="text-xl font-semibold text-[#E0E0E0] border-b border-[#3A3A40] pb-3 mb-4 uppercase tracking-wide">
          Contact Info
        </h2>

        <div className="space-y-5">
          {[
            { label: "Address", value: "123 Dream St, Imagination City" },
            { label: "Phone", value: "+1 (123) 456-7890" },
            { label: "Email", value: "contact@dreamstudios.com" },
          ].map((item, index) => (
            <div key={index} className="group relative">
              <h3 className="text-sm text-[#A0A0A0] uppercase tracking-widest">
                {item.label}
              </h3>
              <p className="text-lg text-[#E0E0E0] font-medium transition duration-300 group-hover:text-[#FFD700]">
                {item.value}
              </p>
              {/* Hover Line Effect */}
              <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Box - Contact Form (Same Layout) */}
      <motion.div
        className="absolute right-0 bottom-0 w-1/3 h-full bg-[#1E1E22] p-8 z-10 shadow-lg flex flex-col justify-center rounded-l-2xl"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <h2 className="text-2xl font-semibold text-[#E0E0E0] border-b border-[#3A3A40] pb-3 mb-6 uppercase tracking-wide">
          Get in Touch
        </h2>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 text-lg bg-[#292933] text-[#E0E0E0] rounded-md outline-none focus:ring-2 focus:ring-[#FFD700] transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 text-lg bg-[#292933] text-[#E0E0E0] rounded-md outline-none focus:ring-2 focus:ring-[#FFD700] transition"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 text-lg bg-[#292933] text-[#E0E0E0] rounded-md outline-none focus:ring-2 focus:ring-[#FFD700] transition"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 text-lg font-semibold bg-[#FFD700] text-black rounded-md hover:bg-[#E6C300] transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Company Name & Tagline - Falling Effect */}
      <motion.div
        className="absolute flex flex-col items-center text-center"
        initial={{ y: "-100vh" }}
        animate={{ y: "-20%" }} // Adjusted position
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
      >
        <h1 className="text-5xl font-bold tracking-wide flex space-x-2 text-[#FFD700] font-[Cinzel]">
          {"Dream Studios".split("").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="text-lg text-[#C0C0C0] mt-2 font-[Cinzel] opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Where dreams come to life
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ContactPage;