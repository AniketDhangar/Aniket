import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Backend Developer",
    "Frontend Developer",
  ];
  
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect logic
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentText = roles[currentRole];

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentRole((currentRole + 1) % roles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentRole, roles]);

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 1, ease: "easeOut" }
    },
  };

  // Sparkle animation variants
  const sparkleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: [0, 1, 0], 
      scale: [0, 1.5, 0], 
      transition: { duration: 1.5, repeat: Infinity, repeatDelay: 2 }
    },
  };

  // Icon animation variants
  const iconVariants = {
    hover: { 
      scale: 1.2, 
      rotate: 10, 
      transition: { duration: 0.3, ease: "easeOut" }
    },
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center p-6 pt-0 bg-gradient-to-br from-black via-[#0A1A2F] to-[#0A1A2F] overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 z-0">
        <div className="stars animate-twinkle"></div>
        <div className="stars stars2 animate-twinkle2"></div>
        <div className="stars stars3 animate-twinkle3"></div>
      </div>

      {/* Sparkle Effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#4A90E2] rounded-full"
        variants={sparkleVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-[#4A90E2] rounded-full"
        variants={sparkleVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-5 h-5 bg-[#4A90E2] rounded-full"
        variants={sparkleVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 sm:gap-12 w-full max-w-7xl mx-auto px-4">
        {/* Text Content */}
        <motion.div
          className="text-center md:text-left max-w-xl w-full"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Hey, I'm <div className="mt-3 text-[#4A90E2]">Aniket Dhangar</div>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-white/90 mb-6 min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem]">
            <AnimatePresence>
              <motion.span
                key={currentRole}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                {displayedText}
                <span className="animate-blink">|</span>
              </motion.span>
            </AnimatePresence>
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            Building innovative, scalable, and user-centric web applications with the MERN stack. 
            Passionate about creating seamless digital experiences that shine in the tech universe.
          </p>
          <motion.a
            href="#projects-section"
            className="mt-6 sm:mt-8 inline-block px-6 sm:px-8 py-2 sm:py-3 bg-[#0A1A2F]/80 backdrop-blur-md border border-[#4A90E2]/50 rounded-full text-white font-medium hover:bg-[#4A90E2] hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.a>
          {/* Social Media Icons */}
          <div className="mt-4 flex justify-center md:justify-start gap-4">
            <motion.a
              href="https://www.linkedin.com/in/aniket-dhangar-b59603267/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4A90E2] transition-colors duration-300"
              variants={iconVariants}
              whileHover="hover"
              aria-label="LinkedIn Profile"
            >
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.028-3.06-1.867-3.06-1.867 0-2.152 1.458-2.152 2.966v5.698h-3v-11h2.879v1.502h.041c.401-.757 1.379-1.557 2.837-1.557 3.03 0 3.592 1.995 3.592 4.592v6.465z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://github.com/AniketDhangar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4A90E2] transition-colors duration-300"
              variants={iconVariants}
              whileHover="hover"
              aria-label="GitHub Profile"
            >
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Developer Image (Hidden on Mobile) */}
      <motion.div
  className="relative hidden md:block mx-auto"
  initial="hidden"
  animate="visible"
  variants={imageVariants}
>
  <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#4A90E2]/50 shadow-2xl transition-transform duration-500 hover:scale-105">
    <img
      src="/new.jpg"
      alt="Aniket Dhangar - Developer"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-[#0A1A2F]/20 backdrop-blur-xs"></div>
  </div>

  {/* Floating Orbit Animation */}
  <div className="absolute inset-0">
    <motion.div
      className="w-4 h-4 rounded-full absolute"
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        repeat: Infinity,
        duration: 8,
        ease: "linear",
      }}
      style={{
        top: "50%",
        left: "50%",
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  </div>
</motion.div>

      </div>

      {/* Custom CSS for Starry Background, Sparkles, and Animations */}
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
        .animate-orbit {
          animation: orbit 10s linear infinite;
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(150px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
        }
        .animate-blink {
          animation: blink 0.5s step-end infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}