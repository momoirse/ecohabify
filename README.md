# RIACT Risk Assessment Platform

## Overview
A comprehensive web application for risk-informed, asset-centric (RIACT) framework development, leveraging Google Gemini AI and Supabase for advanced risk assessment and data management.

## Features
- Multi-section RIACT form generation
- AI-powered suggestion and brainstorming
- Supabase database integration
- Responsive design

## Technology Stack
- Frontend: Next.js (React)
- Backend: 
  - Google Gemini API
  - Supabase
- State Management: React Context
- Styling: Tailwind CSS

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- Supabase account
- Google Cloud account (for Gemini API)

### Environment Variables
Create a `.env.local` file with the following:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
GOOGLE_GEMINI_API_KEY=your_google_gemini_api_key
```

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash 
   npm run dev
   ```

## Database Setup
1. Create a new Supabase project
2. Run the SQL in `lib/supabase/schema.sql` to set up tables

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
MIT License

## Contact
Developed by [Your Name/Organization]
