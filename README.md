# Uptime Monitoring SaaS Landing Page

A modern, high-converting pre-launch landing page for an uptime monitoring and status page SaaS.

## Tech Stack
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- Framer Motion (animations)
- React Hook Form + Zod (form handling/validation)
- Lucide React (icons)

## Features
- Dark theme with glassmorphism and gradients
- Responsive, mobile-first design
- Animated sections and feature cards
- Email capture with validation and loading/success/error states
- Ready for Resend and Supabase integration

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
```bash
npm run dev
```
3. Open [http://localhost:3000](http://localhost:3000)

## API Integration
- **Resend**: Integrate in `app/api/waitlist/route.ts` for transactional emails.
- **Supabase**: Integrate in `app/api/waitlist/route.ts` to store waitlist emails.
- **Analytics**: Add tracking in the same API route or in the form component.

## Customization
- Update gradients and colors in `tailwind.config.js`.
- Replace dashboard/chart placeholder in `HeroSection` with your own visuals.

## Success Metrics
- Email capture conversion rate
- Time spent on page
- Mobile responsiveness
- Page load speed

---

© 2024 Uptime SaaS. All rights reserved.
