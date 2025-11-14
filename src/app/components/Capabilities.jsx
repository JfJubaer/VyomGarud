"use client";
import React from "react";
import { motion } from "framer-motion";

const Capabilities = () => {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and scalable architecture for optimal performance.",
      features: ["React & Next.js", "Full-Stack Solutions", "API Integration"],
      color: "#ff7b00",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications that deliver seamless user experiences across devices.",
      features: ["iOS & Android", "React Native", "UI/UX Design"],
      color: "#ff9500",
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description:
        "Secure, scalable cloud infrastructure and migration services powered by leading cloud platforms.",
      features: ["AWS & Azure", "DevOps", "CI/CD Pipeline"],
      color: "#ffa500",
    },
    {
      icon: "🤖",
      title: "AI & Automation",
      description:
        "Intelligent automation and AI-powered solutions to streamline operations and enhance decision-making.",
      features: ["Machine Learning", "Process Automation", "Data Analytics"],
      color: "#ffb500",
    },
  ];

  return (
    <section className="relative bg-[#232323] py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, #ff7b00 25%, transparent 25%, transparent 75%, #ff7b00 75%, #ff7b00),
            linear-gradient(45deg, #ff7b00 25%, transparent 25%, transparent 75%, #ff7b00 75%, #ff7b00)`,
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 30px 30px",
          }}
        ></div>
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff7b00]/5 rounded-full blur-3xl"></div>

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
                Our Services
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-poppins)] font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Our <span className="text-[#ff7b00]">Capabilities</span>
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to elevate your business
              to new heights
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#232323] p-6 rounded-2xl border border-white/5 hover:border-[#ff7b00]/30 transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff7b00]/0 to-[#ff7b00]/0 group-hover:from-[#ff7b00]/5 group-hover:to-[#ff7b00]/10 transition-all duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="text-6xl mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-[family-name:var(--font-poppins)] font-bold text-2xl text-white mb-3 group-hover:text-[#ff7b00] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-[family-name:var(--font-inter)] text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm font-[family-name:var(--font-inter)] text-gray-500"
                      >
                        <span className="w-1.5 h-1.5 bg-[#ff7b00] rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 px-4 bg-[#ff7b00]/10 border border-[#ff7b00]/30 text-[#ff7b00] font-[family-name:var(--font-poppins)] font-semibold rounded-lg hover:bg-[#ff7b00] hover:text-white transition-all duration-300"
                  >
                    Learn More →
                  </motion.button>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#ff7b00]/20 group-hover:border-[#ff7b00]/50 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#ff7b00]/20 group-hover:border-[#ff7b00]/50 transition-all duration-300"></div>

                {/* Number badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#ff7b00] rounded-full flex items-center justify-center font-[family-name:var(--font-poppins)] font-bold text-white text-sm shadow-lg shadow-[#ff7b00]/30">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="font-[family-name:var(--font-inter)] text-gray-400 mb-6">
              Need a custom solution? Let&lsquo;s discuss your project
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#ff7b00] text-white font-[family-name:var(--font-poppins)] font-semibold rounded-lg shadow-lg shadow-[#ff7b00]/25 hover:bg-[#ff7b00]/90 transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
