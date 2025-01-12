'use client';

import React from 'react';
import { ClientMotionDiv } from '../components/home_assets/ClientMotion';
import { MyPhoto } from '../components/home_assets/my_photo';
import { 
  ThemedContainer, 
  ThemedH1, 
  ThemedH3, 
  ThemedP 
} from '../components/ThemedComponents';

export default function About() {
  return (
    <ClientMotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-24 pt-32"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ThemedH1 className="mb-8">
            About RIACT Urban Resilience
          </ThemedH1>
          
          <ThemedContainer>
            <MyPhoto />
            <ThemedP className="mt-8 text-center">
              Hi, I'm Seyed Mohammad Hossein Seyedi Rezvani, a dedicated researcher and innovator 
              in Urban Resilience and Adaptive Community Technologies (RIACT). My work focuses on 
              developing transformative solutions that enhance community adaptability and 
              technological integration in urban environments.
            </ThemedP>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <ThemedContainer className="bg-green-50 dark:bg-green-900">
                <ThemedH3 className="text-green-700 dark:text-green-300 mb-4">
                  Research Focus
                </ThemedH3>
                <ThemedP>
                  Investigating innovative technological interventions that improve 
                  urban community resilience, adaptive capacity, and sustainable development.
                </ThemedP>
              </ThemedContainer>
              
              <ThemedContainer className="bg-purple-50 dark:bg-purple-900">
                <ThemedH3 className="text-purple-700 dark:text-purple-300 mb-4">
                  Technological Integration
                </ThemedH3>
                <ThemedP>
                  Developing AI-driven and community-centric technologies that 
                  enable real-time adaptation and responsive urban infrastructure.
                </ThemedP>
              </ThemedContainer>
              
              <ThemedContainer className="bg-green-50 dark:bg-green-900">
                <ThemedH3 className="text-green-700 dark:text-green-300 mb-4">
                  Community Empowerment
                </ThemedH3>
                <ThemedP>
                  Creating collaborative platforms and tools that enhance 
                  community engagement, knowledge sharing, and collective problem-solving.
                </ThemedP>
              </ThemedContainer>
            </div>
          </ThemedContainer>
        </div>
      </div>
    </ClientMotionDiv>
  );
}
