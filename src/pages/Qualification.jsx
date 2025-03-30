import { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const TimelineItem = ({ year, title, subtitle, isLeft, isLast, index }) => (
  <div
    className={`flex ${
      isLeft ? "flex-row" : "flex-row-reverse"
    } w-full items-center justify-center gap-4 group relative min-h-[120px]`}
  >
    <div className={`w-1/2 ${isLeft ? "text-right" : "text-left"} p-4`}>
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{year}</p>
      </motion.div>
    </div>

    <div className="relative flex flex-col items-center">
      {/* Vertical line above dot */}
      {!isLast && (
        <motion.div
          className="w-[1px] bg-gray-300 dark:bg-gray-700 absolute h-[120px] top-1/2"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "top" }}
          viewport={{ once: true }}
        />
      )}

      {/* Dot */}
      <motion.div
        className="w-4 h-4 bg-gray-900 dark:bg-white rounded-full z-10 group-hover:scale-125 transition-transform border-[3px] border-white dark:border-[#0A0A0A]"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 0.3,
          delay: index * 0.2,
        }}
        viewport={{ once: true }}
      />
    </div>

    <div className="w-1/2" />
  </div>
);

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");

  const education = [
    {
      year: "2019 - 2023",
      title: "Computer Science Degree",
      subtitle: "Harvard University",
    },
    {
      year: "2016 - 2019",
      title: "High School Diploma",
      subtitle: "St. Patrick High School",
    },
  ];

  const experience = [
    {
      year: "2021 - Present",
      title: "Product Designer",
      subtitle: "Microsoft - Spain",
    },
    {
      year: "2020 - 2021",
      title: "UX Designer",
      subtitle: "Apple Inc - Spain",
    },
    {
      year: "2018 - 2020",
      title: "Web Designer",
      subtitle: "Figma - Spain",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Qualification
        </h2>
        <p className="text-gray-600 dark:text-gray-400">My personal journey</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setActiveTab("education")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-base font-medium transition-all outline-none
            ${
              activeTab === "education"
                ? "bg-gray-900 text-gray-100 dark:bg-white dark:text-[#0A0A0A]"
                : "text-gray-400 dark:text-gray-400 hover:text-gray-100 hover:bg-gray-900 dark:hover:text-[#0A0A0A] dark:hover:bg-white"
            }`}
        >
          <FaGraduationCap className="text-xl" />
          Education
        </button>
        <button
          onClick={() => setActiveTab("experience")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-base font-medium transition-all outline-none
            ${
              activeTab === "experience"
                ? "bg-gray-900 text-gray-100 dark:bg-white dark:text-[#0A0A0A]"
                : "text-gray-400 dark:text-gray-400 hover:text-gray-100 hover:bg-gray-900 dark:hover:text-[#0A0A0A] dark:hover:bg-white"
            }`}
        >
          <FaBriefcase className="text-xl" />
          Experience
        </button>
      </div>

      {/* Timeline */}
      <div className="relative">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-0"
        >
          {/* Main vertical line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-[0.5px] w-[1px] bg-gray-300 dark:bg-gray-700"
            style={{
              height: "calc(100% - 2rem)",
              top: "1rem",
              transformOrigin: "top",
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
          />

          {(activeTab === "education" ? education : experience).map(
            (item, index, array) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                subtitle={item.subtitle}
                isLeft={index % 2 === 0}
                isLast={index === array.length - 1}
                index={index}
              />
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Qualification;
