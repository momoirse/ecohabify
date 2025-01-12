"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { GeminiChatService } from "@/lib/gemini/geminiService";
import { ClientMotionDiv } from "../home_assets/ClientMotion";
import {
  FaPaperPlane,
  FaRobot,
  FaUser,
  FaLanguage,
  FaClipboardList,
  FaCog,
} from "react-icons/fa";
import { useTheme } from "@/src/context/ThemeContext";
import {
  LANGUAGE_LEVELS,
  PROMPT_STYLES,
  PROMPT_CUSTOMIZATIONS,
} from "./chatbotConstants";
import { FaSnowman, FaFaceSmile } from "react-icons/fa6";

// Utility function to parse and render formatted text
const parseFormattedText = (text: string, isDarkMode: boolean) => {
  // Patterns for special formatting
  const patterns = [
    // Triple asterisks for bold and colored text (*** ***)
    {
      regex: /\*\*\*(.*?)\*\*\*/g,
      render: (match: string) => (
        <span
          key={Math.random()}
          className="font-bold text-green-600 dark:text-green-400"
        >
          {match}
        </span>
      ),
    },
    // Double asterisks for bold text (** **)
    {
      regex: /\*\*(.*?)\*\*/g,
      render: (match: string) => (
        <span
          key={Math.random()}
          className="font-bold text-black dark:text-white"
        >
          {match}
        </span>
      ),
    },
    // Single asterisks for italic text (* *)
    {
      regex: /\*(.*?)\*/g,
      render: (match: string) => (
        <span
          key={Math.random()}
          className="italic text-gray-700 dark:text-gray-300"
        >
          {match}
        </span>
      ),
    },
    // Quotes or important dialog (" ")
    {
      regex: /"(.*?)"/g,
      render: (match: string) => (
        <span
          key={Math.random()}
          className="italic text-gray-700 dark:text-gray-300"
        >
          "{match}"
        </span>
      ),
    },
  ];

  // Create a function to parse text
  const parseText = (inputText: string): React.ReactNode[] => {
    if (!inputText) return [];

    let processedText: React.ReactNode[] = [inputText];

    // Apply each pattern
    patterns.forEach(({ regex, render }) => {
      processedText = processedText
        .map((part) => {
          // If it's already a React element, return it as-is
          if (React.isValidElement(part)) return part;

          // If it's a string, process it
          if (typeof part === "string") {
            const matches: React.ReactNode[] = [];
            let lastIndex = 0;

            part.replace(regex, (match, content, index) => {
              // Add text before the match
              if (index > lastIndex) {
                matches.push(part.slice(lastIndex, index));
              }

              // Add the rendered match
              matches.push(render(content));

              // Update last index
              lastIndex = index + match.length;

              return match;
            });

            // Add remaining text
            if (lastIndex < part.length) {
              matches.push(part.slice(lastIndex));
            }

            return matches;
          }

          return part;
        })
        .flat();
    });

    return processedText;
  };

  // Return parsed text
  return parseText(text);
};

export default function Chatbot() {
  const { isDarkMode } = useTheme();

  const [messages, setMessages] = useState<
    {
      text: string;
      sender: "user" | "bot";
      level?: keyof typeof LANGUAGE_LEVELS;
      style?: keyof typeof PROMPT_STYLES;
      customizations?: string[];
      customStyle?: string;
    }[]
  >([]);
  const [input, setInput] = useState("");
  const [selectedLevel, setSelectedLevel] =
    useState<keyof typeof LANGUAGE_LEVELS>("B2");
  const [selectedStyle, setSelectedStyle] =
    useState<keyof typeof PROMPT_STYLES>("none");
  const [selectedCustomizations, setSelectedCustomizations] = useState<
    string[]
  >([]);
  const [customStyle, setCustomStyle] = useState("");
  const [isAdvancedOptionsOpen, setIsAdvancedOptionsOpen] = useState(false);
  const [includeStartup, setIncludeStartup] = useState(true);

  const chatService = useRef(new GeminiChatService());
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  // const scrollToBottom = () => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [messages]);

  const generatePrompt = useCallback(() => {
    const levelInfo = LANGUAGE_LEVELS[selectedLevel];
    const styleInfo = PROMPT_STYLES[selectedStyle];

    // Construct customization instructions
    const customizationInstructions = selectedCustomizations
      .map((custom) => {
        const matchedCustom = PROMPT_CUSTOMIZATIONS.find(
          (c) => c.id === custom
        );
        return matchedCustom ? matchedCustom.description : "";
      })
      .filter(Boolean);

    return `
      Communication Parameters:
      - Language Level: ${selectedLevel} (${levelInfo.name})
      - Complexity: ${levelInfo.description}
      - Communication Style: ${styleInfo.tone}

      Specific Customization Instructions:
      ${
        customizationInstructions.length > 0
          ? customizationInstructions.map((inst) => `• ${inst}`).join("\n")
          : "No specific customization requested."
      }

      ${customStyle ? `Additional Custom Style Guidance:\n${customStyle}` : ""}

      ${styleInfo.prefix}respond to the following:
    `;
  }, [selectedLevel, selectedStyle, selectedCustomizations, customStyle]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: "user" as const,
      level: selectedLevel,
      style: selectedStyle,
      customizations: selectedCustomizations,
      customStyle: customStyle,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const botResponse = await chatService.current.sendMessage(
        generatePrompt() + input
      );
      const botMessage = {
        text: botResponse,
        sender: "bot" as const,
        level: selectedLevel,
        style: selectedStyle,
        customizations: selectedCustomizations,
        customStyle: customStyle,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = {
        text: "Sorry, I encountered an error. Please try again.",
        sender: "bot" as const,
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const toggleCustomization = (customId: string) => {
    setSelectedCustomizations((prev) =>
      prev.includes(customId)
        ? prev.filter((id) => id !== customId)
        : [...prev, customId]
    );
  };

  const toggleStartup = () => {
    setIncludeStartup((prev) => !prev);
    console.log("Toggle switched. Current state:", !includeStartup);
  };

  const resetChat = () => {
    setMessages([]); // Clears the messages
    setInput(""); // Resets the input field
    setSelectedLevel("B2"); // Resets to default level
    setSelectedStyle("none"); // Resets to default style
    setSelectedCustomizations([]); // Clears customizations
    setCustomStyle(""); // Clears custom style
    setIncludeStartup(true); // Resets Startup inclusion
  };

  return (
    <div className="flex flex-col md:flex-row pt-12">
      {/* Sidebar */}
      <div className="w-full md:w-1/5 h-fit p-4 bg-gray-200 dark:bg-gray-800">
        <h2 className="text-xl font-semibold mb-4">Settings</h2>
        {/* Reset Chat Button */}
        <button
          onClick={resetChat}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
        >
          Reset Chat
        </button>

        {/* Language Level Selector */}
        {/* <div className="flex items-center space-x-4 mb-4">
          <FaLanguage className={`w-6 h-6 ${isDarkMode ? 'text-green-300' : 'text-green-700'}`} />
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value as keyof typeof LANGUAGE_LEVELS)}
            className={`px-3 py-2 rounded-lg ${isDarkMode ? 'bg-gray-800 text-gray-200 border-green-600' : 'bg-white text-gray-800 border-green-300'}`}
          >
            {Object.keys(LANGUAGE_LEVELS).map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div> */}

        {/* Style Selector */}
        {/* <div className="flex items-center space-x-4 mb-4">
          <FaClipboardList className={`w-6 h-6 ${isDarkMode ? 'text-green-300' : 'text-green-700'}`} />
          <select
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value as keyof typeof PROMPT_STYLES)}
            className={`px-3 py-2 rounded-lg ${isDarkMode ? 'bg-gray-800 text-gray-200 border-green-600' : 'bg-white text-gray-800 border-green-300'}`}
          >
            {Object.keys(PROMPT_STYLES).map((style) => (
              <option key={style} value={style}>
                {style.charAt(0).toUpperCase() + style.slice(1)} Style
              </option>
            ))}
          </select>
        </div>       */}
      </div>

      {/* Chat Area */}
      <div className="flex-grow p-4">
        <ClientMotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg ${
            isDarkMode
              ? "bg-gray-800 text-gray-100 border-gray-700"
              : "bg-white text-gray-900 border-gray-200"
          }`}
        >
          {/* add an empty div with the hight of the header */}

          <div
            className={`p-4 ${
              isDarkMode
                ? "bg-gray-900 text-gray-100"
                : "bg-green-600 text-white"
            }`}
          >
            {/* Header Section */}
            <div className="flex items-center">
              <FaFaceSmile className="mr-3 text-2xl" />
              <h2 className="text-lg font-semibold">
                We are Mahtab Gholipour and Asma Noorihaghani
              </h2>
            </div>

            {/* Content Section */}
            <div className="mt-2">
              <p className="text-sm">
                You can ask me any question about our Startup ECOHABIFY
              </p>
            </div>
          </div>

          <div
            className={`
              p-4 h-[400px] overflow-y-auto space-y-3 
              ${
                isDarkMode
                  ? "bg-gray-800 text-gray-100"
                  : "bg-white text-gray-900"
              }
            `}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`
                    max-w-[80%] p-3 rounded-lg text-sm 
                    ${
                      isDarkMode
                        ? msg.sender === "user"
                          ? "bg-green-700 text-white"
                          : "bg-gray-700 text-gray-200"
                        : msg.sender === "user"
                        ? "bg-green-500 text-gray-700"
                        : "bg-gray-200 text-gray-900"
                    }
                  `}
                >
                  {msg.sender === "bot"
                    ? parseFormattedText(msg.text, isDarkMode)
                    : msg.text}

                  {/* {msg.level && (
                    <div
                      className={`
                        text-xs mt-1 opacity-70 
                        ${
                          msg.sender === "user"
                            ? "text-green-200"
                            : isDarkMode
                            ? "text-gray-400"
                            : "text-gray-600"
                        }
                      `}
                    >
                      {msg.level} | {msg.style} Style
                    </div>
                  )} */}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div
            className={`
              p-4 border-t flex 
              ${
                isDarkMode
                  ? "bg-gray-900 border-gray-700"
                  : "bg-white border-gray-200"
              }
            `}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
              placeholder="Ask me anything about your project..."
              className={`
                flex-grow p-2 rounded-l-lg focus:outline-none focus:ring-2 
                ${
                  isDarkMode
                    ? "bg-gray-700 text-gray-100 border-gray-600 focus:ring-green-600"
                    : "bg-gray-100 text-gray-900 border-gray-300 focus:ring-green-500"
                }
              `}
            />
            <button
              onClick={handleSendMessage}
              className={`
                p-2 rounded-r-lg 
                ${
                  isDarkMode
                    ? "bg-green-800 text-white hover:bg-green-700"
                    : "bg-green-600 text-white hover:bg-green-700"
                }
              `}
            >
              <FaPaperPlane />
            </button>
          </div>
        </ClientMotionDiv>
      </div>
      <style jsx>{`
        input[type="checkbox"] {
          cursor: pointer;
          width: 24px;
          height: 24px;
        }
      `}</style>
      <div className="w-full md:w-1/5 h-fit p-4 bg-gray-200 dark:bg-gray-800">
        Side Bar 2 for Future Development
      </div>
    </div>
  );
}
