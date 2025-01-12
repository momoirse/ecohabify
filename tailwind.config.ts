import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          background: '#ffffff',
          text: '#333333',
          primary: '#3b82f6',
          secondary: '#6b7280',
          accent: '#10b981',
        },
        // Dark mode colors
        dark: {
          background: '#121212',
          text: '#e0e0e0',
          primary: '#60a5fa',
          secondary: '#9ca3af',
          accent: '#34d399',
        },
      },
      backgroundColor: {
        light: {
          DEFAULT: '#ffffff',
          secondary: '#f3f4f6',
        },
        dark: {
          DEFAULT: '#121212',
          secondary: '#1e1e1e',
        }
      },
      textColor: {
        light: {
          DEFAULT: '#333333',
          muted: '#6b7280',
        },
        dark: {
          DEFAULT: '#e0e0e0',
          muted: '#9ca3af',
        }
      },
      borderColor: {
        light: {
          DEFAULT: '#e5e7eb',
          secondary: '#d1d5db',
        },
        dark: {
          DEFAULT: '#2d3748',
          secondary: '#4a5568',
        }
      },
      boxShadow: {
        'light': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'dark': '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
      },
      transitionProperty: {
        'theme': 'background-color, color, border-color, text-decoration-color, fill, stroke, opacity'
      }
    },
  },
  plugins: [],
}
export default config
