import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Education from "../pages/Education";
import Contact from "../pages/Contact";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import FloatingResumeButton from "./FloatingResumeButton";

// Core palette
const black = "bg-black";
const navyBlue = "bg-[#0A1A2F]";
const whiteText = "text-white";

// Glass base
const glassBase = "backdrop-blur-md shadow-xl rounded-lg border border-gray-700/30 transition-all duration-300";
const glassNavy = `${glassBase} bg-[#0A1A2F]/60 hover:bg-[#0A1A2F]/70`;

function Navbar({ navItems, onNav, activeSection }) {
  return (
    <nav className={`flex flex-wrap justify-center gap-4 sm:gap-6 px-4 sm:px-8 py-3 sm:py-4 ${glassNavy} fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] max-w-4xl z-50 rounded-full`}>
      {navItems.map((item) => (
        <Button
          key={item.id}
          variant="ghost"
          className={`
            ${whiteText} font-medium text-sm sm:text-base tracking-wide 
            hover:text-[#4A90E2] transition-colors duration-300 relative group px-2 sm:px-4 
            active:scale-95 bubbly-text
            ${activeSection === item.id ? 'bg-[#4A90E2]/20 text-[#4A90E2]' : ''}
          `}
          onClick={() => onNav(item.id)}
        >
          <span className="relative z-10">{item.label}</span>
          <span className={`
            absolute bottom-0 left-0 w-0 h-0.5 bg-[#4A90E2] 
            group-hover:w-full transition-all duration-300
            ${activeSection === item.id ? 'w-full' : ''}
          `}></span>
        </Button>
      ))}
    </nav>
  );
}

const navItems = [
  { id: "home-section", label: "Home" },
  { id: "about-section", label: "About" },
  { id: "experience-section", label: "Experience" },
  { id: "projects-section", label: "Projects" },
  { id: "skills-section", label: "Skills" },
  { id: "education-section", label: "Education" },
  { id: "contact-section", label: "Get in touch" },
];

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home-section");

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  // Close sidebar on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          const windowTop = window.scrollY;
          if (windowTop + top <= scrollPosition && windowTop + bottom >= scrollPosition) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setSidebarOpen(false);
      setActiveSection(id);
    }
  };

  const sidebar = (
    <aside
      className={`fixed top-0 left-0 z-50 w-64 h-full p-4 sm:p-6 flex flex-col gap-4 ${glassNavy} ${navyBlue} transform transition-transform duration-500 md:hidden pt-[env(safe-area-inset-top)] pointer-events-auto ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <button
        className={`${whiteText} self-end text-2xl sm:text-3xl hover:text-[#4A90E2] transition-colors duration-300 active:scale-95 pointer-events-auto bg-transparent p-2 rounded-full`}
        onClick={() => {
          console.log("Close button clicked");
          setSidebarOpen(false);
        }}
        aria-label="Close sidebar"
      >
        &times;
      </button>
      {navItems.map((item) => (
        <Button
          key={item.id}
          variant="ghost"
          className={`
            ${whiteText} text-left font-medium text-base sm:text-lg tracking-wide 
            hover:text-[#4A90E2] transition-colors duration-300 active:scale-95 
            pointer-events-auto bubbly-text
            ${activeSection === item.id ? 'bg-[#4A90E2]/20 text-[#4A90E2]' : ''}
          `}
          onClick={() => handleNav(item.id)}
        >
          <span className="relative z-10">{item.label}</span>
          <span className={`
            absolute bottom-0 left-0 w-0 h-0.5 bg-[#4A90E2] 
            ${activeSection === item.id ? 'w-full' : 'group-hover:w-full'} 
            transition-all duration-300
          `}></span>
        </Button>
      ))}
    </aside>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-[#0A1A2F] to-[#0A1A2F]">
      {/* Navbar (desktop) */}
      <div className="hidden md:block">
        <Navbar navItems={navItems} onNav={handleNav} activeSection={activeSection} />
      </div>

      {/* Hamburger for mobile */}
      {!sidebarOpen && (
        <Button
          variant="ghost"
          className={`md:hidden p-2 sm:p-3 text-xl sm:text-2xl fixed top-4 left-4 z-50 ${whiteText} rounded-full border border-[#0A1A2F]/50 hover:bg-[#0A1A2F]/30 transition-all duration-300 active:scale-95 pointer-events-auto`}
          onClick={() => {
            console.log("Hamburger button clicked");
            setSidebarOpen(true);
          }}
          aria-label="Open sidebar"
          style={{ top: "calc(1rem + env(safe-area-inset-top))" }}
        >
          &#9776;
        </Button>
      )}

      {/* Sidebar (mobile) */}
      {sidebar}

      {/* Dark overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 md:hidden pointer-events-auto"
          onClick={() => {
            console.log("Overlay clicked");
            setSidebarOpen(false);
          }}
        />
      )}

      {/* Page content */}



   
          <main className="flex-1 w-full text-white ">
            <FloatingResumeButton />
            <section
              id="home-section"
              className="w-full h-screen flex items-center justify-center "
            >
              <Home />
            </section>
            <section
              id="about-section"
              className="w-full min-h-screen flex items-center justify-center"
            >
              <About />
            </section>
            <section
              id="experience-section"
              className="w-full min-h-screen flex items-center justify-center py-8 sm:py-12"
            >
              <Experience />
            </section>
            <section
              id="projects-section"
              className="w-full min-h-screen flex items-center justify-center py-8 sm:py-12"
            >
              <Projects />
            </section>
            <section
              id="skills-section"
              className="w-full min-h-screen flex items-center justify-center py-8 sm:py-12"
            >
              <Skills />
            </section>
            <section
              id="education-section"
              className="w-full min-h-screen flex items-center justify-center py-8 sm:py-12"
            >
              <Education />
            </section>
            <section
              id="contact-section"
              className="w-full min-h-screen flex items-center justify-center py-8 sm:py-12"
            >
              <Contact />
            </section>
            <Footer />
          </main>

    

      {/* Custom CSS for Bubbly Text Animation */}
      <style jsx>{`
        .bubbly-text {
          position: relative;
          overflow: hidden;
        }
        .bubbly-text:hover span {
          animation: bubbly 0.3s ease-in-out;
        }
        @keyframes bubbly {
          0% { transform: scale(1); filter: brightness(100%); }
          50% { transform: scale(1.1); filter: brightness(120%); }
          100% { transform: scale(1); filter: brightness(100%); }
        }
      `}</style>
    </div>
  );
}