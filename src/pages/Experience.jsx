import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Developer",
      company: "Tech Company",
      period: "2020 - Present",
      description:
        "Led development of various web applications using modern technologies.",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Developed and maintained multiple client projects.",
      skills: ["JavaScript", "Python", "Docker"],
    },
    // Add more experiences as needed
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-12 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Timeline line with animation */}
            {index !== experiences.length - 1 && (
              <motion.div
                className="absolute left-[15px] top-[24px] w-0.5 bg-blue-500"
                initial={{ height: 0 }}
                animate={{ height: "calc(100% + 48px)" }}
                transition={{ duration: 1, delay: index * 0.2 }}
                style={{ originY: 0 }}
              />
            )}

            <div className="flex gap-8">
              {/* Timeline dot with animation */}
              <motion.div
                className="relative w-8 h-8 flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-4 h-4 rounded-full bg-blue-600"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    delay: index * 0.2,
                  }}
                />
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <motion.h3
                  className="text-xl font-bold mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  {exp.title}
                </motion.h3>
                <motion.div
                  className="text-gray-600 dark:text-gray-300 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                >
                  {exp.company} • {exp.period}
                </motion.div>
                <motion.p
                  className="text-gray-700 dark:text-gray-400 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  {exp.description}
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.6 }}
                >
                  {exp.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-full"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#3B82F6",
                        color: "#ffffff",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
