# Shlok Nanani – Personal Website

This is my personal portfolio website built with React and Vite.  
It showcases my background, experience, projects, and skills with a modern, animated UI.

## Features

- **Animated welcome section** with bouncing profile images and intro text.
- **About section** with education, coursework, and interests.
- **Experience section** with interactive cards for roles at Wayfair, Validus, Oasis, and TA work.
- **Projects section** showing my key GitHub projects (RL, NLP, ML, robotics, and apps) with direct GitHub links.
- **Skills section** with:
  - Languages (ordered list)
  - Frameworks / Libraries (pill-style chips)
  - Tools / Software (pill-style chips)
- **Connect section** with GitHub, LinkedIn, email, and resume links.
- Responsive design and subtle animations throughout.

## Tech Stack

- **Frontend**: React, React Router, Vite
- **UI / Animation**: MUI (Material UI), Framer Motion, react-icons
- **Styling**: Tailwind CSS (via `@tailwindcss/vite`), custom CSS
- **Build & Deploy**: Vite, `gh-pages`

## Getting Started

### 1. Install dependencies

npm install### 2. Run the dev server

npm run devThen open the URL printed in the terminal (usually `http://localhost:5173/`).

### 3. Build for production

npm run buildThis outputs a production build in the `dist` directory.

## Deployment (GitHub Pages)

This project is configured to deploy to GitHub Pages using the `gh-pages` package.

1. Make sure your `vite.config` has the correct `base`:

   - For a project URL like `https://<user>.github.io/<repo>/`:

    
     export default defineConfig({
       plugins: [react(), tailwindcss()],
       base: "/<repo>/", // e.g. "/portfolio/"
     });
        - For a user site at `https://<user>.github.io/` (repo name `<user>.github.io`), use `base: "/"`.

2. Deploy:

npm run deployThis runs `npm run build` and publishes `dist` to the `gh-pages` branch.

3. In GitHub → **Settings** → **Pages**, set:

- **Source**: `gh-pages` branch
- **Folder**: `/ (root)`

After a short delay, your site will be live at the URL GitHub shows.

## Project Structure (high level)

- `src/App.jsx` – App entry with routing/layout wrapper
- `src/components/layout/Layout.jsx` – Orders sections on the page
- `src/components/sections/*` – Main sections:
  - `WelcomeSection`
  - `AboutSection`
  - `ExperienceSection`
  - `ProjectsSection`
  - `SkillsSection`
  - `ConnectSection`
  - `Footer`
- `src/components/react-bits-components/*` – Reusable animated components (particles, logo loop, etc.)
- `public/` – Static assets (images, logos, videos, resume PDF)

## Customization

- **Content**: Update text, links, and project data in the section components under `src/components/sections/`.
- **Logos / Images**: Replace assets in `public/` (e.g. `shlok_nanani_logo.png`, profile images, experience logos).
- **Colors**: Most colors are defined inline in the MUI `sx` props and in `src/index.css` (emerald + dark-gray theme).

Feel free to fork or adapt this portfolio for your own use.