"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ClientMotionDiv, ClientMotionSection } from "./ClientMotion";
import { useTheme } from "@/src/context/ThemeContext";
import {
  FaRocket,
  FaCode,
  FaLightbulb,
  FaChartLine,
  FaExclamationTriangle,
  FaDollarSign,
  FaUserCheck,
  FaCogs,
  FaPiggyBank,
  FaHandshake,
  FaTools,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import { motion, useTransform, useMotionValue } from "framer-motion";

export const Hero = () => {
  const { isDarkMode } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  const problems = [
    {
      icon: FaExclamationTriangle,
      title: "Confusing Renovation Process",
      description:
        "Homeowners find the renovation process overwhelming and unclear.",
    },
    {
      icon: FaDollarSign,
      title: "High Costs",
      description: "Sustainable renovations are often perceived as expensive.",
    },
    {
      icon: FaUserCheck,
      title: "Finding Trusted Professionals",
      description:
        "Locating verified contractors specializing in eco-friendly renovations is challenging.",
    },
  ];

  const solutions = [
    {
      icon: FaCogs,
      title: "Streamlined Process",
      description:
        "Our platform simplifies each step of the renovation journey.",
    },
    {
      icon: FaPiggyBank,
      title: "Cost-Effective Options",
      description: "We provide affordable sustainable renovation solutions.",
    },
    {
      icon: FaHandshake,
      title: "Verified Contractors",
      description:
        "Connect with trusted and certified eco-friendly professionals.",
    },
  ];

  const services = [
    {
      icon: FaTools,
      title: "Smart Energy Assessments",
      description:
        "AI-powered analysis for clear insights into your home’s energy efficiency.",
    },
    {
      icon: FaLightbulb,
      title: "Customized Retrofit Recommendations",
      description:
        "Tailored plans balancing efficiency, cost, and design to fit your needs.",
    },
    {
      icon: FaBook,
      title: "Educational Resources",
      description:
        "Webinars, guides, and courses to empower homeowners with knowledge.",
    },
    {
      icon: FaUsers,
      title: "Verified Contractor Network",
      description:
        "Connecting you with trusted eco-friendly professionals for your projects.",
    },
  ];

  return (
    <ClientMotionSection
      ref={heroRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`
        relative min-h-screen flex items-center justify-center 
        pt-16 overflow-hidden
        ${
          isDarkMode
            ? "bg-gradient-to-br from-[rgb(209,247,191)] via-[rgb(150,200,150)]/80 to-[rgb(100,200,150)]/60"
            : "bg-gradient-to-br from-[#486d37]/20 via-[#486d37]/10 to-[#486d37]/5"
        }
      `}
      aria-label="Hero Section"
    >
      {/* Animated Background Shapes */}
      <ClientMotionDiv
        className="absolute top-0 left-0 w-full h-full"
        style={{
          opacity: isDarkMode ? 0.15 : 0.25,
          transform: `translate(${mousePosition.x / -50}px, ${
            mousePosition.y / -50
          }px)`,
        }}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-20 left-0 w-full h-full"
          style={{
            transform: `translate(${mousePosition.x / -100}px, ${
              mousePosition.y / -100
            }px)`,
          }}
        >
          <path
            fill={isDarkMode ? "#2D5A27" : "#4CAF50"}
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,181.3C672,149,768,107,864,106.7C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        {/* Additional Shape for Light Theme */}
        {!isDarkMode && (
          <svg
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-10 left-0 w-full h-full"
            style={{
              transform: `translate(${mousePosition.x / -75}px, ${
                mousePosition.y / -75
              }px)`,
            }}
          >
            <path
              fill="#8BC34A"
              fillOpacity="0.6"
              d="M0,224L48,218.7C96,213,192,203,288,181.3C384,160,480,128,576,138.7C672,149,768,203,864,229.3C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        )}
      </ClientMotionDiv>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <ClientMotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="max-w-4xl mx-auto"
          style={{
            transform: `translate(${mousePosition.x / -200}px, ${
              mousePosition.y / -200
            }px)`,
          }}
        >
          <p className="mt-20"></p>
          <h1
            className={`
              text-5xl md:text-6xl font-extrabold mb-6 leading-tight
              ${isDarkMode ? "text-green-900" : "text-green-500"}
            `}
            aria-label="Main Headline"
          >
            Sustainable Renovations with EcoHabify
          </h1>

          <ClientMotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`
              text-xl mb-8 max-w-2xl mx-auto
              ${isDarkMode ? "text-gray-800" : "text-gray-300"}
            `}
          >
            EcoHabify is an innovative platform dedicated to simplifying
            sustainable home renovations in Portugal. Our mission is to empower
            homeowners to create energy-efficient, eco-friendly, and comfortable
            living spaces through accessible tools, expert guidance, and
            educational resources.
          </ClientMotionDiv>
          {/* Feature Icons */}
          <div className="flex justify-center space-x-8 mt-12 mb-12">
            {[
              /* eslint-disable @typescript-eslint/no-unused-vars */
              { icon: FaRocket, label: "Innovation" },
              { icon: FaCode, label: "Development" },
              { icon: FaLightbulb, label: "Solutions" },
              { icon: FaChartLine, label: "Growth" },
            ].map((feature, index) => (
              <ClientMotionDiv
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`
                  p-4 rounded-full shadow-lg
                  flex items-center justify-center
                  transition-all duration-300
                  ${
                    isDarkMode
                      ? "bg-green-800/50 text-green-300 hover:bg-green-700/70"
                      : "bg-green-100 text-green-300 hover:bg-green-200"
                  }
                `}
              >
                <feature.icon className="w-8 h-8" />
              </ClientMotionDiv>
            ))}
          </div>

          {/* Additional Information Section */}
          <ClientMotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className={`
              text-xl mb-8 max-w-2xl mx-auto
              ${isDarkMode ? "text-gray-800" : "text-gray-300"}
            `}
          >
            By connecting homeowners with advanced technology and verified
            professionals, EcoHabify aims to revolutionize the way homes are
            renovated, fostering a future where sustainability and architectural
            excellence go hand-in-hand. Our comprehensive services include
            AI-powered energy assessments, customized retrofit recommendations,
            educational resources, and a network of trusted contractors.
          </ClientMotionDiv>

          {/* Call-to-Action Buttons */}
          <div className="flex justify-center space-x-4 mt-12">
            <ClientMotionDiv
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/services"
                className={`
                  px-6 py-3 rounded-full 
                  font-semibold transition-all duration-300
                  focus:outline-none focus:ring-2
                  ${
                    isDarkMode
                      ? "bg-[#486d37] text-white hover:bg-[#486d37]/90 focus:ring-[#486d37]/50"
                      : "bg-[#486d37]/90 text-black hover:bg-[#486d37] focus:ring-[#486d37]/50"
                  }
                `}
                aria-label="Explore Our Services"
              >
                Services
              </Link>
            </ClientMotionDiv>

            <ClientMotionDiv
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/chatbot"
                className={`
                  border-2 px-6 py-3 rounded-full 
                  hover:bg-opacity-20 transition-all duration-300
                  focus:outline-none focus:ring-2
                  ${
                    isDarkMode
                      ? "border-green-400 text-green-900 hover:bg-green-400 hover:text-black focus:ring-green-400"
                      : "border-green-600 text-green-300 hover:bg-green-800 hover:text-white focus:ring-green-600"
                  }
                `}
                aria-label="Get Started with EcoHabify"
              >
                EcoHabify 🤖
              </Link>
            </ClientMotionDiv>
          </div>

          {/* Problem Statement Section */}
          <div className="mt-16">
            <ClientMotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-semibold mb-6 text-green-500">
                The Challenge
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {problems.map((problem, index) => (
                  <ClientMotionDiv
                    key={index}
                    className="bg-white/10 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
                  >
                    <problem.icon className="text-4xl mb-4 text-red-500" />
                    <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                    <p className="text-gray-500">{problem.description}</p>
                  </ClientMotionDiv>
                ))}
              </div>
            </ClientMotionDiv>
          </div>

          {/* Solution Section */}
          <div className="mt-16">
            <ClientMotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-semibold mb-6 text-green-400">
                Our Solution
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {solutions.map((solution, index) => (
                  <ClientMotionDiv
                    key={index}
                    className="bg-white/10 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
                  >
                    <solution.icon className="text-4xl mb-4 text-blue-500" />
                    <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                    <p className="text-gray-500">{solution.description}</p>
                  </ClientMotionDiv>
                ))}
              </div>
            </ClientMotionDiv>
          </div>

          {/* Services Section */}
          <div className="mt-16">
            <ClientMotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-2xl font-semibold mb-6 text-green-400">
                Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <ClientMotionDiv
                    key={index}
                    className="bg-white/10 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
                  >
                    <service.icon className="text-4xl mb-4 text-yellow-500" />
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-500">{service.description}</p>
                  </ClientMotionDiv>
                ))}
              </div>
            </ClientMotionDiv>
          </div>
        </ClientMotionDiv>
      </div>
    </ClientMotionSection>
  );
};
