'use client';

import Image from 'next/image';
import { ClientMotionDiv } from './ClientMotion';
import { useTheme } from '@/src/context/ThemeContext';
import myPhoto from './my_photo.jpg';
import { ThemedContainer } from '../ThemedComponents';

export const MyPhoto = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="container mx-auto px-4 py-12">
      <ClientMotionDiv
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12"
      >
        {/* Profile Photo */}
        <div className={`
          w-64 h-64 rounded-full overflow-hidden shadow-2xl
          ${isDarkMode 
            ? 'border-4 border-green-700' 
            : 'border-4 border-green-500'
          }
        `}>
          <Image 
            src={myPhoto} 
            alt="Seyed Mohammad Hossein Seyedi Rezvani" 
            width={256} 
            height={256} 
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Profile Description */}
        <ThemedContainer className="max-w-2xl p-6 rounded-lg">
          <h2 className={`
            text-3xl font-bold mb-4
            ${isDarkMode ? 'text-green-300' : 'text-green-800'}
          `}>
            Dr. Seyed Mohammad Hossein Seyedi Rezvani
          </h2>
          <div className={`
            text-base leading-relaxed
            ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}
          `}>
            <p className="mb-4">
              Dr. Seyed MHS Rezvani is a civil engineer and Ph.D. candidate at IST @tecnico ULisboa, 
              with a strong focus on urban resilience enhancement using a GIS-based approach.
            </p>
            <p className="mb-4">
              His publications cover topics such as the Risk-Informed Asset-Centric (EcoHabify) Urban 
              Resilience Enhancement Process, climate adaptation measures for enhancing urban resilience, 
              and resilience assessment of public buildings, multi-layer mapping of resilience exposure 
              in Portuguese cities, and the development of resilience rating systems.
            </p>
            <p>
              With eleven years of experience in international projects, he has served as a construction 
              project manager and technical office manager, working on diverse infrastructure including 
              tunnels, roads, bridges, public and private structures, TSE lagoons, landfills, evaporation 
              ponds, and subterranean utility networks.
            </p>
          </div>
        </ThemedContainer>
      </ClientMotionDiv>
    </div>
  );
};
