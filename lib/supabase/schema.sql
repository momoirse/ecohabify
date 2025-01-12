-- Supabase Database Schema for User Authentication and Profiles

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users Table with Enhanced Metadata
CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    avatar_url TEXT,
    role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin', 'moderator')),
    last_login TIMESTAMPTZ,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- User Profiles for Additional Information
CREATE TABLE user_profiles (
    profile_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID UNIQUE REFERENCES users(user_id),
    bio TEXT,
    location TEXT,
    company TEXT,
    website TEXT,
    social_links JSONB,
    preferences JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Authentication Logs
CREATE TABLE auth_logs (
    log_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(user_id),
    login_time TIMESTAMPTZ DEFAULT NOW(),
    logout_time TIMESTAMPTZ,
    ip_address INET,
    device_info JSONB,
    status TEXT CHECK (status IN ('success', 'failed'))
);

-- Existing Project and Form Tables
CREATE TABLE projects (
    project_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(user_id),
    title TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE riact_forms (
    riact_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES projects(project_id),
    
    -- JSON fields to store structured form data
    scope JSONB,
    context JSONB,
    identification JSONB,
    analysis JSONB,
    evaluation JSONB,
    treatment JSONB,
    recording_and_reporting JSONB,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE suggestions (
    suggestion_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    riact_id UUID REFERENCES riact_forms(riact_id),
    section TEXT NOT NULL,
    content JSONB NOT NULL,
    status TEXT CHECK (status IN ('accepted', 'rejected', 'customized')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security Policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE auth_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE riact_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE suggestions ENABLE ROW LEVEL SECURITY;

-- RLS Policy for Users
CREATE POLICY "Users can view and edit their own profile" 
ON users FOR ALL 
USING (auth.uid() = user_id);

CREATE POLICY "Users can view and edit their own profile details" 
ON user_profiles FOR ALL 
USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own auth logs" 
ON auth_logs FOR SELECT 
USING (auth.uid() = user_id);

-- Triggers for Automatic Timestamps
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_modtime
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_user_profiles_modtime
BEFORE UPDATE ON user_profiles
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();
