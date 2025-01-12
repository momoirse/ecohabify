'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaPhone 
} from 'react-icons/fa';
import { ClientMotionDiv, ClientMotionA } from './ClientMotion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { 
      icon: FaTwitter, 
      href: 'https://twitter.com/ecohabify', 
      label: 'Twitter' 
    },
    { 
      icon: FaLinkedin, 
      href: 'https://linkedin.com/company/ecohabify', 
      label: 'LinkedIn' 
    },
    { 
      icon: FaGithub, 
      href: 'https://github.com/ecohabify', 
      label: 'GitHub' 
    }
  ];

  return (
    <footer 
      className="bg-[#486d37]/95 text-white py-16"
      aria-label="Site Footer"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <ClientMotionDiv
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 
            className="text-2xl font-bold mb-4 text-white"
            aria-label="Company Name"
          >
            EcoHabify
          </h3>
          <p className="text-gray-400 mb-4">
            EcoHabify is an innovative platform dedicated to simplifying sustainable home renovations in Portugal.
          </p>
          {/* <div className="flex space-x-3">
            {socialLinks.map((social, index) => (
              <ClientMotionA
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, x: index * 20 }}
                animate={{ opacity: 1, x: 0 }}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </ClientMotionA>
            ))}
          </div> */}
        </ClientMotionDiv>

        {/* Quick Links */}
        <ClientMotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-4 text-green-400">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/contact', label: 'Contact' }
            ].map(link => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </ClientMotionDiv>

        {/* Contact Info */}
        <ClientMotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-4 text-green-400">Contact</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-green-400" />
              <a 
                href="mailto:Mahtabgholipour73@gmail.com" 
                className="text-gray-200 hover:text-white transition-colors"
              >
                Mahtabgholipour73@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-green-400" />
              <a 
                href="tel:+989391970847" 
                className="text-gray-200 hover:text-white transition-colors"
              >
                +98 (939) 197-0847
              </a>
            </div>
          </div>
        </ClientMotionDiv>

        {/* Newsletter Signup */}
        <ClientMotionDiv
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-4 text-green-400">Stay Updated</h3>
          <form className="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-white 
              focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Email for newsletter signup"
            />
            <button 
              type="submit" 
              className="bg-green-600 text-white px-4 py-2 rounded-md 
              hover:bg-green-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </ClientMotionDiv>
      </div>

      {/* Copyright */}
      <ClientMotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center mt-12 pt-6 border-t border-gray-800"
      >
        <p className="text-gray-400">
          &copy; {currentYear} EcoHabify. All Rights Reserved.
        </p>
      </ClientMotionDiv>
    </footer>
  );
};