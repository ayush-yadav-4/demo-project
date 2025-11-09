# Ruesafe - Modern Digital Solutions Website

A cutting-edge Next.js website for Ruesafe, showcasing digital transformation services with modern animations, dark/light theme support, and comprehensive authentication.

## Features

✨ **Modern Design**
- Beautiful dark/light theme toggle
- Smooth animations throughout
- Responsive design for all devices
- Glassmorphism UI elements
- Animated hero section

🔐 **Authentication**
- Firebase email/password authentication
- Sign up and sign in modals
- Protected user dashboard (ready to build)

📊 **Database Integration**
- PostgreSQL for user data storage
- Contact form submissions tracking
- Project management system
- Client reviews and testimonials

🎯 **Complete Pages**
- Landing page with hero section
- Services page with 6 service categories
- Individual service detail pages
- About Us page with company information
- Pricing page with plan comparison
- Contact page with form
- Service process workflows

📱 **Performance**
- Next.js 16 with App Router
- Server-side rendering
- Optimized images
- Fast page loads

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS, Custom Animations
- **Authentication**: Firebase
- **Database**: PostgreSQL
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database
- Firebase project

### Installation

1. **Clone the repository**
\`\`\`bash
git clone <your-repo-url>
cd ruesafe-website
npm install
\`\`\`

2. **Set up environment variables**

Create a `.env.local` file:

\`\`\`env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/ruesafe_db

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
FIREBASE_ADMIN_SDK_KEY=your_admin_key

# Development
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000
\`\`\`

3. **Set up PostgreSQL Database**

\`\`\`bash
psql -U postgres -d ruesafe_db -f scripts/init-database.sql
\`\`\`

4. **Install Firebase packages**

\`\`\`bash
npm install firebase @firebase/auth
\`\`\`

5. **Run development server**

\`\`\`bash
npm run dev
\`\`\`

Visit `http://localhost:3000` to see the website.

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── globals.css             # Global styles and animations
│   ├── page.tsx                # Landing page
│   ├── about/page.tsx          # About Us page
│   ├── pricing/page.tsx        # Pricing page
│   ├── contact/page.tsx        # Contact page
│   └── services/
│       ├── page.tsx            # Services overview
│       ├── web-development/    # Individual service pages
│       ├── app-development/
│       ├── digital-marketing/
│       ├── erp-solutions/
│       ├── software-development/
│       └── payment-gateway/
├── components/
│   ├── navbar.tsx              # Navigation with auth
│   ├── footer.tsx              # Footer
│   ├── hero-section.tsx        # Landing hero
│   ├── services-preview.tsx    # Services grid
│   ├── auth-context.tsx        # Auth provider
│   ├── auth-modal.tsx          # Auth modal
│   ├── sign-in-form.tsx        # Sign in form
│   ├── sign-up-form.tsx        # Sign up form
│   └── ui/                     # Shadcn UI components
├── scripts/
│   └── init-database.sql       # Database initialization
└── public/
    └── images/                 # Static images
\`\`\`

## Key Features Explained

### Dark/Light Theme

The theme toggle in the navbar switches between dark and light modes. The theme is persisted using next-themes.

### Authentication

- Sign up and sign in are available via modal from the navbar
- Firebase handles authentication securely
- User data is stored in PostgreSQL

### Service Pages

Each service has its own detailed page with:
- Service description
- Key features
- Process breakdown
- Technologies used

### Animations

Custom Tailwind animations include:
- `animate-slide-in-left/right/up` - Entrance animations
- `animate-fade-in` - Fade animations
- `animate-float` - Floating effect
- `animate-glow` - Glowing text effect
- `animate-gradient-shift` - Animated gradient

### Responsive Design

All pages are fully responsive:
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

## API Integration

### Contact Form
The contact form in `/contact` stores submissions in the `inquiries` table. Enhance by adding:
- Email notifications
- Confirmation emails
- Admin dashboard

### User Management
Ready to implement:
- User dashboard at `/dashboard`
- Profile pages
- Project history
- Order management

## Deployment

### Deploy to Vercel

1. Push to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy

\`\`\`bash
vercel
\`\`\`

### Set up database on production

Use managed PostgreSQL services:
- Neon
- Supabase
- Vercel Postgres

## Customization

### Colors

Edit color tokens in `app/globals.css`:

\`\`\`css
:root {
  --primary: oklch(0.4 0.2 280);
  --accent: oklch(0.6 0.25 50);
  /* ... other colors ... */
}
\`\`\`

### Content

- Update service descriptions in respective pages
- Edit company info in About page
- Modify pricing in Pricing page
- Update contact info in Footer

### Animations

Add new animations in `app/globals.css` in the `@keyframes` section.

## Performance Optimization

- Images use Next.js Image component
- Code splitting with dynamic imports
- CSS is optimized with Tailwind
- Database queries are indexed

## Security

- Firebase handles authentication securely
- Environment variables protect sensitive data
- HTTPS enforced on production
- Row-level security on database (ready to implement)

## Next Steps

1. ✅ Integrate Firebase authentication
2. ✅ Connect PostgreSQL database
3. Set up email notifications for inquiries
4. Create user dashboard
5. Add payment processing (if needed)
6. Implement blog section
7. Add analytics tracking
8. Set up CI/CD pipeline

## Support & Maintenance

For updates and improvements:
1. Regular dependency updates
2. Security patches
3. Performance monitoring
4. User feedback integration

## License

This project is proprietary to Ruesafe. All rights reserved.

## Contact

For technical support or customization:
- Email: support@ruesafe.com
- Phone: +1 (234) 567-890
- Website: https://ruesafe.com
