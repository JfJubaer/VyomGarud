"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative bg-[#1a1a1a] py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ff7b00 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#ff7b00]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff7b00]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
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
                About Us
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-poppins)] font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Our <span className="text-[#ff7b00]">Mission</span>
            </h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Mission Statement */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="font-[family-name:var(--font-inter)] text-lg text-gray-300 leading-relaxed">
                At{" "}
                <span className="text-[#ff7b00] font-semibold">VyomGarud</span>,
                we believe in pushing boundaries and soaring beyond conventional
                limits. Our mission is to empower businesses with cutting-edge
                digital solutions that drive innovation and sustainable growth.
              </p>
              <p className="font-[family-name:var(--font-inter)] text-lg text-gray-300 leading-relaxed">
                Named after the mythical sky guardian, we combine strategic
                vision with technical excellence to deliver transformative
                results. We don&lsquo;t just build solutions—we craft
                experiences that elevate your digital presence.
              </p>

              {/* Mission Points */}
              <div className="space-y-4 pt-4">
                {[
                  {
                    icon: "🎯",
                    title: "Precision",
                    desc: "Strategic solutions tailored to your goals",
                  },
                  {
                    icon: "🚀",
                    title: "Innovation",
                    desc: "Cutting-edge technology and creativity",
                  },
                  {
                    icon: "🛡️",
                    title: "Reliability",
                    desc: "Robust, secure, and scalable systems",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-[#232323]/50 border border-white/5 rounded-lg hover:border-[#ff7b00]/30 transition-all duration-300"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-white text-lg mb-1">
                        {item.title}
                      </h4>
                      <p className="font-[family-name:var(--font-inter)] text-gray-400 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-[#232323] to-[#1a1a1a] p-8 rounded-2xl border border-[#ff7b00]/20 shadow-2xl">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "10+", label: "Years Experience" },
                    { value: "500+", label: "Projects Delivered" },
                    { value: "200+", label: "Happy Clients" },
                    { value: "50+", label: "Team Members" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="text-center p-6 bg-[#232323]/80 rounded-xl border border-white/5 hover:border-[#ff7b00]/30 transition-all duration-300"
                    >
                      <motion.p
                        className="font-[family-name:var(--font-poppins)] font-bold text-4xl text-[#ff7b00] mb-2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.7 + index * 0.1,
                          type: "spring",
                        }}
                      >
                        {stat.value}
                      </motion.p>
                      <p className="font-[family-name:var(--font-inter)] text-sm text-gray-400">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative corners */}
                <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-[#ff7b00]/50"></div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-[#ff7b00]/50"></div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 bg-[#ff7b00] text-white px-6 py-3 rounded-full shadow-lg shadow-[#ff7b00]/30 font-[family-name:var(--font-poppins)] font-semibold text-sm"
              >
                Est. 2014
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
