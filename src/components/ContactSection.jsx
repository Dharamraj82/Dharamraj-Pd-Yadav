import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
} from "react-icons/hi";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useTheme } from "../context/ThemeProvider";

function ContactSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  setFormStatus({ loading: true, success: false, error: false });

  try {
    const response = await fetch('https://taking-response-from-portfolio.vercel.app/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Important for CORS with credentials
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (response.ok && data.success) {
      setFormStatus({ loading: false, success: true, error: false });
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: false });
      }, 3000);
    } else {
      throw new Error(data.error || 'Failed to send email');
    }
  } catch (err) {
    console.error('Error:', err);
    setFormStatus({ 
      loading: false, 
      success: false, 
      error: true,
      message: err.message 
    });
  }
};


  // Contact Information
  const contactInfo = [
    {
      icon: HiMail,
      title: "Email",
      value: "dpy9572@gmail.com.com",
      link: "mailto:dpy9572@gmail.com.com",
    },
    {
      icon: HiPhone,
      title: "Phone",
      value: "+91 82718 2796",
      link: "tel:+918271822796",
    },
    {
      icon: HiLocationMarker,
      title: "Location",
      value: "Jharkhand, India",
      link: null,
    },
  ];

  // Social Media Links
  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/dharamraj82",
      hoverClass: "hover:from-gray-700 hover:to-black hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/dharamraj-prasad-yadav/",
      hoverClass: "hover:from-[#0A66C2] hover:to-[#004182] hover:text-white",
    },
    {
      name: "X (Twitter)",
      icon: BsTwitterX,
      url: "https://x.com/Dharamrajpdyadv",
      hoverClass: "hover:from-gray-700 hover:to-black hover:text-white",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/dharamraj_pd_yadav/",
      hoverClass: "hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white",
    }
  ];

  return (
    <section
      id="contact"
      className={`relative py-12`}
    >
      <div className="relative max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <HiMail
              className={isDark ? "text-primary" : "text-primary"}
              size={32}
            />
            <span
              className={`text-sm md:text-base font-semibold uppercase tracking-wider ${
                isDark ? "text-primary" : "text-primary"
              }`}
            >
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Let's Work{" "}
            <span
              className={
                isDark
                  ? "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              }
            >
              Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-base md:text-lg lg:text-xl max-w-2xl mx-auto ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Have a project in mind? Let's create something amazing together.
            Drop me a message!
          </motion.p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative overflow-hidden flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 ${
                    isDark
                      ? "bg-gradient-to-b from-slate-800 to-slate-900 border-t border-white/20 border-x border-white/5 border-b-0 shadow-[0_5px_0_rgba(30,41,59,1),_0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_3px_0_rgba(30,41,59,1),_0_15px_30px_rgba(0,0,0,0.5)]"
                      : "bg-gradient-to-b from-white to-slate-50 border-t border-white/80 border-x border-slate-200 border-b-0 shadow-[0_5px_0_rgba(203,213,225,1),_0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_3px_0_rgba(203,213,225,1),_0_15px_30px_rgba(0,0,0,0.2)]"
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-2xl pointer-events-none"></div>
                  
                  <div
                    className={`relative overflow-hidden z-10 flex items-center justify-center shrink-0 w-12 h-12 rounded-xl transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-2 ${
                      isDark
                        ? "bg-gradient-to-b from-slate-700 to-slate-800 text-primary border-t border-white/10 border-x border-white/5 border-b-0 shadow-[0_3px_0_rgba(2,6,23,1),_0_5px_10px_rgba(0,0,0,0.5)] group-hover:shadow-[0_7px_0_rgba(2,6,23,1),_0_15px_20px_rgba(0,0,0,0.6)]"
                        : "bg-gradient-to-b from-white to-slate-50 text-primary border-t border-slate-100 border-x border-slate-200 border-b-0 shadow-[0_3px_0_rgba(148,163,184,1),_0_5px_10px_rgba(0,0,0,0.1)] group-hover:shadow-[0_7px_0_rgba(148,163,184,1),_0_15px_20px_rgba(0,0,0,0.15)]"
                    }`}
                  >
                    <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/10 to-transparent rounded-t-xl pointer-events-none"></div>
                    <info.icon size={24} className="relative z-10" />
                  </div>
                  <div className="relative z-10">
                    <p
                      className={`text-sm font-medium ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {info.title}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className={`text-base font-semibold transition-colors ${
                          isDark
                            ? "text-white hover:text-blue-400"
                            : "text-gray-900 hover:text-blue-600"
                        }`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p
                        className={`text-base font-semibold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`p-8 rounded-3xl glass shadow-[0_0_15px_rgba(99,102,241,0.1)]`}
            >
              <h3
                className={`text-xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Connect With Me
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative overflow-hidden flex items-center justify-center shrink-0 w-14 h-14 mx-auto aspect-square rounded-full transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 hover:-translate-y-2 hover:z-10 active:scale-95 ${social.hoverClass} ${
                      isDark
                        ? "bg-gradient-to-b from-slate-700 to-slate-800 text-gray-300 border-t border-white/20 border-x border-white/5 shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                        : "bg-gradient-to-b from-slate-100 to-slate-200 text-gray-600 border-t border-white/80 border-x border-white/40 shadow-[0_4px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
                    }`}
                    title={social.name}
                  >
                    <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-full pointer-events-none"></div>
                    <social.icon size={24} className={`relative z-10 transition-colors group-hover:text-white`} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className={`p-8 rounded-3xl glass shadow-[0_0_20px_rgba(99,102,241,0.15)]`}
            >
              {/* Name Input */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-5 py-4 rounded-2xl transition-all ${
                    isDark
                      ? "bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/50"
                      : "bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/50"
                  } outline-none shadow-inner`}
                  placeholder="Dharamraj Prasad Yadav"
                />
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-5 py-4 rounded-2xl transition-all ${
                    isDark
                      ? "bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/50"
                      : "bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/50"
                  } outline-none shadow-inner`}
                  placeholder="dpy123@gmail.com"
                />
              </div>

    
              {/* Message Textarea */}
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`w-full px-5 py-4 rounded-2xl transition-all resize-none ${
                    isDark
                      ? "bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/50"
                      : "bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/50"
                  } outline-none shadow-inner`}
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus.loading}
                className={`group relative overflow-hidden w-full py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                  formStatus.loading
                    ? "bg-slate-500 cursor-not-allowed"
                    : "hover:translate-y-[2px] active:translate-y-[5px] active:shadow-none " + (isDark
                      ? "bg-gradient-to-b from-primary/90 to-primary/80 text-white border-t border-white/40 border-x border-white/20 border-b-0 shadow-[0_5px_0_rgba(194,65,12,0.8),_0_10px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_3px_0_rgba(194,65,12,0.8),_0_5px_10px_rgba(0,0,0,0.3)]"
                      : "bg-gradient-to-b from-primary/90 to-primary/80 text-white border-t border-white/40 border-x border-white/20 border-b-0 shadow-[0_5px_0_rgba(194,65,12,0.8),_0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_3px_0_rgba(194,65,12,0.8),_0_5px_10px_rgba(0,0,0,0.15)]"
                    )
                }`}
              >
                {!formStatus.loading && <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none"></div>}
                
                {formStatus.loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="relative z-10 w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                    />
                    <span className="relative z-10">Sending...</span>
                  </>
                ) : (
                  <>
                    <HiPaperAirplane size={20} className="relative z-10" />
                    <span className="relative z-10" style={{ textShadow: isDark ? '0 1px 2px rgba(0,0,0,0.4)' : 'none' }}>Send Message</span>
                  </>
                )}
              </button>

              {/* Success/Error Messages */}
              {formStatus.success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-400 text-center font-medium"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {formStatus.error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-400 text-center font-medium"
                >
                  ✗ Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
