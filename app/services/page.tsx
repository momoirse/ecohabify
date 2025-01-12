'use client';

import React from 'react';
import { ClientMotionDiv } from '../components/home_assets/ClientMotion';
import { 
  FaCity, 
  FaNetworkWired, 
  FaBrain, 
  FaChartLine, 
  FaUsers, 
  FaShieldAlt 
} from 'react-icons/fa';
import { 
  ThemedContainer, 
  ThemedH1, 
  ThemedH3, 
  ThemedP 
} from '../components/ThemedComponents';

export default function Services() {
  const services = [
    {
      icon: FaNetworkWired,
      title: 'Smart Energy Assessments',
      description: 'AI-powered analysis for clear insights into your home’s energy efficiency.',
      color: 'text-blue-600'
    },
    {
      icon: FaBrain,
      title: 'Customized Retrofit Recommendations',
      description: 'Tailored plans balancing efficiency, cost, and design to fit your needs.',
      color: 'text-green-600'
    },
    {
      icon: FaChartLine,
      title: 'Educational Resources',
      description: 'Webinars, guides, and courses to empower homeowners with knowledge.',
      color: 'text-red-600'
    },
    {
      icon: FaUsers,
      title: 'Verified Contractor Network',
      description: 'Connecting you with trusted eco-friendly professionals for your projects.',
      color: 'text-indigo-600'
    }
  ];

  return (
    <ClientMotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-24 pt-32"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ThemedH1 className="text-center mb-12">
            An Innovative Platform for an Eco-Conscious Future
          </ThemedH1>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ThemedContainer 
                key={index} 
                className="text-center p-8 transform transition duration-300 hover:scale-105"
              >
                <div className={`text-6xl mb-6 flex justify-center ${service.color}`}>
                  <service.icon />
                </div>
                <ThemedH3 className="mb-4">{service.title}</ThemedH3>
                <ThemedP>{service.description}</ThemedP>
              </ThemedContainer>
            ))}
          </div>
        </div>
      </div>
    </ClientMotionDiv>
  );
}
