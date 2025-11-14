"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#232323] flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff7b00]/20 via-transparent to-transparent"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,123,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,123,0,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            {/* Company Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#ff7b00]/30 rounded-full bg-[#ff7b00]/5"
            >
              <span className="w-2 h-2 bg-[#ff7b00] rounded-full animate-pulse"></span>
              <span className="text-sm font-[family-name:var(--font-inter)] text-[#ff7b00] uppercase tracking-wider">
                Advanced Solutions
              </span>
            </motion.div>

            {/* Company Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-[family-name:var(--font-poppins)] font-bold text-6xl md:text-7xl lg:text-8xl leading-tight"
            >
              Vyom
              <span className="text-[#ff7b00]">Garud</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-[family-name:var(--font-inter)] text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed"
            >
              Soar above the ordinary. Empowering your digital journey with
              cutting-edge technology and strategic innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#ff7b00] text-white font-semibold rounded-lg shadow-lg shadow-[#ff7b00]/25 hover:bg-[#ff7b00]/90 transition-all duration-300 font-[family-name:var(--font-poppins)]"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:border-[#ff7b00] hover:bg-[#ff7b00]/10 transition-all duration-300 font-[family-name:var(--font-poppins)]"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex gap-8 pt-8 border-t border-white/10"
            >
              <div>
                <p className="text-3xl font-bold text-[#ff7b00] font-[family-name:var(--font-poppins)]">
                  500+
                </p>
                <p className="text-sm text-gray-400 font-[family-name:var(--font-inter)]">
                  Projects
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#ff7b00] font-[family-name:var(--font-poppins)]">
                  98%
                </p>
                <p className="text-sm text-gray-400 font-[family-name:var(--font-inter)]">
                  Success Rate
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#ff7b00] font-[family-name:var(--font-poppins)]">
                  24/7
                </p>
                <p className="text-sm text-gray-400 font-[family-name:var(--font-inter)]">
                  Support
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            {/* Animated circles */}
            <div className="relative w-full max-w-lg aspect-square">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 border-2 border-[#ff7b00]/20 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-8 border-2 border-[#ff7b00]/30 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-16 border-2 border-[#ff7b00]/40 rounded-full"
              ></motion.div>

              {/* Center icon/logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <svg
                    width="180"
                    height="180"
                    viewBox="0 0 180 180"
                    fill="none"
                    className="drop-shadow-2xl"
                  >
                    <path
                      d="M90 20 L140 80 L90 100 L40 80 Z"
                      fill="#ff7b00"
                      opacity="0.8"
                    />
                    <path
                      d="M90 100 L140 80 L140 140 L90 160 Z"
                      fill="#ff7b00"
                      opacity="0.6"
                    />
                    <path
                      d="M90 100 L40 80 L40 140 L90 160 Z"
                      fill="#ff7b00"
                      opacity="0.4"
                    />
                  </svg>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-[#ff7b00]/20 rounded-full blur-3xl"
                  ></motion.div>
                </motion.div>
              </div>

              {/* Corner accents */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-[#ff7b00]/50"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-[#ff7b00]/50"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#232323] to-transparent"></div>
    </section>
  );
};

export default Hero;
