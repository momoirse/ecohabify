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
      icon: FaCity,
      title: 'Urban Resilience Modeling',
      description: 'Advanced computational models for urban system adaptation and risk mitigation.',
      color: 'text-green-600'
    },
    {
      icon: FaNetworkWired,
      title: 'Community Technology Integration',
      description: 'Designing adaptive technological infrastructures for responsive urban environments.',
      color: 'text-purple-600'
    },
    {
      icon: FaBrain,
      title: 'AI-Driven Urban Analytics',
      description: 'Intelligent data analysis for predictive urban planning and resource optimization.',
      color: 'text-green-600'
    },
    {
      icon: FaChartLine,
      title: 'Resilience Performance Metrics',
      description: 'Comprehensive frameworks for measuring and enhancing urban system adaptability.',
      color: 'text-red-600'
    },
    {
      icon: FaUsers,
      title: 'Community Engagement Platforms',
      description: 'Interactive digital tools for collaborative urban problem-solving and knowledge sharing.',
      color: 'text-indigo-600'
    },
    {
      icon: FaShieldAlt,
      title: 'Urban Risk Mitigation',
      description: 'Strategic technological interventions for enhancing community preparedness and recovery.',
      color: 'text-orange-600'
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
            EcoHabify Urban Resilience Services
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
