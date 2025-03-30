import { motion } from "framer-motion";
import {
  HiOutlineClock,
  HiOutlineBriefcase,
  HiOutlineSupport,
} from "react-icons/hi";

const StatCard = ({ icon: Icon, title, value, subtitle }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="w-6 h-6 text-gray-600 dark:text-gray-300 mb-3" />
    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
      {title}
    </h3>
    <div className="text-gray-600 dark:text-gray-300">
      <span className="font-bold text-xl">{value}</span>
      <span className="text-sm ml-1">{subtitle}</span>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            About Me
          </h1>
          <p className="text-gray-600 dark:text-gray-300">My introduction</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Profile Image */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Profile"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          {/* Stats and Description */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <StatCard
                icon={HiOutlineBriefcase}
                title="Experience"
                value="8+"
                subtitle="Years"
              />
              <StatCard
                icon={HiOutlineClock}
                title="Completed"
                value="48+"
                subtitle="Projects"
              />
              <StatCard
                icon={HiOutlineSupport}
                title="Support"
                value="Online"
                subtitle="24/7"
              />
            </div>

            {/* Description */}
            <motion.p
              className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Frontend developer, I create web pages with UI / UX user
              interface, I have years of experience and many clients are happy
              with the projects carried out.
            </motion.p>

            {/* Download CV Button */}
            <motion.button
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
