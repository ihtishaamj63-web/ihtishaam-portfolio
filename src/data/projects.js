// PROJECTS. Add a new one by copying an object into this array.
//
// Screenshots: drop files into /public/images and set the paths here,
// e.g. thumbnail: '/images/cleanspaces-dashboard.png'
// Anything left null renders as a clean typographic placeholder,
// so the site never shows a broken image.

export const projects = [
  {
    id: 'pitchside',
    name: 'PitchSide',
    year: '2026',
    role: 'Creator & Developer',
    summary:
      'PitchSide is a fictional football league simulator. Create a league, follow every matchday live, and explore match reports, standings, player statistics, awards and club profiles.',

    overview:
      'PitchSide is a fictional football league simulator. Create a league, follow every matchday live, and explore match reports, standings, player statistics, awards and club profiles. Open the preloaded Demo league, choose a team to manage, set its tactics, and simulate the next matchday. League routes include /leagues/:id/table, /leagues/:id/fixtures, /leagues/:id/live, /leagues/:id/stats and /leagues/:id/awards; match, club and player pages live at /matches/:id, /clubs/:id and /players/:id. The Live hub follows every fixture in the current round, with server clock, revealed commentary, match stats and line-ups that become the final report. All club and player names, ratings and crests are fictional; the project uses no real-world club, league, player or badge data.',

    roleDetail:
      'Built as a full-stack application: a React and TypeScript frontend (Vite) talking to an Express 5 API backed by PostgreSQL, with Docker Compose for local development and automated backend and frontend tests. Match simulation is deterministic and seeded, with transactional matchday writes so concurrent requests cannot simulate the same round twice or leave a partial round. Live delivery uses an in-process SSE ticker with polling fallback.',

    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Express 5',
      'PostgreSQL',
      'Docker Compose',
      'Jest',
      'ts-jest',
      'Supertest',
    ],

    achievements: [
      'Fictional league creation with circle-method round-robin fixtures and home/away swap in the second half',
      'Live matchday hub with server clock, revealed commentary, match stats, line-ups and final reports',
      'Standings, fixtures, player statistics (goals, assists, xG, key passes, tackles, cards, goals per 90), awards, club and player profiles',
      'Deterministic seeded match simulation with transactional matchday writes and spoiler-safe event reveal',
      'Configurable live speed plus instant full-season simulation; notifications stored per league in the browser',
      'Managed-team tactics saved per league in the browser, applied one matchday at a time',
    ],

    note: 'Runs locally via Docker Compose (Docker required). All clubs, players and crests are fictional; no live public demo is currently available.',

    desktopShot: '/images/pitchside home page.png',
    desktopShotWidth: 1613,
    desktopShotHeight: 872,
    mobileShot: '/images/pitchside 390 x 844.png',
    mobileShotWidth: 349,
    mobileShotHeight: 767,

    github: 'https://github.com/ihtishaamj63-web/Pitch-Side',
    live: null,
  },
  {
    id: 'cleanspaces',
    name: 'CleanSpaces',
    year: '2026',
    role: 'Project manager & full-stack',
    summary:
      'CleanSpaces helps neighborhoods fund weekly cleanup crews through shared zone subscriptions. I managed the project and built its pricing, payments, and live dashboard.',
    thumbnail: null,

    overview:
      'CleanSpaces is built around a simple funding idea: if enough households in a zone subscribe, the zone can afford a professional weekly cleanup crew. The platform handles tiered subscriptions (small, medium, large zones) with per-household share calculation, live activation tracking toward the 60% participation threshold, PayFast payments (card and instant EFT), proof-of-work photos, moderated public reviews, and admin operations for zone approvals, crew management and reports.',

    roleDetail:
      'I managed the project and owned the payment system end to end: pricing tiers designed as a single source of truth in config/plans.js, the checkout flow, PayFast sandbox integration with MD5 signature generation and ITN webhook handling, and the resident dashboard with live activation tracking. Also handled deployment: Railway for backend and database, Render for the frontend.',

    tech: [
      'Vue 3',
      'Vite',
      'Vue Router',
      'Leaflet.js',
      'SweetAlert2',
      'Node.js',
      'Express',
      'MySQL',
      'PayFast',
      'Nodemailer',
      'Brevo SMTP',
      'Railway',
      'Render',
    ],

    achievements: [
      'PayFast sandbox integration end to end: card and instant EFT, MD5 signature generation, ITN webhook handling',
      'Pricing tiers as a single source of truth, with per-household share calculation per zone size',
      'Resident dashboard with live activation tracking toward the 60% participation threshold',
      'Proof-of-work photos with a drag-to-compare before and after slider',
      'Leaflet.js zone maps, moderated public reviews, and admin operations (approvals, crew management, reports)',
      'Transactional email via Nodemailer and Brevo SMTP',
    ],

    note: 'Runs on free-tier hosting. The backend sleeps when idle, so give the first request a moment.',

    desktopShot: '/images/cleanspaces-desktop.jpg',
    desktopShotWidth: 1200,
    desktopShotHeight: 488,
    mobileShot: '/images/cleanspaces-mobile.jpg',
    mobileShotWidth: 362,
    mobileShotHeight: 779,

    github: 'https://github.com/ihtishaamj63-web/CleanSpaces',
    live: 'https://cleanspaces.onrender.com',
  },
  {
    id: 'hr-platform',
    name: 'ModernTech Solutions',
    year: '2026',
    role: 'Tech lead · full-stack',
    summary:
      'A full HR platform built with a team of four. Employee records, automated payroll with tax, UIF and medical aid deductions, attendance analytics, leave workflows and performance reviews, all behind role-based access control.',
    thumbnail: null,

    overview:
      'One system for the whole employment lifecycle: employee profiles, automated payroll that calculates tax, UIF, medical aid and pension deductions, attendance tracking with 14-day visual analytics, leave request workflows with approval chains, digital payslips with PDF export, and performance reviews. Role-based access control means every employee sees only their own data.',

    roleDetail:
      'I was tech lead for a team of four: I ran the integration branch, reviewed all code for MVC compliance, and kept the architecture consistent. I built the core backend myself (server setup, database config, middleware, JWT authentication with bcrypt hashing and login rate limiting), the attendance module with 14-day charts and a calendar modal for historical lookups, and the complete time-off workflow.',

    tech: [
      'Vue 3',
      'Vite',
      'Bootstrap 5',
      'Axios',
      'Node.js',
      'Express',
      'JWT',
      'bcrypt',
      'MySQL',
      'Render',
      'Aiven',
    ],

    achievements: [
      'Automated payroll: tax, UIF, medical aid and pension deductions, with digital payslips and PDF export',
      'JWT authentication with bcrypt hashing and login rate limiting',
      'Attendance module: 14-day visual charts plus a calendar modal for historical lookups',
      'Complete leave workflow: submit, approve, deny, cancel and reverse, with strict validation',
      'Managed deployment: Render for the app, Aiven for MySQL',
    ],

    note: 'Runs on free-tier hosting. The backend sleeps when idle, so give the first request a moment.',

    desktopShot: '/images/moderntech-desktop.jpg',
    desktopShotWidth: 1200,
    desktopShotHeight: 496,
    mobileShot: '/images/moderntech-mobile.jpg',
    mobileShotWidth: 362,
    mobileShotHeight: 685,

    github: 'https://github.com/ihtishaamj63-web/HR-Project-2-ModernTech-Solutions',
    live: 'https://hr-project-2-moderntech-solutions-1.onrender.com',
  },
  {
    id: 'market-pulse',
    name: 'Web Scraping Project',
    year: '2026',
    role: 'Team lead · full-stack',
    summary:
      'A real-time market monitoring dashboard. It tracks retail products and digital assets, with live scraping, price history, watchlists, top movers, and interactive 3D visualizations.',
    thumbnail: null,

    overview:
      'Market Pulse monitors retail electronics and cryptocurrency prices in one dashboard. Scheduled scrapers collect data into SQLite, while the Vue interface brings together live market statistics, search and filters, top movers, watchlists, scrape history, CSV exports, and an interactive Three.js chart. Its source and scraper structure can be extended to additional markets.',

    roleDetail:
      'I led the team and guided the system architecture, reviewed contributions, and approved integrations across the backend and frontend workstreams. The team split implementation across Flask APIs, scraping and storage, the Vue dashboard, watchlists and exports, and Three.js visualizations.',

    tech: [
      'Flask',
      'Vue 3',
      'Three.js',
      'SQLite',
      'APScheduler',
      'Requests',
      'BeautifulSoup4',
      'Flask-CORS',
      'Pinia',
      'Vue Router',
      'Axios',
      'Vite',
      'Gunicorn',
    ],

    achievements: [
      'Combined retail electronics and cryptocurrency price monitoring in one dashboard',
      'Scheduled background scraping with scrape history and market success statistics',
      'Interactive Three.js market visualization, top movers, and a persistent watchlist',
      'Search, source and price filters, and CSV export for market data and history',
      'Managed a cross-functional team and reviewed and approved integrated contributions',
    ],

    desktopShot: '/images/market-pulse-desktop.jpg',
    desktopShotWidth: 1200,
    desktopShotHeight: 574,
    mobileShot: '/images/market-pulse-mobile.jpg',
    mobileShotWidth: 367,
    mobileShotHeight: 807,

    github: 'https://github.com/adamjattiem12-gif/-Flask-Web-Scraping-Dashboard',
    live: 'https://market-pulse-11gq.onrender.com',
  },
]
