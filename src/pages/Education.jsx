import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "North Maharashtra University",
    year: "2023 - 2025",
    details: [
      "Specialization in Full Stack Development",
      "Projects in MERN stack, React, Node.js, MongoDB",
      "Advanced study of algorithms and database systems",
    ],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Institute of Management and Research, Jalgaon",
    year: "2020 - 2023",
    details: [
      "Focused on software development and programming",
      "Completed projects in JavaScript and Node.js",
      "Participated in coding competitions and workshops",
    ],
  },
  // {
  //   degree: "Full Stack MERN Development Course",
  //   institute: "Technowiet Softwares, Jalgaon",
  //   year: "2022 - 2023",
  //   details: [
  //     "Hands-on training in MERN stack",
  //     "Developed real-world projects including e-commerce and CRM apps",
  //     "Learned Redux Toolkit, Tailwind CSS, and JWT Authentication",
  //   ],
  // },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institute: "SVKM MJ College, Jalgaon",
    year: "2018",
    details: [
      "Completed Science stream with Computer Science",
      "Active participation in school tech and coding events",
      "Strong foundation in mathematics and logical thinking",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institute: "Bhagirath English School, Jalgaon",
    year: "2018 - 2020",
    details: [
      "Completed basic education with good academic record",
      "Developed interest in computers and programming",
      "Participated in science and math competitions",
    ],
  },
];

const glassCard = "backdrop-blur-md shadow-xl rounded-lg border border-gray-700/30 bg-[#0A1A2F]/60 hover:bg-[#0A1A2F]/70 transition-all duration-300";

export default function Education() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 pt-20 ">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12">
        My Education
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className={glassCard + " p-6 flex flex-col"}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl text-white font-semibold mb-2">{edu.degree}</h3>
            <p className="text-white/80 text-sm mb-1">{edu.institute}</p>
            <p className="text-white/60 text-xs mb-4">{edu.year}</p>
            <ul className="list-disc list-inside text-white/70 text-sm flex flex-col gap-1">
              {edu.details.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
