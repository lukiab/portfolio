# Lukia Sophia Burbaum - Portfolio

A sophisticated editorial-style portfolio website built with Next.js 14.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/portfolio
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with sidebar
│   ├── page.tsx            # Homepage
│   ├── project-management/ # PM category pages
│   ├── creative-direction/ # Creative direction pages
│   ├── web-services/       # Web services page
│   ├── about/              # About page
│   └── project/[id]/       # Individual project pages
├── components/             # Reusable React components
│   ├── Sidebar/            # Fixed navigation sidebar
│   ├── MasonryGrid/        # Project grid display
│   ├── ProjectCard/        # Individual project cards
│   ├── ParallaxImage/      # Parallax scroll images
│   ├── FadeIn/             # Scroll-triggered animations
│   ├── CVTimeline/         # Experience timeline
│   └── ClientLogos/        # Client logo display
├── lib/                    # Data and utilities
│   └── projects.ts         # Project data and types
├── styles/                 # Global styles
│   └── globals.css         # Typography, colors, base styles
└── public/                 # Static assets
    └── images/             # Project images
```

## Customization

### Adding Projects

Edit `lib/projects.ts` to add your own projects:

```typescript
{
  id: 'unique-project-id',
  title: 'Project Title',
  category: 'editorial', // pm-digital, pm-creative, commercial, editorial, video, web
  client: 'Client Name',
  year: '2024',
  thumbnail: '/images/project-thumb.jpg',
  images: ['/images/project-1.jpg', '/images/project-2.jpg'],
  description: 'Project description...',
  role: 'Your Role',
  deliverables: ['Deliverable 1', 'Deliverable 2'],
  featured: true, // Show on homepage
}
```

### Updating Personal Info

- Sidebar contact email: `components/Sidebar/Sidebar.tsx`
- About page bio: `app/about/page.tsx`
- CV entries: `lib/projects.ts` (cvEntries array)
- Client list: `lib/projects.ts` (clients array)

### Styling

Global styles and CSS variables are in `styles/globals.css`:

- `--font-serif`: Headline font (Cormorant Garamond)
- `--font-sans`: Body font (Inter)
- `--color-primary`: Main text color
- `--color-secondary`: Secondary text color
- `--sidebar-width`: Sidebar width

## Deployment

This project is optimized for [Vercel](https://vercel.com):

```bash
npm run build
```

Or deploy directly by connecting your repository to Vercel.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: CSS Modules
- **Animations**: Framer Motion
- **Typography**: Cormorant Garamond + Inter (Google Fonts)
- **Image Handling**: Next.js Image with Unsplash placeholders
