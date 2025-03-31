import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-between bg-[#0A0A0A] dark:bg-white backdrop-blur-md px-2 py-2 rounded-full shadow-lg z-50">
          <div className="flex items-center gap-1">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Skills", id: "skills" },
              { name: "Services", id: "services" },
              { name: "Qualification", id: "qualification" },
              { name: "Work", id: "work" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-7 py-2.5 rounded-full text-sm font-medium transition-colors select-none outline-none focus:outline-none hover:outline-none active:outline-none focus-visible:outline-none focus:ring-0 hover:ring-0 active:ring-0 focus-visible:ring-0 focus:ring-offset-0 focus-visible:ring-offset-0 ${
                  activeSection === item.id
                    ? "bg-white text-[#0A0A0A] dark:bg-black dark:text-white"
                    : "text-[#818181] hover:text-white dark:text-gray-500 dark:hover:text-[#0A0A0A] bg-transparent"
                }`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                  outline: "none",
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
          <motion.button
            onClick={toggleTheme}
            className="ml-2 p-2.5 rounded-full bg-white text-[#0A0A0A] dark:bg-black dark:text-white select-none outline-none focus:outline-none hover:outline-none active:outline-none focus-visible:outline-none focus:ring-0 hover:ring-0 active:ring-0 focus-visible:ring-0 focus:ring-offset-0 focus-visible:ring-offset-0"
            style={{ WebkitTapHighlightColor: "transparent", outline: "none" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDarkMode ? (
              <HiOutlineSun className="w-4 h-4" />
            ) : (
              <HiOutlineMoon className="w-4 h-4" />
            )}
          </motion.button>
        </nav>

        {/* Page Content */}
        <div className="pt-32">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
