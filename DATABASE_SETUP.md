# Ruesafe Database Setup Guide

## PostgreSQL Database Setup

This guide will help you set up the PostgreSQL database for the Ruesafe website.

### Prerequisites

1. PostgreSQL installed on your system
2. Database client or CLI access

### Setup Steps

#### 1. Create Database

\`\`\`sql
CREATE DATABASE ruesafe_db;
\`\`\`

#### 2. Run Initialization Script

Connect to your database and run the `scripts/init-database.sql` file:

\`\`\`bash
psql -U postgres -d ruesafe_db -f scripts/init-database.sql
\`\`\`

#### 3. Environment Variables

Add the following to your `.env.local` file:

\`\`\`
DATABASE_URL=postgresql://username:password@localhost:5432/ruesafe_db
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000
\`\`\`

### Firebase Authentication Setup

#### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication with Email/Password provider

#### 2. Add Firebase Config

Add Firebase configuration to your environment:

\`\`\`
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
FIREBASE_ADMIN_SDK_KEY=your_admin_key
\`\`\`

#### 3. Update Auth Context

Update `components/auth-context.tsx` to integrate Firebase:

\`\`\`typescript
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
\`\`\`

### Database Tables

#### Users
Stores user account information

#### Inquiries
Stores contact form submissions for lead management

#### Projects
Tracks client projects and their status

#### Reviews
Stores client testimonials and ratings

#### Services
Manages available services (pre-populated)

### Useful Commands

\`\`\`bash
# Connect to database
psql -U username -d ruesafe_db

# View all tables
\dt

# Backup database
pg_dump -U username ruesafe_db > backup.sql

# Restore database
psql -U username ruesafe_db < backup.sql
\`\`\`

### Next Steps

1. Set up Firebase authentication
2. Install required packages: `npm install firebase next-themes`
3. Update API routes to use the database
4. Create user dashboard pages
5. Implement inquiry email notifications
