import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const teamMembers = [
  { 
    id: 1, 
    name: "Alice Johnson", 
    role: "CEO", 
    contact: "alicejohnson@gmail.com", 
    img: "/images/mem1.jpg",
    description: "Alice is the visionary leader of our company, guiding the team with her strategic insights and industry expertise. With over a decade of experience, she ensures the company moves towards innovation and success."
  },
  { 
    id: 2, 
    name: "Bob Smith", 
    role: "Marketing Head", 
    contact: "bobsmith12@gmail.com", 
    img: "/images/mem2.jpg",
    description: "Bob is the creative force behind our marketing strategies. His expertise in brand development and audience engagement has helped us reach new heights in the industry."
  },
  { 
    id: 3, 
    name: "Charlie Brown", 
    role: "Lead Designer", 
    contact: "charlieb@gmail.com", 
    img: "/images/mem3.jpg",
    description: "Charlie’s passion for design brings innovation to our products. He ensures that every aspect of our design aligns with user needs while maintaining aesthetic appeal."
  },
  { 
    id: 4, 
    name: "David Lee", 
    role: "Software Engineer", 
    contact: "david@example.com", 
    img: "/images/mem4.jpg",
    description: "David is a coding wizard who specializes in building seamless and efficient applications. His expertise in full-stack development is a key pillar of our technological advancements."
  }
];


const MeetTheTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState(null);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  const showDetails = (member) => setSelectedMember(member);
  const closeDetails = () => setSelectedMember(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6 relative">
      <h2 className="text-3xl font-bold mb-6">Meet The Team</h2>

      {/* Image Carousel */}
      <div className="relative w-full max-w-4xl overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {teamMembers.map((member) => (
            <div key={member.id} className="w-full flex-shrink-0 flex flex-col items-center">
              <div 
                className="relative cursor-pointer"
                onClick={() => showDetails(member)}
              >
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-60 h-60 object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="mt-4 text-xl font-semibold">{member.name}</p>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button onClick={prevSlide} className="text-gray-400 hover:text-white p-2">
          <FaArrowLeft size={30} />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button onClick={nextSlide} className="text-gray-400 hover:text-white p-2">
          <FaArrowRight size={30} />
        </button>
      </div>

    {/* Member Details Modal */}
<AnimatePresence>
  {selectedMember && (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-0 p-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.div 
        className="bg-white bg-opacity-10 backdrop-blur-lg p-10 rounded-xl text-white text-center shadow-lg w-3/4 max-w-lg"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h3 className="text-3xl font-bold">{selectedMember.name}</h3>
        <p className="text-gray-300 text-lg">{selectedMember.role}</p>
        <p className="mt-3 text-xl">{selectedMember.contact}</p>

        {/* Ensure description exists before rendering */}
        {selectedMember.description ? (
          <p className="mt-4 text-gray-200 text-base">{selectedMember.description}</p>
        ) : (
          <p className="mt-4 text-gray-400 text-sm">No additional details available.</p>
        )}

        <button 
          onClick={closeDetails} 
          className="mt-6 px-6 py-3 bg-blur-600 text-white text-lg rounded-lg hover:bg-white-700 transition"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}

export default MeetTheTeam;
