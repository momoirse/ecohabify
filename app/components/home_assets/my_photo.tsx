'use client';

import Image from 'next/image';
import { ClientMotionDiv } from './ClientMotion';
import { useTheme } from '@/src/context/ThemeContext';
import PhotoAsma from './PhotoAsma.jpg';
import PhotoMahtab from './PhotoMahtab.jpg';
import { ThemedContainer } from '../ThemedComponents';

export const MyPhoto = () => {
  const { isDarkMode } = useTheme();

  const founders = [
    {
      image: PhotoMahtab,
      name: "Mahtab Gholipour",
      title: "CEO, Lead Architect & Technical Director",
      description: `Mahtab Gholipour is a highly skilled architect with extensive expertise in sustainable building practices. With degrees from Khayyam University, Mohandesan Institute, and Toos Institute of Higher Education, she brings over five years of professional experience in architectural design and BIM. As EcoHabify's Lead Architect and Technical Director, she leads the platform's technical development, including AI-powered energy audits and sustainable retrofit solutions. Fluent in English, German, and Persian, she combines her technical expertise with educational experience to drive EcoHabify's mission of sustainable building transformation.`
    },
    {
      image: PhotoAsma,
      name: "Asma Noorihaghani",
      title: "Marketing & Partnerships Director",
      description: `Asma Noorihaghani brings extensive experience in Customer Relationship Management (CRM), sales, and marketing to EcoHabify. With a B.Sc. in Clinical Biomedical Engineering and proven success in sales management and CRM implementation, she leads our marketing strategy and partnership development. Her expertise in customer journey mapping, digital marketing, and strategic partnerships makes her invaluable in driving user adoption and business growth. Her communication skills and analytical approach contribute significantly to EcoHabify's market presence and success.`
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {founders.map((founder, index) => (
        <ClientMotionDiv
          key={founder.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', delay: index * 0.3 }}
          className={`
            flex flex-col md:flex-row items-center justify-center 
            space-y-8 md:space-y-0 md:space-x-12 
            ${index > 0 ? 'mt-16 md:mt-24' : ''}
          `}
        >
          {/* Photo Container with maintained aspect ratio */}
          <div className="relative w-[200px] h-[200px] md:w-[256px] md:h-[256px] flex-shrink-0">
            <div className={`
              absolute inset-0 rounded-full
              ${isDarkMode ? 'border-4 border-green-700' : 'border-4 border-green-500'}
              shadow-2xl overflow-hidden aspect-square
            `}>
              <Image 
                src={founder.image} 
                alt={`${founder.name}'s Photo`} 
                fill
                sizes="(max-width: 768px) 200px, 256px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Description Container */}
          <ThemedContainer className="max-w-full md:max-w-2xl p-4 md:p-6 rounded-lg">
            <h2 className={`
              text-2xl md:text-3xl font-bold mb-2
              ${isDarkMode ? 'text-green-300' : 'text-green-800'}
            `}>
              {founder.name}
            </h2>
            <h3 className={`
              text-lg md:text-xl font-semibold mb-4
              ${isDarkMode ? 'text-green-400' : 'text-green-700'}
            `}>
              {founder.title}
            </h3>
            <p className={`
              text-base md:text-lg leading-relaxed
              ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}
            `}>
              {founder.description}
            </p>
          </ThemedContainer>
        </ClientMotionDiv>
      ))}
    </div>
  );
};
