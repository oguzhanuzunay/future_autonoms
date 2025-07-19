# Future Autonoms - AI Transformation Platform

Modern, enterprise-grade AI transformation platform with advanced admin panel system.

## 🚀 Features

### 🌐 Marketing Website

- Modern dark-themed design with glassmorphism effects
- Lead capture with international phone input
- Product showcase with animated cards
- Neuromarketing-enhanced copy and CTAs
- Brand testimonials and social proof
- Responsive mobile-first design

### 🔐 Admin Panel System

- **Clerk Authentication** integration
- Role-based navigation and access control
- Modern dashboard with real-time metrics
- Agent management interface
- Multi-language support (20+ languages)
- Dark theme with gradient accents

### 🤖 AI Agent Suite

- **DN.Sales™** - AI Sales Representative
- **DN.Support™** - Customer Service AI
- **DN.HR™** - Human Resources Assistant
- **DN.Finance™** - Financial AI Analyst
- **DN.Process™** - Process Optimization AI
- **DN.Mail™** - Email Management AI
- **DN.Survey™** - Customer Feedback AI

## 🛠️ Tech Stack

- **Framework:** Next.js 15.3.4 (App Router)
- **Authentication:** Clerk
- **UI Components:** ShadCN UI + Radix UI
- **Styling:** Tailwind CSS v4.1
- **Typography:** Geist Sans & Geist Mono
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd future_autonoms
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Configure Clerk Authentication:
   - Create account at [Clerk Dashboard](https://dashboard.clerk.com)
   - Create new application
   - Copy your keys to `.env.local`:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_key_here
```

5. Run development server:

```bash
npm run dev
```

6. Open [http://localhost:3001](http://localhost:3001)

## 🔧 Admin Panel Setup

### Clerk Configuration

1. **Domain Settings:**

   - Development: `http://localhost:3001`
   - Production: Your production domain

2. **Authentication URLs:**

   - Sign In: `/sign-in`
   - Sign Up: `/sign-up`
   - After Sign In: `/panel`
   - After Sign Up: `/panel`

3. **Protected Routes:**
   - All `/panel/*` routes require authentication
   - Automatic redirect to sign-in for unauthenticated users

### Accessing the Panel

1. **From Main Website:**

   - Click "Panel Girişi" button in navigation
   - Sign in with your credentials
   - Automatically redirected to `/panel`

2. **Direct Access:**
   - Visit `/panel` URL
   - Will redirect to sign-in if not authenticated

## 📁 Project Structure

```
app/
├── panel/                 # Admin panel pages
│   ├── agents/           # Agent management pages
│   │   ├── sales/       # DN.Sales™ agent page
│   │   ├── support/     # DN.Support™ agent page
│   │   └── ...          # Other agent pages
│   ├── layout.tsx       # Panel layout with sidebar
│   └── page.tsx         # Dashboard page
├── sign-in/             # Authentication pages
├── sign-up/
├── page.tsx             # Marketing homepage
└── layout.tsx           # Root layout

components/
├── panel/               # Panel-specific components
│   └── app-sidebar.tsx  # Navigation sidebar
├── sections/            # Homepage sections
├── ui/                  # ShadCN UI components
└── Navigation.tsx       # Main navigation

middleware.ts            # Clerk authentication middleware
```

## 🎨 Design System

### Colors

- **Primary:** Purple-Blue-Cyan gradient
- **Background:** Dark theme with transparency
- **Accent:** Role-based colors (Green for Sales, Blue for Support, etc.)

### Components

- **Glassmorphism:** `bg-card/50 backdrop-blur-sm`
- **Borders:** `border-border/50`
- **Gradients:** `from-purple-400 via-blue-400 to-cyan-400`
- **Animations:** Framer Motion + Tailwind transitions

## 🔐 Authentication Flow

1. User visits `/panel`
2. Middleware checks authentication
3. If not authenticated → redirect to `/sign-in`
4. After successful sign-in → redirect to `/panel`
5. Panel layout loads with user-specific content

## 🚢 Deployment

### Vercel (Recommended)

1. Connect your Git repository
2. Add environment variables in Vercel dashboard
3. Update Clerk domain settings to production URL
4. Deploy

### Environment Variables for Production

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_your_key_here
CLERK_SECRET_KEY=sk_live_your_key_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/panel
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/panel
```

## 📧 Contact & Support

For technical support or business inquiries:

- Email: info@futureautonoms.com
- Website: [Future Autonoms](https://futureautonoms.com)

## 📄 License

This project is proprietary software. All rights reserved.

---

Built with ❤️ by Future Autonoms Team
