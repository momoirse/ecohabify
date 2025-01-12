"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/src/context/ThemeContext";
import {
  FaHome,
  FaInfo,
  FaCube,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaRocket,
} from "react-icons/fa";
import { FaCloudMoon, FaCloudSun } from "react-icons/fa";
import { FaMapLocation, FaMessage } from "react-icons/fa6";

export const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initial screen size
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup listener
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "/services", label: "Services", icon: FaCube },
    { href: "/chatbot", label: "Chatbot", icon: FaMessage },
    { href: "/team", label: "Team", icon: FaInfo },
    { href: "/contact", label: "Contact", icon: FaEnvelope },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  const ThemeToggle = () => (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, rotate: -180 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
      }}
      className={`
        z-50 
        w-12 h-12 rounded-full 
        flex items-center justify-center
        shadow-2xl border-4 
        transform transition-all duration-500 ease-in-out
        ${
          isDarkMode
            ? "bg-[#486d37] border-[#486d37]/60 text-white hover:border-[#486d37]/80"
            : "bg-[#486d37]/70 border-[#486d37]/50 text-white hover:border-[#486d37]/70"
        }
        focus:outline-none focus:ring-4 focus:ring-opacity-50
        ${isDarkMode ? "focus:ring-[#486d37]/50" : "focus:ring-[#486d37]/30"}
      `}
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait">
        {isDarkMode ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="absolute"
          >
            <FaCloudMoon className="w-6 h-6 animate-pulse" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="absolute"
          >
            <FaCloudSun className="w-6 h-6 animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`
        fixed top-0 left-0 w-full z-40 
        ${
          isDarkMode
            ? "bg-[#486d37] text-gray-100 shadow-2xl"
            : "bg-[#486d37]/70 text-gray-100 shadow-lg"
        } 
        backdrop-blur-xl border-b border-opacity-20
      `}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo with Futuristic Animation */}
        <motion.div
          whileHover={{
            scale: 1.05,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.5 },
          }}
          className={`
            text-3xl font-bold flex items-center gap-2
            ${
              isDarkMode
                ? "text-dgreen-400 hover:text-dgreen-300"
                : "text-dgreen-600 hover:text-dgreen-700"
            }
          `}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.3, 0.6, 0.9, 1],
              scale: [0.7, 0.8, 0.9, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              type: "tween",
              ease: "easeInOut",
            }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 bg-dgreen-500/20 rounded-full blur-sm"
              animate={{
                scale: [1, 1.1, 1.2, 1.1, 1],
                opacity: [0.3, 0.5, 0.7, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute inset-0 bg-dgreen-500/10 rounded-full blur-md"
              animate={{
                scale: [1, 1.2, 1.3, 1.2, 1],
                opacity: [0.2, 0.4, 0.6, 0.4, 0.2],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <FaMapLocation
              className={`
                relative z-10 
                ${
                  isDarkMode
                    ? "text-dgreen-300 animate-pulse"
                    : "text-dgreen-600 animate-bounce"
                }
              `}
            />
          </motion.div>
          <Link href="/" aria-label="Home" className="transition-colors">
            EcoHabify
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav
          className={`
          ${isMobile ? "hidden" : "flex space-x-6 items-center"}
        `}
        >
          <div
            className={`
            flex space-x-6 mr-4
            ${
              isDarkMode
                ? "bg-dgreen-900/90 px-4 py-2 rounded-full"
                : "bg-dgreen-100/90 px-4 py-2 rounded-full"
            }
          `}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <Link
                  href={item.href}
                  className={`
                    text-base font-medium transition-colors duration-300 flex items-center gap-2
                    ${
                      isDarkMode
                        ? "text-white hover:text-[#486d37]/80"
                        : "text-white hover:text-[#486d37]/90"
                    }
                  `}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <item.icon className="w-5 h-5" />
                  </motion.div>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Toggle */}
        <div
          className={`
          flex items-center space-x-4
          ${!isMobile ? "hidden" : "flex"}
        `}
        >
          {/* Mobile Theme Toggle */}
          <ThemeToggle />

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`
              p-2 rounded-full 
              ${
                isDarkMode
                  ? "text-gray-200 hover:bg-gray-700"
                  : "text-gray-800 hover:bg-gray-200"
              }
            `}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`
            ${isMobile ? "hidden" : "block"}
          `}
        >
          <Link
            href="/"
            className={`
              px-6 py-3 rounded-full font-semibold
              transition-all duration-300 ease-in-out
              transform hover:scale-105 hover:shadow-xl
              focus:outline-none focus:ring-2 focus:ring-offset-2
              ${
                isDarkMode
                  ? "bg-dgreen-700 text-white hover:bg-dgreen-600 focus:ring-dgreen-500"
                  : "bg-dgreen-600 text-white hover:bg-dgreen-700 focus:ring-dgreen-500"
              }
            `}
            aria-label="Login"
          >
            Get Started
          </Link>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className={`
              fixed top-0 left-0 right-0 bottom-0 z-50
              ${isDarkMode ? "bg-gray-900" : "bg-white"}
              flex flex-col
              shadow-2xl
            `}
          >
            <div className="flex justify-between items-center p-4 border-b border-opacity-20">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`
                  text-2xl font-bold flex items-center gap-2
                  ${isDarkMode ? "text-green-200" : "text-green-900"}
                `}
              >
                <FaRocket />
                EcoHabify
              </motion.div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  p-2 rounded-full
                  ${
                    isDarkMode
                      ? "text-gray-200 hover:bg-gray-700"
                      : "text-gray-800 hover:bg-gray-200"
                  }
                `}
                aria-label="Close Menu"
              >
                <FaTimes className="w-6 h-6" />
              </motion.button>
            </div>
            <div
              className={`
                flex-grow flex flex-col justify-center space-y-6 px-6
                ${
                  isDarkMode
                    ? "bg-gradient-to-br from-gray-800 via-gray-500 to-teal-900"
                    : "bg-gradient-to-br from-teal-200 via-gray-500 to-green-200"
                }
              `}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      flex items-center gap-4 text-2xl py-4 
                      border-b border-opacity-20
                      ${
                        isDarkMode
                          ? "text-gray-200 hover:text-dgreen-400 border-gray-700"
                          : "text-gray-800 hover:text-dgreen-600 border-gray-200"
                      }
                    `}
                  >
                    <item.icon />
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6"
            >
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className={`
                  w-full text-center block px-6 py-4 rounded-full 
                  text-xl font-semibold
                  transition-all duration-300 ease-in-out
                  ${
                    isDarkMode
                      ? "bg-dgreen-700 text-white hover:bg-dgreen-600"
                      : "bg-dgreen-600 text-white hover:bg-dgreen-700"
                  }
                `}
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
