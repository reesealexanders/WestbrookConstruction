# Project Documentation

## Abstract
This project is a modern marketing website built with React, Vite, and Tailwind CSS for Westbrook Construction. It is a polished, high-trust lead generation site targeting cost-sensitive, quality-first homeowners. The site emphasizes structure, clarity, and process over flash or trendiness, feeling like a structured renovation system.

## Roadmap
- [x] **Stage 1**: Project Initialization & Standards Integration
- [x] **Stage 2**: Asset Folders Creation
- [x] **Stage 3**: Project Specification & Design System Setup
- [x] **Stage 4**: Core Layout & Hero Section Implementation
- [x] **Stage 5**: Process (5-step system) & Spaces Sections
- [x] **Stage 6**: Trust (Why Westbrook), Projects, & Pricing Sections
- [x] **Stage 7**: Contact Form & Footer

## Changelog
- **Showcase & CMS**: Fleshed out the Showcase section to support a dynamic gallery. Implemented a "See More" button that navigates to a dedicated Showcase page (`/showcase`) displaying all historical projects. Added a detailed project modal with image gallery navigation and project summaries. Integrated Decap CMS with a `projects` collection (JSON format) to allow users to manage showcase items. Implemented cross-page navigation with hash scroll support in the Navbar and Footer. Added `react-router-dom` for application routing.
- **Stage 7**: Added the Contact Form section with a 600px max-width single-column layout, form fields, and an inline success confirmation state. Added the Footer with logo, navigation, contact info, service area, and the required copyright text. Both sections utilize a subtle 5% opacity geometric background pattern.
- **Stage 6**: Added the Trust (Why Westbrook) section with a split layout and 3 core points. Implemented the Projects section with a controlled grid of 3 projects and minimal hover effects. Added the Pricing/Expectations section using a document-style layout inside a framed container.
- **Stage 5**: Implemented the Process section with a horizontal 5-step click-based system for desktop and a vertical accordion for mobile. Added the Spaces section with a 2x3 grid of bordered project frames and minimal hover effects.
- **Stage 4**: Implemented the core layout grid (12-column desktop, 8 tablet, 4 mobile). Built the Hero section with a 40/60 split, typography, and CTA buttons. Created the "piece assembly" logo animation using `motion` with precise straight-line translation and a 2px settle lock effect.
- **Stage 3**: Added project specifications for Westbrook Construction. Configured Tailwind CSS with brand colors, typography (Crimson Pro, IBM Plex Sans), and spacing scale.
- **Stage 2**: Created `/public/fonts`, `/public/backgrounds`, and `/public/logo` directories for user uploads.
- **Stage 1**: Integrated "Better Basics" development standards, initialized `PROJECT_DOCUMENTATION.md`, `AGENTS.md`, and `README.md`.

## Codebase Summary
### Architecture
- **Framework**: React 19 (Single Page Application)
- **Build Tool**: Vite
- **Routing**: React Router Dom (v7)
- **Styling**: Tailwind CSS (v4)
- **State Management**: React Hooks

### File Structure
- `/public/fonts/`: Directory for uploaded font files.
- `/public/backgrounds/`: Directory for uploaded background images.
- `/public/logo/`: Directory for uploaded brand logos.
- `/src/main.tsx`: Application entry point.
- `/src/App.tsx`: Root component.
- `/src/index.css`: Global styles and Tailwind imports.
- `/AGENTS.md`: AI system instructions and development standards.
- `/PROJECT_DOCUMENTATION.md`: Single source of truth for project state.

### Schemas & API Contracts
- *None defined yet.*

### Design System Specifications
- **Typography**: Crimson Pro (Headings), IBM Plex Sans (Body). Max 75ch line width.
- **Colors**: 
  - Primary: Dark Green (#0E2F12), Light Green (#5DAE5F)
  - Secondary: Blue (#2F5061), Sand (#DCC6AF)
  - Neutrals: Cream (#FCFBF7), Grey (#998C83), Slate (#475C52), Bronze (#B08855)
- **Grid**: 12 columns (desktop, 1200px max, 24px gutters, 96px margins), 8 columns (tablet), 4 columns (mobile).
- **Spacing Scale**: 8 / 16 / 24 / 32 / 48 / 64 / 96
- **Animation**: Fade, Translate (max 16px). No bounce, parallax, heavy motion, or rotation. Timing: 150-300ms.

## Development Standards
*Note: A complete list of development standards is actively enforced via `/AGENTS.md`.*
- Strict separation of concerns.
- Production-ready, explicitly error-handled code.
- Expressive, brand-first frontend design with full-bleed heroes and purposeful motion.
- Mobile-responsive with safe-area insets and proper modal handling.
