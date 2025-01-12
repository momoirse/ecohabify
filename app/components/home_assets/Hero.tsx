'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ClientMotionDiv, ClientMotionSection } from './ClientMotion';
import { useTheme } from '@/src/context/ThemeContext';
import { 
  FaRocket, 
  FaCode, 
  FaLightbulb, 
  FaChartLine 
} from 'react-icons/fa';
import { motion, useTransform, useMotionValue } from 'framer-motion';

export const Hero = () => {
  const { isDarkMode } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      });
    }
  };

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
        ${isDarkMode 
          ? 'bg-gradient-to-br from-[#486d37] via-[#486d37]/80 to-[#486d37]/60' 
          : 'bg-gradient-to-br from-[#486d37]/20 via-[#486d37]/10 to-[#486d37]/5'
        }
      `}
      aria-label="Hero Section"
    >
      {/* Animated Background Shapes */}
      <ClientMotionDiv
        className="absolute top-0 left-0 w-full h-full"
        style={{
          opacity: isDarkMode ? 0.15 : 0.25,
          transform: `translate(${mousePosition.x / -50}px, ${mousePosition.y / -50}px)`
        }}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <svg 
          viewBox="0 0 1440 320" 
          xmlns="http://www.w3.org/2000/svg" 
          className="absolute -top-20 left-0 w-full h-full"
          style={{
            transform: `translate(${mousePosition.x / -100}px, ${mousePosition.y / -100}px)`
          }}
        >
          <path 
            fill={isDarkMode ? "#1E40AF" : "#60A5FA"} 
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
              transform: `translate(${mousePosition.x / -75}px, ${mousePosition.y / -75}px)`
            }}
          >
            <path 
              fill="#A78BFA" 
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
          transition={{ duration: 0.8, type: 'spring' }}
          className="max-w-4xl mx-auto"
          style={{
            transform: `translate(${mousePosition.x / -200}px, ${mousePosition.y / -200}px)`
          }}
        >
          <h1 
            className={`
              text-5xl md:text-6xl font-extrabold mb-6 leading-tight
              ${isDarkMode 
                ? 'text-green-300' 
                : 'text-green-800'
              }
            `}
            aria-label="Main Headline"
          >
            Urban Resilience through RIACT
          </h1>
          
          <ClientMotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`
              text-xl mb-8 max-w-2xl mx-auto
              ${isDarkMode 
                ? 'text-gray-300' 
                : 'text-gray-700'
              }
            `}
          >
            Risk-Informed Asset-Centric Process for Adaptive Urban Resilience: 
            Empowering Cities to Anticipate, Mitigate, and Recover from Complex Challenges
          </ClientMotionDiv>

          <div className="flex justify-center space-x-4 mb-12">
            <ClientMotionDiv
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/chatbot"
                className={`
                  px-6 py-3 rounded-full 
                  font-semibold transition-all duration-300
                  focus:outline-none focus:ring-2
                  ${isDarkMode 
                    ? 'bg-[#486d37] text-white hover:bg-[#486d37]/90 focus:ring-[#486d37]/50' 
                    : 'bg-[#486d37]/90 text-white hover:bg-[#486d37] focus:ring-[#486d37]/50'
                  }
                `}
                aria-label="Chat with my thesis"
              >
                Chat with my thesis
              </Link>
            </ClientMotionDiv>

            <ClientMotionDiv
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact"
                className={`
                  border-2 px-6 py-3 rounded-full 
                  hover:bg-opacity-20 transition-all duration-300
                  focus:outline-none focus:ring-2
                  ${isDarkMode 
                    ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-white focus:ring-green-400' 
                    : 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-green-600'
                  }
                `}
                aria-label="Contact Us"
              >
                Contact Us
              </Link>
            </ClientMotionDiv>
          </div>

          {/* Feature Icons */}
          <div className="flex justify-center space-x-8 mt-8">
            {[/* eslint-disable @typescript-eslint/no-unused-vars */
              { icon: FaRocket, label: 'Innovation' },
              { icon: FaCode, label: 'Development' },
              { icon: FaLightbulb, label: 'Solutions' },
              { icon: FaChartLine, label: 'Growth' }
            ].map((feature, index) => (
              <ClientMotionDiv
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 300,
                  damping: 10
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`
                  p-4 rounded-full shadow-lg
                  flex items-center justify-center
                  transition-all duration-300
                  ${isDarkMode 
                    ? 'bg-green-800/50 text-green-300 hover:bg-green-700/70' 
                    : 'bg-green-100 text-green-600 hover:bg-green-200'
                  }
                `}
              >
                <feature.icon className="w-8 h-8" />
              </ClientMotionDiv>
            ))}
          </div>
        </ClientMotionDiv>
      </div>
    </ClientMotionSection>
  );
};
