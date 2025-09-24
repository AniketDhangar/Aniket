import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full p-6 bg-[#0A1A2F] text-gray-200 text-center border-t border-gray-700/30">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto gap-4">
        {/* Portfolio info */}
        <div className="mb-2 md:mb-0">
          <span className="font-semibold text-lg text-white">Aniket Dhangar</span>
          <p className="text-sm text-white/70">Designed & built by me</p>
        </div>

        {/* Social links */}
        <div className="flex space-x-4 mb-2 md:mb-0">
          <a
            href="mailto:21aniketdhangar13@gmail.com"
            aria-label="Email"
            className="hover:text-[#4A90E2] transition-colors duration-300"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://github.com/AniketDhangar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[#4A90E2] transition-colors duration-300"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/aniket-dhangar-b59603267/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#4A90E2] transition-colors duration-300"
          >
            <Linkedin size={22} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-white/60">
          &copy; {new Date().getFullYear()} Aniket Dhangar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
