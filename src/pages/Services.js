import React from "react";
import { motion, useAnimation } from "framer-motion";
import { FaVideo, FaBullhorn, FaCalendarAlt, FaCameraRetro } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Live Streaming",
    description: "Seamless live streaming for engaging virtual events.",
    icon: FaVideo,
    path: "/pages/LiveStream",
  },
  {
    title: "Media Production",
    description: "High-quality videography and photography services.",
    icon: FaCameraRetro,
    path: "/pages/MediaProduction",
  },
  {
    title: "Digital Marketing",
    description: "Boost your brand with strategic online marketing.",
    icon: FaBullhorn,
    path: "/pages/digital-marketing",
  },
  {
    title: "Event Management",
    description: "Flawless planning and execution for any event.",
    icon: FaCalendarAlt,
    path: "/pages/event-management",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.2 },
  }),
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      className="relative bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center text-center cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      custom={index}
      onClick={() => service.path && navigate(service.path)}
    >
      <motion.div
        className="text-6xl text-yellow-400 mb-4"
        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
      >
        <Icon />
      </motion.div>
      <h3 className="text-2xl font-bold text-yellow-300">{service.title}</h3>
      <p className="text-gray-300 mt-2">{service.description}</p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-16 px-6 md:px-20">
      <motion.h1
        className="text-5xl font-extrabold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Our Services
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3, // Staggered animation for children
            },
          },
        }}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Services;