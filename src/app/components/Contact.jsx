"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "contact@vyomgarud.com",
      link: "mailto:contact@vyomgarud.com",
    },
    {
      icon: "📞",
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: "📍",
      title: "Location",
      value: "San Francisco, CA",
      link: "#",
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "GitHub", icon: "💻", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
  ];

  const quickLinks = [
    { name: "About Us", url: "#about" },
    { name: "Services", url: "#capabilities" },
    { name: "Portfolio", url: "#" },
    { name: "Careers", url: "#" },
    { name: "Blog", url: "#" },
    { name: "Privacy Policy", url: "#" },
  ];

  return (
    <footer className="relative bg-[#232323] overflow-hidden">
      {/* Contact Section */}
      <section className="relative py-20">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #ff7b00 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff7b00]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#ff7b00]/30 rounded-full bg-[#ff7b00]/5 mb-6">
                <span className="text-sm font-[family-name:var(--font-inter)] text-[#ff7b00] uppercase tracking-wider">
                  Get In Touch
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-poppins)] font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                Let&apos;s <span className="text-[#ff7b00]">Connect</span>
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-lg text-gray-400 max-w-2xl mx-auto">
                Ready to start your next project? Drop us a message and
                we&apos;ll get back to you shortly.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name Input */}
                  <div>
                    <label className="block font-[family-name:var(--font-inter)] text-sm text-gray-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white font-[family-name:var(--font-inter)] focus:border-[#ff7b00] focus:outline-none transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block font-[family-name:var(--font-inter)] text-sm text-gray-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white font-[family-name:var(--font-inter)] focus:border-[#ff7b00] focus:outline-none transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block font-[family-name:var(--font-inter)] text-sm text-gray-400 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white font-[family-name:var(--font-inter)] focus:border-[#ff7b00] focus:outline-none transition-all duration-300"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block font-[family-name:var(--font-inter)] text-sm text-gray-400 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white font-[family-name:var(--font-inter)] focus:border-[#ff7b00] focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-[#ff7b00] text-white font-[family-name:var(--font-poppins)] font-semibold rounded-lg shadow-lg shadow-[#ff7b00]/25 hover:bg-[#ff7b00]/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message →"}
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Info Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 bg-[#1a1a1a] border border-white/10 rounded-lg hover:border-[#ff7b00]/50 transition-all duration-300 group"
                    >
                      <div className="text-4xl">{info.icon}</div>
                      <div>
                        <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-white text-sm mb-1">
                          {info.title}
                        </h4>
                        <p className="font-[family-name:var(--font-inter)] text-gray-400 text-sm group-hover:text-[#ff7b00] transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Working Hours */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="p-6 bg-gradient-to-br from-[#1a1a1a] to-[#232323] border border-[#ff7b00]/20 rounded-lg"
                >
                  <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-white text-lg mb-4">
                    Business Hours
                  </h4>
                  <div className="space-y-2 font-[family-name:var(--font-inter)] text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Monday - Friday</span>
                      <span className="text-[#ff7b00]">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Saturday</span>
                      <span className="text-[#ff7b00]">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Sunday</span>
                      <span className="text-gray-500">Closed</span>
                    </div>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-white text-lg mb-4">
                    Follow Us
                  </h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 flex items-center justify-center bg-[#1a1a1a] border border-white/10 rounded-lg hover:border-[#ff7b00] hover:bg-[#ff7b00]/10 transition-all duration-300 text-2xl"
                        title={social.name}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Brand */}
              <div className="md:col-span-2">
                <h3 className="font-[family-name:var(--font-poppins)] font-bold text-3xl text-white mb-4">
                  Vyom<span className="text-[#ff7b00]">Garud</span>
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-gray-400 text-sm leading-relaxed mb-4 max-w-md">
                  Empowering businesses with cutting-edge digital solutions.
                  Soar above the ordinary with innovative technology and
                  strategic excellence.
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#ff7b00] rounded-full animate-pulse"></span>
                  <span className="font-[family-name:var(--font-inter)] text-sm text-gray-400">
                    Available for new projects
                  </span>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-white mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        className="font-[family-name:var(--font-inter)] text-sm text-gray-400 hover:text-[#ff7b00] transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-white mb-4">
                  Newsletter
                </h4>
                <p className="font-[family-name:var(--font-inter)] text-sm text-gray-400 mb-4">
                  Subscribe to get updates on our latest projects.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-[#1a1a1a] border border-white/10 rounded-lg text-white text-sm font-[family-name:var(--font-inter)] focus:border-[#ff7b00] focus:outline-none"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-[#ff7b00] text-white rounded-lg hover:bg-[#ff7b00]/90 transition-all"
                  >
                    →
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-[family-name:var(--font-inter)] text-sm text-gray-400 text-center md:text-left">
                © 2024 VyomGarud. All rights reserved. Built with precision and
                passion.
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="font-[family-name:var(--font-inter)] text-sm text-gray-400 hover:text-[#ff7b00] transition-colors"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="font-[family-name:var(--font-inter)] text-sm text-gray-400 hover:text-[#ff7b00] transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="font-[family-name:var(--font-inter)] text-sm text-gray-400 hover:text-[#ff7b00] transition-colors"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
