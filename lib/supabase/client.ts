import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database schema
export interface User {
  user_id: string;
  name: string;
  email: string;
  created_at: string;
}

export interface Project {
  project_id: string;
  user_id: string;
  title: string;
  description?: string;
  created_at: string;
}

export interface RIACTForm {
  riact_id: string;
  project_id: string;
  scope: Record<string, any>;
  context: Record<string, any>;
  identification: Record<string, any>;
  analysis: Record<string, any>;
  evaluation: Record<string, any>;
  treatment: Record<string, any>;
  recording_and_reporting: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface Suggestion {
  suggestion_id: string;
  riact_id: string;
  section: string;
  content: Record<string, any>;
  status: 'accepted' | 'rejected' | 'customized';
  created_at: string;
}
