import { GoogleGenerativeAI } from "@google/generative-ai";
import { MY_THESIS } from "@/app/components/chatbot_assets/thesis";

// Determine the API key from multiple possible sources
const getApiKey = () => {
  // Check environment variables (both client and server-side)
  const apiKeyEnv = process.env.GEMINI_API_KEY;
  const apiKeyPublic = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  console.log('Checking API Keys:', {
    serverEnv: apiKeyEnv ? 'SET' : 'UNSET',
    publicEnv: apiKeyPublic ? 'SET' : 'UNSET'
  });

  return apiKeyEnv || apiKeyPublic;
};

// Chat history type
export interface ChatMessage {
  role: 'user' | 'model';
  parts: string;
}

// Gemini Chat Service
export class GeminiChatService {
  private model;
  private chat;

  constructor() {
    try {
      // Get API key
      const apiKey = getApiKey();

      // Validate API key
      if (!apiKey) {
        console.error('CRITICAL: No Gemini API Key found in environment variables');
        throw new Error(`
          Gemini API Key is missing. 
          Please set GEMINI_API_KEY or NEXT_PUBLIC_GEMINI_API_KEY 
          in your .env or .env.local file.
        `);
      }

      // Log the key source (for debugging, don't log the actual key)
      console.log('Gemini API Key sourced from:', 
        process.env.GEMINI_API_KEY ? 'server-side env' : 
        process.env.NEXT_PUBLIC_GEMINI_API_KEY ? 'public env' : 'unknown'
      );

      // Initialize Gemini client
      const genAI = new GoogleGenerativeAI(apiKey);

      // Use Gemini 1.5 Flash model
      this.model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });

      // Initialize chat session
      this.chat = this.model.startChat({
        history: [
          {
            role: "user",
            parts: [
              {text: MY_THESIS},
            ],
          },
        ],
        generationConfig: {
          maxOutputTokens: 4096,
          temperature: 0.7,
          topP: 1,
          topK: 40
        }
      });
    } catch (error) {
      console.error('Gemini Service Initialization Error:', error);
      
      // Rethrow to prevent silent failures
      throw error;
    }
  }

  // Send message and get response
  async sendMessage(message: string): Promise<string> {
    try {
      if (!this.chat) {
        throw new Error('Gemini chat service not initialized');
      }

      const result = await this.chat.sendMessage(message);
      const response = result.response.text();
      
      // Log successful response for debugging
      console.log('Gemini Response:', response);
      
      return response;
    } catch (error) {
      // Detailed error logging
      console.error("Detailed Gemini API Error:", {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : 'No stack trace',
        input: message
      });

      // More informative error message
      return `Sorry, I'm experiencing difficulties. Error details: ${
        error instanceof Error ? error.message : 'Unknown error occurred'
      }. Please check your API key and try again.`;
    }
  }

  // Reset chat history
  resetChat() {
    try {
      this.chat = this.model.startChat({
        history: [],
        generationConfig: {
          maxOutputTokens: 4096,
          temperature: 0.7,
          topP: 1,
          topK: 40
        }
      });
    } catch (error) {
      console.error('Chat Reset Error:', error);
    }
  }
}
