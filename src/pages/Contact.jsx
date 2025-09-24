import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "" }); // type: success or error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: "", type: "" });

    emailjs
      .send(
        "service_5aaeu8c",   // Your Service ID
        "template_ywcaqhr",  // Your Template ID
        formData,
        "DvJGNA_d9KYCqXLf0"  // Your Public Key
      )
      .then(() => {
        setStatus({ message: "Message sent successfully!", type: "success" });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        setStatus({ message: "Failed to send message. Try again.", type: "error" });
      })
      .finally(() => setLoading(false));
  };

  const glassCard =
    "backdrop-blur-md shadow-xl rounded-lg border border-gray-700/30 bg-[#0A1A2F]/60 hover:bg-[#0A1A2F]/70 transition-all duration-300";

  const inputClass =
    "w-full p-3 mb-4 rounded-lg bg-[#1A2A4A]/50 border border-gray-600 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#4A90E2] transition";

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 pt-20 bg-gradient-to-br from-black via-[#0A1A2F] to-[#1A2A4A]">
      <motion.div
        className={glassCard + " w-full max-w-lg p-8"}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-extrabold text-white text-center mb-6 bg-gradient-to-r from-[#4A90E2]/50 to-white/10 bg-clip-text text-transparent">
          Get in touch with me
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={inputClass}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={inputClass}
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className={inputClass}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`mt-2 p-3 rounded-lg text-white font-semibold transition-colors duration-300 ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-[#4A90E2] hover:bg-[#357ABD]"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Status message */}
        {status.message && (
          <motion.p
            className={`mt-4 text-center ${
              status.type === "success" ? "text-green-400" : "text-red-400"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {status.message}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
    