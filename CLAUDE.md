# CLAUDE.md

## Project Overview

Editorial-style portfolio website for Lukia Sophia Burbaum - Creative Director, Producer, and Project Manager based in Copenhagen.

## Tech Stack

- **Framework**: Next.js 14.2.3 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules with CSS custom properties
- **Animations**: Framer Motion
- **Fonts**: Cormorant Garamond (serif headlines) + Inter (sans body) via Google Fonts

## Project Structure

```
portfolio/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout with Sidebar
│   ├── page.tsx                  # Homepage with featured work
│   ├── about/                    # Bio, CV timeline, clients
│   ├── project-management/       # PM category + sub-pages
│   │   ├── digital-marketing/
│   │   └── creative-production/
│   ├── creative-direction/       # Creative category + sub-pages
│   │   ├── commercial/
│   │   ├── editorial/
│   │   └── video/
│   ├── web-services/
│   ├── project/[id]/             # Dynamic project detail pages
│   └── not-found.tsx
├── components/                   # Reusable React components
│   ├── Sidebar/                  # Fixed left navigation
│   ├── MasonryGrid/              # CSS columns masonry layout
│   ├── ProjectCard/              # Project thumbnails with hover
│   ├── ParallaxImage/            # Scroll-triggered parallax (Framer Motion)
│   ├── FadeIn/                   # Viewport animation wrapper
│   ├── CVTimeline/               # Experience timeline
│   └── ClientLogos/              # Client name display
├── lib/
│   └── projects.ts               # Project data, types, and helper functions
├── styles/
│   └── globals.css               # CSS variables, typography, base styles
└── public/images/                # Static assets (currently using Unsplash placeholders)
```

## Key Files

- `lib/projects.ts` - All project data, CV entries, client list. Edit here to add/modify content.
- `styles/globals.css` - CSS custom properties for colors, fonts, spacing.
- `components/Sidebar/Sidebar.tsx` - Navigation structure and mobile menu.

## Design System

### CSS Variables (in globals.css)

```css
--color-background: #FFFFFF
--color-primary: #000000
--color-secondary: #333333
--color-muted: #666666
--color-border: #E5E5E5
--font-serif: 'Cormorant Garamond'
--font-sans: 'Inter'
--sidebar-width: 240px
```

### Component Patterns

- All client components use `'use client'` directive
- CSS Modules for component-scoped styles (ComponentName.module.css)
- Framer Motion for animations with `whileInView` for scroll triggers
- `FadeIn` wrapper component for consistent entrance animations

## Data Types

```typescript
type ProjectCategory = 'pm-digital' | 'pm-creative' | 'commercial' | 'editorial' | 'video' | 'web';

interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  client?: string;
  year: string;
  thumbnail: string;
  images: string[];
  description: string;
  role: string;
  deliverables?: string[];
  featured?: boolean;  // Shows on homepage
}
```

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## React Grab (Development)

For visual editing with Claude Code agent, run the proxy:

```bash
# Terminal 1: Start Next.js
npm run dev

# Terminal 2: Start React Grab proxy
npx grab start localhost:3000 --provider @react-grab/claude-code
```

Then open http://localhost:2000 (not 3000). Use Cmd+C + click to select elements.

## ESLint Notes

- Apostrophes in JSX must be escaped: use `&apos;` instead of `'`
- Example: `I&apos;m` not `I'm`

## Adding New Projects

1. Add project object to `projects` array in `lib/projects.ts`
2. Set `featured: true` to show on homepage
3. Use Unsplash URLs for placeholders or add images to `public/images/`

## Deployment

Optimized for Vercel. Connect repo and deploy - no additional configuration needed.
