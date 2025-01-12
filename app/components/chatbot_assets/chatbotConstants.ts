// Language Proficiency Levels
const LANGUAGE_LEVELS = {
  A1: {
    name: 'Beginner',
    description: 'Basic communication, simple phrases',
    complexity: 1
  },
  A2: {
    name: 'Elementary',
    description: 'Simple conversations, basic needs',
    complexity: 2
  },
  B1: {
    name: 'Intermediate',
    description: 'Familiar topics, clear communication',
    complexity: 3
  },
  B2: {
    name: 'Upper Intermediate',
    description: 'Complex discussions, nuanced expression',
    complexity: 4
  },
  C1: {
    name: 'Advanced',
    description: 'Sophisticated, academic-level communication',
    complexity: 5
  },
  C2: {
    name: 'Proficient',
    description: 'Near-native fluency, highly sophisticated',
    complexity: 6
  }
};

// Prompt Style Templates have none
const PROMPT_STYLES = {
  none: {
    prefix: "",
    tone: ""
  },
  formal: {
    prefix: "In a formal and professional manner, ",
    tone: "academic and precise"
  },
  casual: {
    prefix: "In a friendly and conversational way, ",
    tone: "relaxed and approachable"
  },
  technical: {
    prefix: "Using precise technical language, ",
    tone: "detailed and analytical"
  },
  creative: {
    prefix: "With imaginative and engaging language, ",
    tone: "innovative and inspiring"
  }
};

// Advanced Prompt Customization Options
const PROMPT_CUSTOMIZATIONS = [
  { 
    id: 'no_adjectives', 
    label: 'No Adjectives', 
    description: 'Avoid using descriptive adjectives' 
  },
  { 
    id: 'low_perplexity', 
    label: 'Lower Perplexity', 
    description: 'Use more predictable and straightforward language' 
  },
  { 
    id: 'smooth_transition', 
    label: 'Smoother Transitions', 
    description: 'Ensure seamless flow between sentences and ideas' 
  },
  { 
    id: 'varied_sentence', 
    label: 'Varied Sentence Structure', 
    description: 'Mix short and long sentences for better readability' 
  },
  { 
    id: 'technical_consistency', 
    label: 'Consistent Technical Terms', 
    description: 'Maintain consistent terminology throughout' 
  }
];

export { LANGUAGE_LEVELS, PROMPT_STYLES, PROMPT_CUSTOMIZATIONS };
