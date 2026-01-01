import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full p-6 bg-[#0A1A2F] text-gray-200 border-t border-gray-700/30">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-6 text-center md:text-left">

        {/* Portfolio info */}
        <div>
          <p className="font-semibold text-lg text-white">Aniket Dhangar</p>
          <p className="text-sm text-white/70">Designed & built by me</p>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-2 text-sm text-white/80">
          <a
            href="mailto:21aniketdhangar13@gmail.com"
            className="flex items-center gap-2 hover:text-[#4A90E2] transition"
          >
            <Mail size={16} />
            21aniketdhangar13@gmail.com
          </a>

          <a
            href="tel:+917875942104"
            className="flex items-center gap-2 hover:text-[#4A90E2] transition"
          >
            <Phone size={16} />
            +91 78759 42104
          </a>
        </div>

        {/* Social links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/AniketDhangar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[#4A90E2] transition"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/aniket-dhangar-b59603267/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#4A90E2] transition"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Aniket Dhangar. All rights reserved.
      </div>
    </footer>
  );
}
