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

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-4 sm:space-y-6 text-center lg:text-left"
          >
            {/* Company Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-[#ff7b00]/30 rounded-full bg-[#ff7b00]/5"
            >
              <span className="w-2 h-2 bg-[#ff7b00] rounded-full animate-pulse"></span>
              <span className="text-xs sm:text-sm font-[family-name:var(--font-inter)] text-[#ff7b00] uppercase tracking-wider">
                Advanced Solutions
              </span>
            </motion.div>

            {/* Company Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-[family-name:var(--font-poppins)] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight"
            >
              Vyom
              <span className="text-[#ff7b00]">Garud</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-[family-name:var(--font-inter)] text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0"
            >
              Soar above the ordinary. Empowering your digital journey with
              cutting-edge technology and strategic innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#ff7b00] text-white font-semibold rounded-lg shadow-lg shadow-[#ff7b00]/25 hover:bg-[#ff7b00]/90 transition-all duration-300 font-[family-name:var(--font-poppins)] text-sm sm:text-base w-full sm:w-auto"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:border-[#ff7b00] hover:bg-[#ff7b00]/10 transition-all duration-300 font-[family-name:var(--font-poppins)] text-sm sm:text-base w-full sm:w-auto"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-white/10"
            >
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-[#ff7b00] font-[family-name:var(--font-poppins)]">
                  500+
                </p>
                <p className="text-xs sm:text-sm text-gray-400 font-[family-name:var(--font-inter)]">
                  Projects
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-[#ff7b00] font-[family-name:var(--font-poppins)]">
                  98%
                </p>
                <p className="text-xs sm:text-sm text-gray-400 font-[family-name:var(--font-inter)]">
                  Success Rate
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-[#ff7b00] font-[family-name:var(--font-poppins)]">
                  24/7
                </p>
                <p className="text-xs sm:text-sm text-gray-400 font-[family-name:var(--font-inter)]">
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
            className="relative flex items-center justify-center mt-8 lg:mt-0"
          >
            {/* Animated circles */}
            <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square">
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
                className="absolute inset-4 sm:inset-8 border-2 border-[#ff7b00]/30 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-8 sm:inset-16 border-2 border-[#ff7b00]/40 rounded-full"
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
                    width="120"
                    height="120"
                    viewBox="0 0 180 180"
                    fill="none"
                    className="drop-shadow-2xl w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44"
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
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 border-t-2 border-r-2 border-[#ff7b00]/50"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 border-b-2 border-l-2 border-[#ff7b00]/50"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-[#232323] to-transparent"></div>
    </section>
  );
};

export default Hero;
