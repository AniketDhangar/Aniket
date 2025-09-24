import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GitBranch, ExternalLink } from "lucide-react";

const glassNavy =
  "backdrop-blur-md shadow-xl rounded-lg border border-gray-700/30 bg-[#0A1A2F]/60 hover:bg-[#0A1A2F]/70 transition-all duration-300";
const glassLink =
  "inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#0A1A2F]/40 backdrop-blur-md hover:bg-[#0A1A2F]/70 transition-all duration-300 text-[#4A90E2] hover:text-white text-sm";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
  hover: { scale: 1.03, boxShadow: "0px 15px 35px rgba(0,0,0,0.4)", transition: { duration: 0.3 } },
};

const projects = [
  {
    name: "SchoolSynk",
    description: "AI-powered school management system with multi-role dashboards and real-time notifications.",
    bullets: [
      "Multi-role dashboards for Admin, Teacher, Student, and Parent",

      "AI assistant integration for automated guidance",
      "Secure authentication with JWT and OTP verification",
      "Google OAuth login and password reset functionality",
    ],
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "TypeScript", "Socket.IO", "OpenAI API", "JWT Authentication", "Tailwind CSS"],
    github: "https://github.com/AniketDhangar",
    live: null,
    image: "/src/assets/school.jpg",
  },
  {
    name: "Photo Studio CRM",
    description: "Multi-tenant CRM for managing customers, orders, services, payments, and reports.",
    bullets: [
      "Multi-tenant system for multiple studios",
      "PDF/Excel export for invoices and reports",
      "Two-level admin system (Super Admin & Studio Admin)",
      "Real-time alerts for payments and orders",
      "Dashboard with revenue and service breakdown",
    ],
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Mongoose", "Material UI", "PDF/Excel Export", "JWT Authentication"],
    github: "https://github.com/AniketDhangar/CRM",
    live: null,
    image: "/src/assets/photo.png",
  },
  {
    name: "Nirmal Crop Manual",
    description: "Mobile app for farmers providing crop guidance, solutions, and tracking.",
    bullets: [
      "Crop guidance and solution recommendations",
      "Track crops and schedules",
      "Secure authentication with JWT",
      "Offline-friendly and mobile optimized",
      "Integration with MySQL and Sequelize ORM",
    ],
    technologies: ["Node.js", "Express", "MySQL", "Sequelize ORM", "JWT Authentication"],
    github: "https://github.com/AniketDhangar/NodeAndSQL",
    live: "https://play.google.com/store/apps/details?id=com.ojasinfotech.nirmalcropmanual",
    image: "/src/assets/crop.png",
  },
  {
    name: "HVAC Services Portal",
    description: "Web portal for HVAC services, scheduling, and management.",
    bullets: [
      "Manage HVAC services, orders, and technicians",
      "Admin dashboard with service tracking",
      "Redux Toolkit for state management",
      "Secure login and role-based access",
      "Easy management of customer requests",
    ],
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Redux Toolkit", "Material UI"],
    github: "https://github.com/AniketDhangar/HVAC-Final",
    live: null,
    image: "/src/assets/hvac.png",
  },
  {
    name: "E-comzzzy",
    description: "Simple e-commerce website with Redux Toolkit for state management and Tailwind CSS UI.",
    bullets: [
      "Product listing, search, and filtering",
      "Redux Toolkit for cart and state management",
      "Secure checkout process",
      "Responsive UI with Tailwind CSS",
      "Lightweight and fast-loading front-end",
    ],
    technologies: ["React.js", "Redux Toolkit", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/AniketDhangar/E-comzzzy",
    live: null,
    image: "src/assets/Ecommerce.png",
  },
];

export default function Projects() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center  pt-20 overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 z-0">
        <div className="stars animate-twinkle"></div>
        <div className="stars stars2 animate-twinkle2"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center bg-white bg-clip-text text-transparent mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
              className="flex flex-col h-[700px] sm:h-[650px] xs:h-[600px]"
            >
              <Card className={`${glassNavy} flex flex-col h-full`}>
                {/* Image Section - 40% */}
                <motion.img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="w-full h-[40%] object-cover rounded-t-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Content Section - 60% */}
                <CardContent className="p-4 sm:p-6 flex flex-col justify-between h-[60%]">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl text-white mb-2">{project.name}</h3>
                    <p className="text-xs sm:text-sm text-white/80 mb-2 leading-relaxed">{project.description}</p>

                    <ul className="list-disc list-inside text-white/70 text-xs sm:text-sm mb-3 max-h-[120px] sm:max-h-[150px] overflow-y-auto">
                      {project.bullets.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>

                    <ul className="flex flex-wrap gap-2 mb-3 max-h-[100px] overflow-y-auto">
                      {project.technologies.map((tech, idx) => (
                        <li
                          key={idx}
                          className="px-2 py-1 bg-[#1A2A4A]/60 border border-gray-600 rounded-full text-white/80 text-[10px] sm:text-xs whitespace-nowrap"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={glassLink + " text-xs sm:text-sm"}
                      >
                        <GitBranch className="w-3 h-3 sm:w-4 sm:h-4" />
                        GitHub
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={glassLink + " text-xs sm:text-sm"}
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Star Animations */}
      <style jsx>{`
        .stars,
        .stars2 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
        }
        .stars {
          box-shadow: 50px 100px #ffffff22, 150px 300px #ffffff33, 300px 200px #ffffff22, 500px 400px #ffffff33;
        }
        .stars2 {
          box-shadow: 100px 200px #ffffff33, 200px 400px #ffffff22, 400px 300px #ffffff33, 600px 500px #ffffff22;
        }
        .animate-twinkle {
          animation: twinkle 4s infinite ease-in-out;
        }
        .animate-twinkle2 {
          animation: twinkle 5s infinite ease-in-out 1s;
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
