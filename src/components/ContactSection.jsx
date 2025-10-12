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
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaYoutube,
} from "react-icons/fa";
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
    const response = await fetch('http://localhost:5000/send-email', {
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
      url: "https://github.com/yourusername",
      color: isDark ? "hover:text-gray-300" : "hover:text-gray-900",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-500",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/yourusername",
      color: "hover:text-sky-400",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/yourusername",
      color: "hover:text-pink-500",
    }
  ];

  return (
    <section
      id="contact"
      className={`relative py-20 md:py-32 overflow-hidden`}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="contactGrid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke={isDark ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.08)"}
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactGrid)" />
        </svg>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute top-20 right-10 text-6xl opacity-10 ${
          isDark ? "text-blue-400" : "text-blue-600"
        }`}
      >
        ✉️
      </motion.div>

      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute bottom-32 left-10 text-5xl opacity-10 ${
          isDark ? "text-purple-400" : "text-purple-600"
        }`}
      >
        💬
      </motion.div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
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
              className={isDark ? "text-blue-400" : "text-blue-600"}
              size={32}
            />
            <span
              className={`text-sm md:text-base font-semibold uppercase tracking-wider ${
                isDark ? "text-blue-400" : "text-blue-600"
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
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Let's Work{" "}
            <span
              className={
                isDark
                  ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
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
              isDark ? "text-gray-300" : "text-gray-600"
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
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`group flex items-center gap-4 p-4 rounded-2xl transition-all ${
                    isDark
                      ? "bg-gray-800/30 backdrop-blur-md border border-gray-700/50 hover:border-blue-500/50"
                      : "bg-white/50 backdrop-blur-md border border-gray-200 hover:border-blue-400"
                  } shadow-lg hover:shadow-xl`}
                >
                  <div
                    className={`p-3 rounded-xl transition-all ${
                      isDark
                        ? "bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white"
                        : "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                    }`}
                  >
                    <info.icon size={24} />
                  </div>
                  <div>
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
              className={`p-6 rounded-2xl ${
                isDark
                  ? "bg-gray-800/30 backdrop-blur-md border border-gray-700/50"
                  : "bg-white/50 backdrop-blur-md border border-gray-200"
              } shadow-lg`}
            >
              <h3
                className={`text-xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Connect With Me
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex items-center justify-center p-4 rounded-xl transition-all ${
                      isDark
                        ? "bg-gray-700/50 text-gray-300 hover:bg-gray-700"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    } ${social.color} shadow-md hover:shadow-lg`}
                    title={social.name}
                  >
                    <social.icon size={24} />
                  </motion.a>
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
              className={`p-8 rounded-3xl ${
                isDark
                  ? "bg-gray-800/40 backdrop-blur-xl border border-gray-700/50"
                  : "bg-white/60 backdrop-blur-xl border border-gray-200"
              } shadow-2xl`}
            >
              {/* Name Input */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? "text-gray-200" : "text-gray-700"
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
                  className={`w-full px-4 py-3 rounded-xl transition-all ${
                    isDark
                      ? "bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
                      : "bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
                  } outline-none`}
                  placeholder="Dharamra Pd Yadav"
                />
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? "text-gray-200" : "text-gray-700"
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
                  className={`w-full px-4 py-3 rounded-xl transition-all ${
                    isDark
                      ? "bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
                      : "bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
                  } outline-none`}
                  placeholder="dpy123@gamil.com"
                />
              </div>

    
              {/* Message Textarea */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? "text-gray-200" : "text-gray-700"
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
                  className={`w-full px-4 py-3 rounded-xl transition-all resize-none ${
                    isDark
                      ? "bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
                      : "bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
                  } outline-none`}
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={formStatus.loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all ${
                  formStatus.loading
                    ? "bg-gray-500 cursor-not-allowed"
                    : isDark
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                } shadow-lg hover:shadow-2xl`}
              >
                {formStatus.loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <HiPaperAirplane size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

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
