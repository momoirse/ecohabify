"use client";

import Image from "next/image";
import { ClientMotionDiv } from "./ClientMotion";
import { useTheme } from "@/src/context/ThemeContext";
import PhotoAsma from "./PhotoAsma.jpg";
import PhotoMahtab from "./PhotoMahtab.jpg";
import PhotoBehrooz from "./PhotoBehrooz.jpg";
import { ThemedContainer } from "../ThemedComponents";

export const MyPhoto = () => {
  const { isDarkMode } = useTheme();

  const founders = [
    {
      image: PhotoMahtab,
      name: "Mahtab Gholipour",
      title: "CEO, Lead Architect & Technical Director",
      description: `Mahtab Gholipour is a highly skilled architect with extensive expertise in sustainable building practices. With degrees from Khayyam University, Mohandesan Institute, and Toos Institute of Higher Education, she brings over five years of professional experience in architectural design and BIM. As EcoHabify's Lead Architect and Technical Director, she leads the platform's technical development, including AI-powered energy audits and sustainable retrofit solutions. Fluent in English, German, and Persian, she combines her technical expertise with educational experience to drive EcoHabify's mission of sustainable building transformation.`,
    },
    {
      image: PhotoAsma,
      name: "Asma Noorihaghani",
      title: "Director of Customer Experience & CRM",
      description: `Asma Noorihaghani is a highly accomplished professional with extensive experience in Customer Relationship Management (CRM) and client success. Her background includes a Bachelor of Science in Clinical Biomedical Engineering from Islamic Azad University, providing a solid foundation for analytical and problem-solving skills crucial for understanding user needs.
Throughout her career, Asma has consistently demonstrated expertise in leveraging CRM systems to enhance business performance and foster strong customer relationships. She worked as a Sales Manager and Customer Relationship Manager at Tina Teb Sina, where she led teams, managed key accounts, and focused on client retention and satisfaction. This experience solidified her skills in understanding customer interactions, implementing effective CRM strategies, and ensuring positive user experiences. Subsequently, as a Sales and CRM Consultant at Rayka Tose'e Sazan Khorasan in the construction sector, she specialized in analyzing customer needs and developing tailored solutions to optimize their journey.
Now, as EcoHabify's Director of Customer Experience & CRM, Asma leverages her expertise to build and maintain strong user relationships and optimize the entire customer lifecycle. She is responsible for developing strategies that ensure seamless customer journeys from initial engagement to long-term loyalty, focusing on user satisfaction and retention. Her role encompasses managing CRM systems to track interactions, gather feedback, and identify opportunities for service enhancement. Her excellent communication skills and English fluency are vital for creating user-centric resources and collaborating with partners to enrich the overall customer experience. Asma’s deep understanding of customer needs and her ability to implement effective relationship management strategies make her an important asset to EcoHabify, driving user engagement, building a loyal community, and contributing significantly to the company's sustainable growth through customer satisfaction.
`,
    },
    // ONLY WRITE THE MISSIN ONE
    {
      image: PhotoBehrooz,
      name: "Behrooz Birjandi",
      title: "Marketing & Sales Strategy Director",
      description: `Behrooz Birjandi is a highly experienced professional with a proven track record in strategic marketing and sales leadership. He holds a Master’s degree in Business Administration (International Commerce) from Payam-e-Noor University, where his studies focused on sustainable market development, international trade, and overarching business strategy, providing a robust academic foundation for his career.
For over a decade, as Marketing & Sales Director at Bahr Afarin, Behrooz was instrumental in designing and implementing comprehensive company-wide marketing strategies, particularly those tailored to eco-friendly construction solutions. He successfully directed sales operations, significantly increasing customer acquisition and contract closures. His leadership in building and mentoring high-performing sales teams, along with his critical role in the company’s rebranding and repositioning into the green and sustainable construction market, highlights his strategic and execution capabilities. He consistently researched market trends, improved product offerings from a market perspective, and represented the company at national and international construction expos.
As EcoHabify's Marketing & Sales Strategy Director, Behrooz's extensive experience is paramount to driving our ambitious growth and internationalization objectives. He will lead the development and execution of robust B2B and B2C marketing campaigns, focusing on brand positioning, lead generation, and aggressive market penetration for both homeowners and contractors. His proficiency in digital marketing channels, sales forecasting, and international market entry strategies will be crucial for scaling EcoHabify. Behrooz will be responsible for identifying new market opportunities, driving sales initiatives, and forging the initial strategic alliances necessary for our phased expansion into European markets. His deep knowledge of sustainable construction trends and his ability to convert market insights into actionable sales and marketing plans make him uniquely qualified to propel EcoHabify's visibility and user acquisition in Portugal and abroad.
`,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {founders.map((founder, index) => (
        <ClientMotionDiv
          key={founder.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", delay: index * 0.3 }}
          className={`
            flex flex-col md:flex-row items-center justify-center 
            space-y-8 md:space-y-0 md:space-x-12 
            ${index > 0 ? "mt-16 md:mt-24" : ""}
          `}
        >
          {/* Photo Container with maintained aspect ratio */}
          <div className="relative w-[200px] h-[200px] md:w-[256px] md:h-[256px] flex-shrink-0">
            <div
              className={`
              absolute inset-0 rounded-full
              ${
                isDarkMode
                  ? "border-4 border-green-700"
                  : "border-4 border-green-500"
              }
              shadow-2xl overflow-hidden aspect-square
            `}
            >
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
            <h2
              className={`
              text-2xl md:text-3xl font-bold mb-2
              ${isDarkMode ? "text-green-300" : "text-green-800"}
            `}
            >
              {founder.name}
            </h2>
            <h3
              className={`
              text-lg md:text-xl font-semibold mb-4
              ${isDarkMode ? "text-green-400" : "text-green-700"}
            `}
            >
              {founder.title}
            </h3>
            <p
              className={`
              text-base md:text-lg leading-relaxed
              ${isDarkMode ? "text-gray-300" : "text-gray-700"}
            `}
            >
              {founder.description}
            </p>
          </ThemedContainer>
        </ClientMotionDiv>
      ))}
    </div>
  );
};
