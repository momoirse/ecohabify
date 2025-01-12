"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/context/ThemeContext";
import { Header } from "./components/home_assets/Header";
import { Footer } from "./components/home_assets/Footer";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current route

  // Check if the current route is '/chatbot'
  const isChatbotPage = pathname === "/chatbot";

  return (
    <html lang="en" className="light">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${inter.className} 
          min-h-screen 
          bg-white 
          dark:bg-gray-900 
          text-gray-900 
          dark:text-gray-100 
          transition-colors 
          duration-300 
          antialiased

        `}
      >
        <ThemeProvider>
          {/*{!isChatbotPage && <Header />}  Hide Header on '/chatbot' */}
          <Header />
          {children}
          {!isChatbotPage && <Footer />} {/* Hide Footer on '/chatbot' */}
        </ThemeProvider>
      </body>
    </html>
  );
}
