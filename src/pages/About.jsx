import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Monitor, Server } from "lucide-react";

// Core palette
const glassNavy =
  "backdrop-blur-md shadow-xl rounded-lg border border-gray-700/30 bg-[#0A1A2F]/60 hover:bg-[#0A1A2F]/70 transition-all duration-300";

// Animation variants
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Education Data
const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "North Maharashtra University, Jalgaon",
    year: "2023 - 2025",
    description:
      "Completed in July 2025 with a CGPA of 6.52, focusing on full-stack development, scalable architectures, and software engineering practices.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Institute of Management and Research, Jalgaon",
    year: "2020 - 2023",
    description:
      "Graduated with a strong foundation in programming, databases, and web development.",
  },
  {
    degree: "Higher Secondary Certificate (HSC) – Science",
    institution: "SVKM’s M. J. College, Jalgaon (Nashik Board)",
    year: "2018 - 2020",
    description:
      "Secured 63.80%, specializing in science with focus on mathematics and computer science.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Bhagirath English School, Jalgaon (Nashik Board)",
    year: "2018",
    description: "Achieved 82.80% with distinction in core subjects.",
  },
];

// Skills Data (categorized)
const categorizedSkills = {
  Frontend: [
    "React.js",
    "Redux Toolkit",
    "Material UI",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "REST API",
    "JWT Authentication",
    "Socket.IO",
    "Sequelize ORM",
  ],
  Databases: ["MongoDB", "MySQL", "Mongoose", "Database Design"],
  Tools: [
    "Git & GitHub",
    "PM2",
    "Nginx",
    "Ubuntu VPS",
    "PDF/Excel Export",
    "Google OAuth",
    "Email/SMS Integration",
  ],
};

export default function About() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center py-6 pt-20   overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12">
       Want to Know ?
      </h2>
    
      {/* Starry Background */}
      <div className="absolute inset-0 z-0">
        <div className="stars animate-twinkle"></div>
        <div className="stars stars2 animate-twinkle2"></div>
        <div className="stars stars3 animate-twinkle3"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
    
        {/* Top Section: Introduction and Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-12">
          {/* Introduction Box */}
     <motion.div
  initial="hidden"
  animate="visible"
  variants={cardVariants}
  whileHover="hover"
  className="w-full max-w-md mx-auto"
>
  <Card className={`${glassNavy} h-full`}>
    <CardHeader>
      <CardTitle className="text-2xl sm:text-3xl text-white text-center mb-2">
        About <span className="text-[#4A90E2]">Me</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-4">
      <p className="text-sm sm:text-base text-white/80 leading-relaxed">
        I’m <span className="text-[#4A90E2] font-semibold">Aniket Dhangar</span>, a Full Stack MERN Developer with
        hands on experience in building scalable, secure, and production-ready web applications. I specialize in
        React.js, Node.js, Express, MongoDB, and TypeScript — focusing on clean architecture, authentication systems,
        real-time apps, and cloud-ready solutions.
      </p>

      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="flex items-center gap-2 text-white/80">
          <Code2 className="w-5 h-5 text-[#4A90E2]" /> Frontend: React.js, TypeScript
        </div>
        <div className="flex items-center gap-2 text-white/80">
          <Server className="w-5 h-5 text-[#4A90E2]" /> Backend: Node.js, Express
        </div>
        <div className="flex items-center gap-2 text-white/80">
          <Database className="w-5 h-5 text-[#4A90E2]" /> Database: MongoDB, Mongoose
        </div>
        <div className="flex items-center gap-2 text-white/80">
          <Monitor className="w-5 h-5 text-[#4A90E2]" /> Tools: Redux Toolkit, Tailwind CSS, Material UI
        </div>
      </div>
    </CardContent>
  </Card>
</motion.div>


          {/* Skills Box */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: 0.4 }}
          >
            <Card className={`${glassNavy} h-full`}>
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl text-white text-center">
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(categorizedSkills).map(([category, items], idx) => (
                    <div key={idx}>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#4A90E2] mb-2">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill, index) => (
                          <motion.span
                            key={index}
                            className="text-sm text-white/80 bg-[#4A90E2]/20 px-2 py-1 rounded"
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.5 + index * 0.1 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ delay: 0.6 }}
        >
          <Card className={`${glassNavy}`}>
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl text-white text-center">
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.7 + index * 0.2 }}
                    className="border-l border-[#4A90E2]/40 pl-4 relative"
                  >
                    {/* Timeline Dot */}
                    <span className="absolute left-[-8px] top-2 w-3 h-3 rounded-full bg-[#4A90E2] shadow-lg shadow-[#4A90E2]/50"></span>
                    <h3 className="text-lg sm:text-xl text-white font-semibold">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-[#4A90E2]/90 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-white/60 italic">{edu.year}</p>
                    <p className="text-sm text-white/70 mt-2">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Custom CSS for Starry Background */}
      <style jsx>{`
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          box-shadow: 50px 100px #ffffff22, 150px 300px #ffffff33,
            300px 200px #ffffff22, 500px 400px #ffffff33,
            700px 150px #ffffff22, 900px 350px #ffffff33,
            1100px 250px #ffffff22, 1300px 450px #ffffff33;
        }
        .stars2 {
          box-shadow: 100px 200px #ffffff33, 200px 400px #ffffff22,
            400px 300px #ffffff33, 600px 500px #ffffff22,
            800px 250px #ffffff33, 1000px 450px #ffffff22,
            1200px 350px #ffffff33;
        }
        .stars3 {
          box-shadow: 75px 150px #ffffff22, 175px 350px #ffffff33,
            350px 250px #ffffff22, 550px 450px #ffffff33,
            750px 200px #ffffff22, 950px 400px #ffffff33,
            1150px 300px #ffffff22;
        }
        .animate-twinkle {
          animation: twinkle 4s infinite;
        }
        .animate-twinkle2 {
          animation: twinkle 5s infinite 1s;
        }
        .animate-twinkle3 {
          animation: twinkle 6s infinite 2s;
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}