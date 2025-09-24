import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

// Experience data
const experiences = [
  {
    title: "Junior Web Developer",
    company: "Technowiet Softwares, Jalgaon",
    period: "May-2024 – Present",
    responsibilities: [
      "Developed full-stack web applications using MERN stack (React.js, Node.js, Express, MongoDB, TypeScript).",
      "Built SchoolSynk: a large-scale, AI-powered school management system with multi-role dashboards (Admin, Teacher, Student, Parent).",
      "Integrated OpenAI API for AI-powered assistant features to answer queries and automate workflows.",
      "Implemented real-time chat and notification systems using Socket.IO for improved communication.",
      "Designed Photo Studio CRM supporting multi-tenancy, customer management, orders, payments, services, and expenses.",
      "Implemented secure JWT authentication, Google OAuth, and role-based access control.",
      "Added PDF/Excel export, invoice generation, report history, and automated email/SMS notifications.",
      "Deployed applications on Ubuntu VPS with Nginx and PM2, using Git for version control and CI/CD pipelines.",
    ],
  },
];

// Key Achievements data
const achievements = [
  "Delivered scalable production-ready systems serving multiple studios and schools with real-time features.",
  "Optimized backend APIs and database queries for better performance and scalability.",
  "Implemented dynamic PDF/Excel generation with custom branding for invoices and reports.",
  "Integrated AI-powered workflows using OpenAI API to improve user experience.",
  "Implemented secure authentication and multi-role access for complex applications.",
  "Automated deployment pipelines using Git, PM2, and Nginx, ensuring reliable delivery.",
];

export default function Experience() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center py-6 pt-20 overflow-hidden">
     
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12">
        My Experience
      </h2>
      {/* Starry Background */}
      <div className="absolute inset-0 z-0">
        <div className="stars animate-twinkle"></div>
        <div className="stars stars2 animate-twinkle2"></div>
        <div className="stars stars3 animate-twinkle3"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Section: Introduction and Key Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Introduction Box */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: 0.2 }}
          >
            <Card className={`${glassNavy} h-full`}>
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl text-white text-center">
                  My <span className="text-[#4A90E2]">Journey</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
             <p className="text-sm sm:text-base text-white/80 leading-relaxed">
  I’m a passionate Full Stack MERN Developer dedicated to crafting innovative, scalable, and secure web solutions. 
  At Technowiet Softwares, I have built production-ready applications including SchoolSynk — a multi-role, AI-powered school management system, 
  and a multi-tenant Photo Studio CRM. My work involves React.js, Node.js, TypeScript, MongoDB, real-time chat, OpenAI integration, 
  PDF/Excel exports, and cloud deployment using Nginx and PM2, all focused on delivering seamless user experiences.
</p>

              </CardContent>
            </Card>
          </motion.div>

          {/* Key Achievements Box */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: 0.4 }}
          >
            <Card className={`${glassNavy} h-full`}>
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl text-white text-center">
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm sm:text-base text-white/80 space-y-2">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Work Experience Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ delay: 0.6 }}
        >
          <Card className={`${glassNavy}`}>
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl text-white text-center">
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
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
                      {exp.title} | {exp.company}
                    </h3>
                    <p className="text-sm text-white/60 italic">{exp.period}</p>
                    <ul className="list-disc list-inside text-sm sm:text-base text-white/80 mt-2 space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
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
          box-shadow: 
            50px 100px #ffffff22,
            150px 300px #ffffff33,
            300px 200px #ffffff22,
            500px 400px #ffffff33,
            700px 150px #ffffff22,
            900px 350px #ffffff33,
            1100px 250px #ffffff22,
            1300px 450px #ffffff33;
        }
        .stars2 {
          box-shadow: 
            100px 200px #ffffff33,
            200px 400px #ffffff22,
            400px 300px #ffffff33,
            600px 500px #ffffff22,
            800px 250px #ffffff33,
            1000px 450px #ffffff22,
            1200px 350px #ffffff33;
        }
        .stars3 {
          box-shadow: 
            75px 150px #ffffff22,
            175px 350px #ffffff33,
            350px 250px #ffffff22,
            550px 450px #ffffff33,
            750px 200px #ffffff22,
            950px 400px #ffffff33,
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
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}