import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaInstagram, FaDribbble } from "react-icons/fa";
import { useState, useEffect } from "react";
import About from "./About";
import Projects from "./Projects";
import Qualification from "./Qualification";
import Skills from "./Skills";
import Services from "./Services";

const SocialLink = ({ href, icon: Icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="w-6 h-6" />
  </motion.a>
);

const Home = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    let scrollTimeout;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setIsScrolling(true);
      setShowScrollIndicator(false);

      // Clear the timeout if it exists
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set a timeout to detect when scrolling stops
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);

        // Check if we're at the top of a section
        const currentScrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const isAtSectionBoundary =
          currentScrollY % windowHeight < 50 ||
          windowHeight - (currentScrollY % windowHeight) < 50;

        if (isAtSectionBoundary) {
          setShowScrollIndicator(true);
        }
      }, 150); // Adjust this delay as needed

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Social Links - Fixed on the left side */}
      <div className="fixed left-8 lg:left-12 top-1/2 transform -translate-y-1/2 flex flex-col gap-8 z-10">
        <SocialLink href="https://instagram.com" icon={FaInstagram} />
        <SocialLink href="https://dribbble.com" icon={FaDribbble} />
        <SocialLink href="https://github.com" icon={FaGithub} />
      </div>

      {/* Main Content */}
      <div className="w-full">
        {/* Home Section */}
        <section
          id="home"
          className="content-container flex flex-col justify-center min-h-screen"
        >
          <div className="flex items-center justify-between max-w-6xl mx-auto w-full px-4 md:px-8 lg:px-16">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  Deepak Kumar
                  <motion.span
                    className="text-4xl"
                    animate={{ rotate: [0, 20, 0] }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatDelay: 1.5,
                    }}
                  >
                    👋
                  </motion.span>
                </h1>
                <h2 className="text-2xl text-gray-800 dark:text-gray-200 mb-8">
                  Mobile App Developer | Full Stack Developer
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg leading-relaxed">
                  I'm an aspiring mobile app and full stack developer,
                  passionate about building seamless, user-friendly, and
                  scalable digital solutions.
                </p>
                <motion.button
                  className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium flex items-center gap-3 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Say Hello <span className="transform rotate-45">✈</span>
                </motion.button>
              </motion.div>
            </div>

            {/* Profile Image */}
            <div className="w-[400px] h-[400px] p-4">
              <motion.div
                className="w-full h-full overflow-hidden border-[8px] border-gray-100 dark:border-gray-800"
                animate={{
                  borderRadius: [
                    "60% 40% 30% 70%/60% 30% 70% 40%",
                    "30% 60% 70% 40%/50% 60% 30% 60%",
                    "60% 40% 30% 70%/60% 30% 70% 40%",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <AnimatePresence>
            {showScrollIndicator && (
              <motion.div
                className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 z-50"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-sm text-gray-400 dark:text-gray-500">
                  Scroll down
                </span>
                <motion.div
                  className="w-5 h-8 border-2 border-gray-300 dark:border-gray-600 rounded-full flex items-start p-1"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
            <About />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
            <Skills />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
            <Services />
          </div>
        </section>

        {/* Qualification Section */}
        <section id="qualification" className="min-h-screen py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
            <Qualification />
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="min-h-screen py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
            <Projects />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
