import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 90 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Material UI", level: 80 },
      { name: "ShadCN UI", level: 75 },
      {  name: "Framer-Motion", level: 65    }
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JWT", level: 75 },
      { name: "CORS", level: 70 },
      { name: "dotenv", level: 75 },
      { name: "Zod (Validation)", level: 70 },
    ],
  },
  {
    category: "Database & ORM",
    items: [
      { name: "MongoDB", level: 90 },
      { name: "MongoDB Atlas & Compass", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Mongoose", level: 85 },
      { name: "Sequelize ORM", level: 75 },
    ],
  },
  {
    category: "Tools & APIs",
    items: [
      { name: "Redux Toolkit", level: 85 },
      { name: "Redux Persist", level: 80 },
      { name: "Postman", level: 90 },
      { name: "Cursor AI", level: 70 },
      { name: "GrokAI ChatGPT AI", level: 70 },
      { name: "REST API", level: 90 },
      { name: "Git & GitHub", level: 90 },
      { name: "PM2 & Nginx", level: 70 },
    ],
  },
];

const glassCard = "backdrop-blur-md shadow-xl rounded-lg border border-gray-700/30 bg-[#0A1A2F]/60 hover:bg-[#0A1A2F]/70 transition-all duration-300";

const barVariants = {
  hidden: { width: 0 },
  visible: (level) => ({
    width: `${level}%`,
    transition: { duration: 1.2, ease: "easeOut" },
  }),
};

export default function Skills() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 pt-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-white bg-clip-text text-transparent mb-12">
        My Skills & Tools
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {skills.map((skillCategory, index) => (
          <motion.div
            key={index}
            className={glassCard + " p-6 flex flex-col"}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl text-white font-semibold mb-4">{skillCategory.category}</h3>
            <div className="flex flex-col gap-3 overflow-y-auto max-h-[400px]">
              {skillCategory.items.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1 text-white/80 text-sm">{skill.name} <span>{skill.level}%</span></div>
                  <div className="w-full bg-gray-700/30 h-2 rounded-full overflow-hidden">
                    <motion.div
                      className="h-2 bg-[#4A90E2]"
                      custom={skill.level}
                      initial="hidden"
                      whileInView="visible"
                      variants={barVariants}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
