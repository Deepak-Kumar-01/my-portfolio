import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaServer } from "react-icons/fa";

const SkillCategory = ({ title, skills, icon: Icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="bg-[#0A0A0A] dark:bg-white rounded-2xl p-6 shadow-lg"
  >
    <div className="flex items-center gap-3 mb-6">
      <Icon className="text-2xl text-white dark:text-[#0A0A0A]" />
      <h3 className="text-xl font-semibold text-white dark:text-[#0A0A0A]">
        {title}
      </h3>
    </div>

    <div className="space-y-4">
      {skills.map((skill, idx) => (
        <div key={idx}>
          <div className="flex justify-between mb-1">
            <span className="text-gray-300 dark:text-gray-700">
              {skill.name}
            </span>
            <span className="text-gray-400 dark:text-gray-500">
              {skill.level}%
            </span>
          </div>
          <div className="h-2 bg-gray-800 dark:bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white dark:bg-[#0A0A0A] rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 0.8, delay: index * 0.2 + idx * 0.1 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Developer",
      icon: FaCode,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 85 },
      ],
    },
    {
      title: "Designer",
      icon: FaPaintBrush,
      skills: [
        { name: "Figma", level: 90 },
        { name: "Photoshop", level: 85 },
        { name: "Illustrator", level: 75 },
        { name: "Adobe XD", level: 80 },
      ],
    },
    {
      title: "Backend Developer",
      icon: FaServer,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "MongoDB", level: 85 },
        { name: "SQL", level: 70 },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          My technical expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            title={category.title}
            skills={category.skills}
            icon={category.icon}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
