import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaSearchPlus, FaTimes } from "react-icons/fa";

// Sample data for portfolio projects
const portfolioData = {
  liveStreamedEvents: [
    {
      id: 1,
      title: "Tech Conference 2023",
      description: "Live-streamed a global tech conference with over 10,000 attendees.",
      image: "/images/tech-conference.jpg",
      video: "https://www.youtube.com/embed/CWxyIz3F09E",
    },
    {
      id: 2,
      title: "Music Festival Live",
      description: "Streamed a 3-day music festival with multiple stages and artists.",
      image: "/images/music-festival.jpg",
      video: "https://www.youtube.com/embed/8KZK1YmurCs",
    },
  ],
  mediaProductions: [
    {
      id: 3,
      title: "Brand Promo Video",
      description: "Produced a high-energy promo video for a leading fashion brand.",
      image: "/images/band-promo.jpg",
      video: "https://www.youtube.com/embed/X2Vj6uiDwcA",
    },
    {
      id: 4,
      title: "Corporate Documentary",
      description: "Created a documentary showcasing the journey of a Fortune 500 company.",
      image: "/images/journey.png",
      video: "https://www.youtube.com/embed/jnv5pSgOb_Q",
    },
  ],
};

const PortfolioPage = () => {
  const [flippedCard, setFlippedCard] = useState(null); // Track which card is flipped

  const handleFlip = (id) => {
    setFlippedCard(flippedCard === id ? null : id); // Toggle flip state
  };

  // Generate random lines for the background
  useEffect(() => {
    const container = document.querySelector(".lines-container");
    if (!container) return;

    // Clear existing lines
    container.innerHTML = "";

    // Generate random lines
    for (let i = 0; i < 20; i++) {
      const line = document.createElement("div");
      line.className = "line";
      line.style.top = `${Math.random() * 100}%`;
      line.style.left = `${Math.random() * 100}%`;
      line.style.animationDuration = `${Math.random() * 4 + 2}s`; // Random duration between 2s and 6s
      line.style.animationDelay = `${Math.random() * 2}s`; // Random delay
      container.appendChild(line);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Random Lines Background */}
      <div className="lines-container absolute inset-0 overflow-hidden z-0">
        {/* Lines will be dynamically generated here */}
      </div>

      <h1 className="text-4xl font-bold text-center text-white mb-8 relative z-10">
        Our Portfolio
      </h1>

      {/* Live Streamed Events Section */}
      <section className="mb-12 relative z-10">
        <h2 className="text-2xl font-semibold text-white mb-6">Live Streamed Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.liveStreamedEvents.map((project) => (
            <motion.div
              key={project.id}
              className="relative w-full h-64 perspective cursor-pointer"
              onClick={() => handleFlip(project.id)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Front of the Card */}
              <motion.div
                className="absolute w-full h-full bg-black rounded-lg shadow-lg flex items-center justify-center"
                style={{
                  transform:
                    flippedCard === project.id ? "rotateY(180deg)" : "rotateY(0deg)",
                  backfaceVisibility: "hidden",
                }}
                initial={false}
                animate={{ rotateY: flippedCard === project.id ? 180 : 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <FaPlay className="text-white text-4xl" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
              </motion.div>

              {/* Back of the Card */}
              <motion.div
                className="absolute w-full h-full bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center p-4"
                style={{
                  transform:
                    flippedCard === project.id ? "rotateY(0deg)" : "rotateY(-180deg)",
                  backfaceVisibility: "hidden",
                }}
                initial={false}
                animate={{ rotateY: flippedCard === project.id ? 0 : -180 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 text-center mb-4">
                  {project.description}
                </p>
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <iframe
                    src={project.video}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  />
                </div>
                <button
                  className="mt-4 text-white hover:text-gray-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFlip(project.id);
                  }}
                >
                  <FaTimes className="text-2xl" />
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Media Productions Section */}
      <section className="relative z-10">
        <h2 className="text-2xl font-semibold text-white mb-6">Media Productions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.mediaProductions.map((project) => (
            <motion.div
              key={project.id}
              className="relative w-full h-64 perspective cursor-pointer"
              onClick={() => handleFlip(project.id)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Front of the Card */}
              <motion.div
                className="absolute w-full h-full bg-black rounded-lg shadow-lg flex items-center justify-center"
                style={{
                  transform:
                    flippedCard === project.id ? "rotateY(180deg)" : "rotateY(0deg)",
                  backfaceVisibility: "hidden",
                }}
                initial={false}
                animate={{ rotateY: flippedCard === project.id ? 180 : 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <FaSearchPlus className="text-white text-4xl" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
              </motion.div>

              {/* Back of the Card */}
              <motion.div
                className="absolute w-full h-full bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center p-4"
                style={{
                  transform:
                    flippedCard === project.id ? "rotateY(0deg)" : "rotateY(-180deg)",
                  backfaceVisibility: "hidden",
                }}
                initial={false}
                animate={{ rotateY: flippedCard === project.id ? 0 : -180 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 text-center mb-4">
                  {project.description}
                </p>
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <iframe
                    src={project.video}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  />
                </div>
                <button
                  className="mt-4 text-white hover:text-gray-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFlip(project.id);
                  }}
                >
                  <FaTimes className="text-2xl" />
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inline CSS for Random Lines */}
      <style>
        {`
          .lines-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 0;
          }

          .line {
            position: absolute;
            width: 2px;
            height: 100%;
            background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.2), transparent);
            animation: moveLine linear infinite;
          }

          @keyframes moveLine {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default PortfolioPage;