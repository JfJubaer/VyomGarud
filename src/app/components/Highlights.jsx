"use client";
import React from "react";
import { motion } from "framer-motion";

const Highlights = () => {
  const highlights = [
    {
      number: "01",
      title: "Lightning Fast",
      description:
        "High-performance solutions optimized for speed and efficiency",
      icon: "⚡",
      gradient: "from-[#ff7b00] to-[#ff9500]",
    },
    {
      number: "02",
      title: "Battle-Tested Security",
      description:
        "Enterprise-grade security protocols protecting your digital assets",
      icon: "🛡️",
      gradient: "from-[#ff9500] to-[#ffa500]",
    },
    {
      number: "03",
      title: "24/7 Support",
      description: "Round-the-clock expert assistance whenever you need it",
      icon: "🚀",
      gradient: "from-[#ffa500] to-[#ffb500]",
    },
  ];

  return (
    <section className="relative bg-[#1a1a1a] py-20 overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-[#ff7b00]"
            style={{
              top: `${i * 5}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Decorative glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff7b00]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff7b00]/10 rounded-full blur-3xl"></div>

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
                Why Choose Us
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-poppins)] font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Key <span className="text-[#ff7b00]">Highlights</span>
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-lg text-gray-400 max-w-2xl mx-auto">
              Experience excellence in every aspect of our service delivery
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-gradient-to-br from-[#232323] to-[#1a1a1a] p-8 rounded-2xl border border-white/10 hover:border-[#ff7b00]/50 transition-all duration-500 overflow-hidden h-full">
                  {/* Animated background gradient on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#ff7b00]/10 rounded-full flex items-center justify-center border border-[#ff7b00]/30">
                    <span className="font-[family-name:var(--font-poppins)] font-bold text-2xl text-[#ff7b00]">
                      {highlight.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="text-6xl mb-6 relative z-10"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {highlight.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-[family-name:var(--font-poppins)] font-bold text-2xl md:text-3xl text-white mb-4 relative z-10">
                    {highlight.title}
                  </h3>

                  {/* Description */}
                  <p className="font-[family-name:var(--font-inter)] text-gray-400 text-base leading-relaxed relative z-10">
                    {highlight.description}
                  </p>

                  {/* Decorative line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#ff7b00] to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
                  />

                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#ff7b00]/30 group-hover:border-[#ff7b00]/60 transition-all duration-300"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#ff7b00]/30 group-hover:border-[#ff7b00]/60 transition-all duration-300"></div>
                </div>

                {/* Floating pulse effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-[#ff7b00]/20 rounded-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 p-8 bg-gradient-to-r from-[#232323] via-[#1a1a1a] to-[#232323] rounded-2xl border border-[#ff7b00]/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "99.9%", label: "Uptime" },
                { value: "<100ms", label: "Response Time" },
                { value: "256-bit", label: "Encryption" },
                { value: "ISO 27001", label: "Certified" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <p className="font-[family-name:var(--font-poppins)] font-bold text-3xl text-[#ff7b00] mb-2">
                    {stat.value}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
