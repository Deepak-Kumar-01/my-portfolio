import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaServer,
  FaSearch,
  FaPencilAlt,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

const ServiceModal = ({ service, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-[#0A0A0A] dark:bg-white rounded-2xl p-8 max-w-2xl w-full relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white dark:hover:text-[#0A0A0A] transition-colors"
      >
        <FaTimes className="w-6 h-6" />
      </button>

      <div className="w-16 h-16 bg-white dark:bg-[#0A0A0A] rounded-lg flex items-center justify-center mb-6">
        <service.icon className="text-3xl text-[#0A0A0A] dark:text-white" />
      </div>

      <h3 className="text-2xl font-bold text-white dark:text-[#0A0A0A] mb-4">
        {service.title}
      </h3>

      <div className="space-y-4 text-gray-300 dark:text-gray-700">
        <p className="text-lg leading-relaxed">{service.description}</p>
        <div className="pt-4 border-t border-gray-800 dark:border-gray-200">
          <h4 className="text-lg font-semibold text-white dark:text-[#0A0A0A] mb-2">
            Key Features
          </h4>
          <ul className="list-disc list-inside space-y-2">
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const ServiceCard = ({ title, description, icon: Icon, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-[#0A0A0A] dark:bg-white rounded-2xl p-6 shadow-lg group cursor-pointer"
    onClick={onClick}
  >
    <div className="w-12 h-12 bg-white dark:bg-[#0A0A0A] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-2xl text-[#0A0A0A] dark:text-white" />
    </div>

    <h3 className="text-xl font-semibold text-white dark:text-[#0A0A0A] mb-3">
      {title}
    </h3>

    <p className="text-gray-300 dark:text-gray-700 leading-relaxed">
      {description}
    </p>

    <motion.div
      className="mt-4 inline-flex items-center text-white dark:text-[#0A0A0A] font-medium"
      whileHover={{ x: 5 }}
    >
      View More
      <svg
        className="w-4 h-4 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </motion.div>
  </motion.div>
);

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Web Development",
      description:
        "Create modern and responsive websites using the latest technologies and best practices for optimal user experience.",
      icon: FaCode,
      features: [
        "Responsive design for all devices",
        "Modern UI/UX implementation",
        "Performance optimization",
        "Cross-browser compatibility",
        "SEO-friendly structure",
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "Design intuitive and beautiful user interfaces with a focus on user experience and modern design trends.",
      icon: FaPaintBrush,
      features: [
        "User-centered design approach",
        "Wireframing and prototyping",
        "Interactive design systems",
        "Accessibility compliance",
        "Design documentation",
      ],
    },
    {
      title: "Mobile Development",
      description:
        "Build native and cross-platform mobile applications that work seamlessly across all devices.",
      icon: FaMobileAlt,
      features: [
        "Native app development",
        "Cross-platform solutions",
        "App store optimization",
        "Push notifications",
        "Offline functionality",
      ],
    },
    {
      title: "Backend Development",
      description:
        "Develop robust and scalable server-side solutions with secure API endpoints and efficient databases.",
      icon: FaServer,
      features: [
        "RESTful API development",
        "Database optimization",
        "Security implementation",
        "Cloud integration",
        "Scalable architecture",
      ],
    },
    {
      title: "SEO Optimization",
      description:
        "Optimize your website for search engines to increase visibility and drive organic traffic.",
      icon: FaSearch,
      features: [
        "Keyword research and analysis",
        "On-page optimization",
        "Technical SEO",
        "Content strategy",
        "Performance monitoring",
      ],
    },
    {
      title: "Brand Identity",
      description:
        "Create compelling brand identities including logos, color schemes, and design systems.",
      icon: FaPencilAlt,
      features: [
        "Logo design",
        "Brand guidelines",
        "Color palette creation",
        "Typography selection",
        "Brand assets development",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Services
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          What I can do for you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            index={index}
            onClick={() => setSelectedService(service)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
