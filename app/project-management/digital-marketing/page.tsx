import { getProjectsByCategory } from '@/lib/projects';
import MasonryGrid from '@/components/MasonryGrid';
import FadeIn from '@/components/FadeIn';

export const metadata = {
  title: 'Digital Marketing | Project Management | Lukia Sophia Burbaum',
  description: 'Digital marketing project management services including campaign strategy, content calendar development, and analytics implementation.',
};

export default function DigitalMarketingPage() {
  const projects = getProjectsByCategory('pm-digital');

  return (
    <div className="container">
      <FadeIn>
        <header className="page-header">
          <h1 className="page-title">Digital Marketing</h1>
          <p className="page-subtitle">
            As a project manager for digital marketing, I bring experience across all paid
            media channels (SEO, SEA, Paid Social, Programmatic) as well as organic social media,
            ensuring your team achieves its goals.
          </p>
        </header>
      </FadeIn>

      <section className="section">
        <MasonryGrid projects={projects} columns={3} />
      </section>
    </div>
  );
}
