import { Download } from "lucide-react";

export default function FloatingResumeButton() {
  return (
    <a
      href="/Aniket_Dhangar_Backend_NodeJs_Developer.pdf" // Path to your resume in public folder
      download="Aniket_Dhangar_Backend_NodeJs_Developer.pdf" // Default downloaded file name
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#4A90E2] hover:bg-[#357ABD] text-white font-semibold px-4 py-3 rounded-full shadow-lg transition-all duration-300 cursor-pointer"
      title="Download Resume"
      
    >
      <Download size={20} />
      Resume
    </a>
  );
}
