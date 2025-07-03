import { GoogleGenerativeAI, GenerativeModel, GenerateContentResult } from "@google/generative-ai";

interface SuggestionContext {
  scopeLevel?: string;
  riskType?: string;
  criticalAssets?: string[];
  geographicContext?: string;
}

class GeminiAPIClient {
  private genAI: GoogleGenerativeAI | null = null;
  private model: GenerativeModel | null = null;

  constructor() {
    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    if (!apiKey) {
      console.error('❌ Google Gemini API key is not set. AI suggestions will be disabled.');
      return;
    }
    
    try {
      this.genAI = new GoogleGenerativeAI(apiKey);
      this.model = this.genAI.getGenerativeModel({ 
        // model: "gemini-1.5-flash",
        model: "gemini-2.0-flash-lite-preview-02-05",
        generationConfig: {
          maxOutputTokens: 500,
          temperature: 0.7,
          topP: 0.9
        }
      });
    } catch (error) {
      console.error('🚨 Failed to initialize Gemini API:', error);
    }
  }

  async generateSuggestions(section: string, sectionData: any, context?: SuggestionContext): Promise<string[]> {
    const mergedContext = { ...context, ...sectionData };

    if (!this.model) {
      console.warn('⚠️ Gemini API not initialized. Returning default suggestions.');
      return this.getDefaultSuggestions(section);
    }

    try {
      const prompt = this.constructEnhancedPrompt(section, mergedContext);
      const result = await this.model.generateContent(prompt);
      return this.parseAdvancedSuggestions(result);
    } catch (error) {
      console.error(`❌ Error generating suggestions for ${section}:`, error);
      return this.getDefaultSuggestions(section);
    }
  }

  private constructEnhancedPrompt(section: string, context: SuggestionContext): string {
    const baseInstructions = `
You are an expert risk assessment AI assistant. Provide concise, actionable suggestions.
Focus on strategic, innovative, and practical recommendations.
`;

    const sectionPrompts: Record<string, (context: SuggestionContext) => string> = {
      'scope': (ctx) => `
${baseInstructions}
Generate strategic risk assessment suggestions for ${ctx.scopeLevel || 'multi-level'} geographic contexts.
Consider cross-boundary implications, scalability, and systemic risk factors.
Recommendations should be adaptable and forward-looking.
`,
      'context': (ctx) => `
${baseInstructions}
Develop comprehensive risk context for ${ctx.riskType || 'multi-hazard'} scenarios.
Analyze stakeholder perspectives, critical infrastructure (${ctx.criticalAssets?.join(', ') || 'various assets'}), 
and potential cascading effects.
`,
      'identification': (ctx) => `
${baseInstructions}
Identify emerging and potential disaster risks in ${ctx.geographicContext || 'complex environments'}.
Focus on:
- Hidden interdependencies
- Systemic vulnerabilities
- Innovative risk detection methods
`,
      // Add more section-specific prompts...
    };

    return sectionPrompts[section]?.(context) || `
${baseInstructions}
Generate strategic risk assessment suggestions for a comprehensive approach.
`;
  }

  private parseAdvancedSuggestions(result: GenerateContentResult): string[] {
    try {
      const text = result.response.text();
      const suggestionRegex = /•\s*(.+?)(?=\n•|$)/gs;
      const matches = text.matchAll(suggestionRegex);
      const suggestions = Array.from(matches).map(match => match[1].trim());
      
      return suggestions.length > 0 
        ? suggestions 
        : this.getDefaultSuggestions('default');
    } catch (error) {
      console.error('❌ Failed to parse AI suggestions:', error);
      return this.getDefaultSuggestions('default');
    }
  }

  private getDefaultSuggestions(section: string): string[] {
    const defaultMap: Record<string, string[]> = {
      'scope': [
        'Consider multi-level geographic risk assessment',
        'Develop adaptive boundary strategies',
        'Analyze cross-regional risk interactions'
      ],
      'context': [
        'Identify key stakeholder perspectives',
        'Map critical infrastructure vulnerabilities',
        'Develop comprehensive risk ecosystem model'
      ],
      'default': [
        'Conduct thorough risk landscape analysis',
        'Develop adaptive and resilient strategies',
        'Implement continuous monitoring mechanisms'
      ]
    };

    return defaultMap[section] || defaultMap['default'];
  }
}

export const geminiAPI = new GeminiAPIClient();
