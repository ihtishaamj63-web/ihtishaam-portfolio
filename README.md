# ihtishaam.dev

Portfolio. Vue 3 + Vite. Static build, no backend, lives on Render.

## Run locally

npm install
npm run dev

## Deploy on Render (static site)

Build command: npm run build
Publish directory: dist

The contact form sends messages through FormSubmit. Verify the first confirmation
email sent to the portfolio inbox before the form can deliver messages.

## Editing content (no component changes needed)

- Projects: src/data/projects.js
- Experience and education: src/data/experience.js
- Skills: src/data/skills.js
- Links (GitHub, LinkedIn, email): src/data/links.js
- Screenshots: put files in public/images, then set the paths in projects.js
