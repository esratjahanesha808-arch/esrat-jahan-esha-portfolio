// Central project data — single source of truth
export const PROJECTS = [
  {
    slug: 'oasis-pools',
    title: 'Luxury Pool Contractor Landing Page',
    category: 'Frontend Development',
    year: '2024',
    github: 'https://github.com/esratjahanesha808-arch/pool-builder.git',
    live: 'https://oasis-pools-builder.netlify.app',
    image: '/src/assets/projects/pool-mockup.png',
    tech: ['HTML5', 'Vanilla JavaScript', 'Tailwind CSS v4', 'Node.js', 'Netlify'],
    summary:
      'Conducted competitive UX/UI analysis across top-ranking luxury pool builder websites in the UK and Austin markets; engineered the layout to solve common friction points and low conversion patterns found in lower-ranked competitor sites.',
    details: [
      'Conducted competitive UX/UI analysis across top-ranking luxury pool builder websites in the UK and Austin markets; engineered the layout to solve common friction points and low conversion patterns found in lower-ranked competitor sites.',
      'Engineered a high-performance, responsive portfolio landing page utilizing HTML5, Vanilla JavaScript, and Tailwind CSS v4 to ensure lightning-fast load times and clean semantic architecture.',
      'Implemented a premium, responsive Glassmorphism UI leveraging custom CSS layers, PostCSS, and advanced backdrop filters to elevate the visual aesthetic to meet luxury market standards.',
      'Architected the frontend for seamless backend integration, decoupling the client-side form handling and static pages so full-stack functionality (databases, multi-page routing) can be rapidly deployed based on future client requirements.',
      'Built a zero-dependency Node.js static file server (server.js) to streamline the local development environment and eliminate dependency bloat.',
      'Configured and deployed the application on Netlify, optimizing Core Web Vitals by implementing custom security headers and asset caching policies via netlify.toml.',
    ],
  },
  {
    slug: 'luxora',
    title: 'Luxora — Luxury Perfume Marketplace & Admin Ecosystem',
    category: 'Full-Stack Development',
    year: '2024',
    github: 'https://github.com/esratjahanesha808-arch/perfume-e-commerce-store.git',
    live: 'https://luxora-esha707.vercel.app',
    image: '/src/assets/projects/luxora-mockup.png',
    tech: ['Next.js 16', 'React 19', 'TypeScript 5', 'PostgreSQL', 'Prisma ORM', 'Auth.js', 'Stripe', 'Tailwind CSS v4', 'Zustand', 'Recharts'],
    summary:
      'Engineered a full-stack e-commerce monolith using Next.js 16 (App Router), React 19, and TypeScript 5, isolating core business logic into a dedicated, decoupled service layer.',
    details: [
      'Engineered a full-stack e-commerce monolith using Next.js 16 (App Router), React 19, and TypeScript 5, isolating core business logic into a dedicated, decoupled service layer.',
      'Designed a relational database schema using PostgreSQL (Neon Serverless) and Prisma ORM to manage data pipelines for multi-role users, inventory tracking, and sales analytics.',
      'Implemented secure authentication and protection layers using Auth.js (NextAuth v5) for Customer/Admin roles and Upstash Redis for API rate limiting and security enforcement.',
      'Integrated production-ready financial and notification pipelines via Stripe Embedded Checkout (with webhooks for real-time inventory updates) and transactional emails through Resend.',
      'Developed a highly interactive UI/UX utilizing Tailwind CSS v4 and Zustand for seamless, state-driven cart mechanics alongside live data visualization dashboards built with Recharts.',
      'Architected the core system for high scalability and expansion, strategically designing endpoints to seamlessly integrate upcoming multi-page routes and a Python-based FastAPI microservice for AI-driven recommendations and intelligent features.',
    ],
  },
];
