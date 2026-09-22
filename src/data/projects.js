export const projects = [
  {
    slug: 'moderntech-hr',
    title: 'HR Platform for 50+ Employees',
    tagline: 'Replaced disconnected spreadsheets with a unified dashboard. Led the team as tech lead.',
    description:
      'A production-ready HR management system built to replace disconnected spreadsheets with a secure, scalable platform. Centralises employee records, attendance tracking, payroll processing, leave workflows, and performance reviews behind a JWT-authenticated API with strict role-based access control.',
    role: 'Tech Lead & Full-Stack Developer',
    tech: ['Vue 3', 'Vite', 'Bootstrap 5', 'Axios', 'Node.js', 'Express', 'JWT', 'bcryptjs', 'MySQL', 'Render', 'Aiven'],
    features: [
      'Role-based access control — HR vs employee data isolation',
      'JWT authentication with bcrypt hashing and auth rate limiting',
      'Dynamic dashboard with payroll summaries and weekly attendance charts',
      'Automated payroll calculations (Tax, UIF, Medical Aid, Pension)',
      'Digital payslips with PDF export',
      'Leave workflow: submit, approve, deny, cancel, reverse',
      '14-day attendance charts + calendar modal for historical views',
      'Performance reviews with strict validation and PDF reports',
      'Dark mode toggle across all pages'
    ],
    screenshots: [],
    github: 'https://github.com/ihtishaamj63-web',
    live: 'https://hr-project-2-moderntech-solutions-1.onrender.com',
    api: 'https://hr-project-2-moderntech-solutions.onrender.com',
    status: 'The hosted service is currently resting on its free-tier plan; the frontend remains available to explore.',
    highlights: [
      'Led integration branch and reviewed all team code for MVC compliance',
      'Built core backend: server setup, DB config, middleware, auth system',
      'Developed attendance tracking and time-off management modules',
      'Managed cloud deployment (Render + Aiven MySQL)'
    ]
  },
  {
    slug: 'cleanspaces',
    title: 'Community Cleanup Platform',
    tagline: 'Residents pooled resources to fund professional cleanups. I built payments and activation tracking.',
    description:
      'Street committees pool household contributions through the platform to fund professional weekly cleanup crews for their zones. Features live activation tracking, photo proof of work, PayFast payments, and transparent payment records — all built on a Vue 3 + Express + MySQL stack.',
    role: 'Project Manager — Payments, pricing, checkout, resident dashboard, deployment, integration',
    tech: ['Vue 3', 'Vite', 'Vue Router', 'Leaflet.js', 'SweetAlert2', 'Node.js', 'Express', 'MySQL', 'PayFast', 'Nodemailer', 'Brevo SMTP', 'Railway', 'Render'],
    features: [
      'Tiered zone subscriptions (small / medium / large) with per-household share calculation',
      'PayFast payments — card and Instant EFT with MD5 signature generation',
      'ITN webhook handling and redirect-based payment completion',
      'Live activation tracking toward 60% household participation threshold',
      'Proof of work — before/after photos with drag-to-compare slider',
      'Cleanup requests reported by residents with photo evidence',
      'Admin operations: zone approvals, crew management, payroll, reports',
      'Moderated reviews — publicly submitted, admin-approved',
      'JWT authentication with resident/admin guards on frontend and backend'
    ],
    screenshots: [],
    github: 'https://github.com/ihtishaamj63-web/CleanSpaces',
    live: 'https://cleanspaces.onrender.com',
    api: 'https://cleanspaces-production.up.railway.app/api/health',
    status: 'The hosted service is currently resting on its free-tier plan; the frontend remains available to explore.',
    highlights: [
      'Designed and built the payment flow — PayFast sandbox integration with MD5 signatures',
      'Built the resident dashboard with live activation tracking',
      'Configured pricing tiers as a single source of truth in config/plans.js',
      'Managed deployment: Railway (backend + DB), Render (frontend)'
    ]
  }
]
