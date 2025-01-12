'use client';

import React, { ReactNode } from 'react';
import { useTheme } from '@/src/context/ThemeContext';
import { motion, MotionProps } from 'framer-motion';

// Themed Container
export const ThemedContainer = ({ children, className = '', ...props }: 
  React.HTMLAttributes<HTMLDivElement> & { children: ReactNode }) => {
  const { isDarkMode } = useTheme();
  return (
    <div 
      className={`
        ${isDarkMode 
          ? 'bg-gray-800 text-gray-100 border-gray-700' 
          : 'bg-white text-gray-900 border-gray-200'}
        border rounded-lg shadow-md p-6 
        transition-colors duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

// Themed Motion Container
export const ThemedMotionContainer = ({ children, className = '', ...props }: 
  MotionProps & { children: ReactNode, className?: string }) => {
  const { isDarkMode } = useTheme();
  return (
    <motion.div 
      className={`
        ${isDarkMode 
          ? 'bg-gray-800 text-gray-100 border-gray-700' 
          : 'bg-white text-gray-900 border-gray-200'}
        border rounded-lg shadow-md p-6 
        transition-colors duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Themed Headings
export const ThemedH1 = ({ children, className = '', ...props }: 
  React.HTMLAttributes<HTMLHeadingElement> & { children: ReactNode }) => {
  const { isDarkMode } = useTheme();
  return (
    <h1 
      className={`
        text-4xl font-bold mb-6
        ${isDarkMode 
          ? 'text-green-300' 
          : 'text-green-600'}
        transition-colors duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </h1>
  );
};

export const ThemedH2 = ({ children, className = '', ...props }: 
  React.HTMLAttributes<HTMLHeadingElement> & { children: ReactNode }) => {
  const { isDarkMode } = useTheme();
  return (
    <h2 
      className={`
        text-3xl font-semibold mb-4
        ${isDarkMode 
          ? 'text-green-300' 
          : 'text-green-600'}
        transition-colors duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </h2>
  );
};

export const ThemedH3 = ({ children, className = '', ...props }: 
  React.HTMLAttributes<HTMLHeadingElement> & { children: ReactNode }) => {
  const { isDarkMode } = useTheme();
  return (
    <h3 
      className={`
        text-2xl font-medium mb-3
        ${isDarkMode 
          ? 'text-green-200' 
          : 'text-green-500'}
        transition-colors duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </h3>
  );
};

// Themed Paragraph
export const ThemedP = ({ children, className = '', ...props }: 
  React.HTMLAttributes<HTMLParagraphElement> & { children: ReactNode }) => {
  const { isDarkMode } = useTheme();
  return (
    <p 
      className={`
        text-base leading-relaxed mb-4
        ${isDarkMode 
          ? 'text-gray-300' 
          : 'text-gray-700'}
        transition-colors duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </p>
  );
};

// Themed Input
export const ThemedInput = ({ className = '', ...props }: 
  React.InputHTMLAttributes<HTMLInputElement>) => {
  const { isDarkMode } = useTheme();
  return (
    <input 
      className={`
        w-full px-3 py-2 rounded-md border
        ${isDarkMode 
          ? 'bg-gray-700 text-gray-200 border-gray-600 focus:ring-green-500 focus:border-green-500' 
          : 'bg-white text-gray-900 border-gray-300 focus:ring-green-500 focus:border-green-500'}
        focus:outline-none focus:ring-2
        transition-colors duration-300
        ${className}
      `}
      {...props}
    />
  );
};

// Themed Textarea
export const ThemedTextarea = ({ className = '', ...props }: 
  React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const { isDarkMode } = useTheme();
  return (
    <textarea 
      className={`
        w-full px-3 py-2 rounded-md border
        ${isDarkMode 
          ? 'bg-gray-700 text-gray-200 border-gray-600 focus:ring-green-500 focus:border-green-500' 
          : 'bg-white text-gray-900 border-gray-300 focus:ring-green-500 focus:border-green-500'}
        focus:outline-none focus:ring-2
        transition-colors duration-300
        ${className}
      `}
      {...props}
    />
  );
};

// Themed Button
export const ThemedButton = ({ children, className = '', ...props }: 
  React.ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) => {
  const { isDarkMode } = useTheme();
  return (
    <button 
      className={`
        px-6 py-3 rounded-lg font-semibold
        transition-all duration-300
        ${isDarkMode 
          ? 'bg-green-700 text-white hover:bg-green-600' 
          : 'bg-green-600 text-white hover:bg-green-700'}
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

// Themed Label
export const ThemedLabel = ({ children, className = '', ...props }: 
  React.LabelHTMLAttributes<HTMLLabelElement> & { children: ReactNode }) => {
  const { isDarkMode } = useTheme();
  return (
    <label 
      className={`
        block mb-2 font-medium
        ${isDarkMode 
          ? 'text-gray-300' 
          : 'text-gray-700'}
        transition-colors duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </label>
  );
};
