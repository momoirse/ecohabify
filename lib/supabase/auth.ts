import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

// Dummy user data
const DUMMY_USER = {
  id: 'dummy-user-123',
  email: 'user@example.com',
  name: 'Demo User',
  role: 'user',
  user_metadata: {
    name: 'Demo User'
  }
};

// Dummy authentication actions
export const authActions = {
  // Dummy user registration
  signUp: async (email: string, password: string, name: string) => {
    console.warn('Using dummy authentication - sign up');
    return { 
      user: DUMMY_USER,
      session: null 
    };
  },

  // Dummy user login
  signIn: async (email: string, password: string) => {
    // Simple validation (just for demonstration)
    if (email === 'user@example.com' && password === 'password123') {
      return { 
        user: DUMMY_USER,
        session: null 
      };
    }
    throw new Error('Invalid credentials');
  },

  // Dummy logout
  signOut: async () => {
    console.warn('Using dummy authentication - sign out');
    return null;
  },

  // Dummy profile update
  updateProfile: async (userId: string, profileData: any) => {
    console.warn('Using dummy authentication - update profile');
    return [{ ...DUMMY_USER, ...profileData }];
  }
};

// Dummy server-side user retrieval
export async function getCurrentUser() {
  return DUMMY_USER;
}

// Dummy user by ID retrieval
export async function getUserById(userId: string) {
  return DUMMY_USER;
}

// Placeholder Supabase clients (not used in dummy mode)
export const createServerSupabaseClient = () => null;
export const createClientSupabaseClient = () => null;
