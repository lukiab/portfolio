import { getProjectsByCategory } from '@/lib/projects';
import MasonryGrid from '@/components/MasonryGrid';
import FadeIn from '@/components/FadeIn';

export const metadata = {
  title: 'Video Production | Creative Direction | Lukia Sophia Burbaum',
  description: 'Video production and direction for brand documentaries, fashion films, and commercial content.',
};

export default function VideoPage() {
  const projects = getProjectsByCategory('video');

  return (
    <div className="container">
      <FadeIn>
        <header className="page-header">
          <h1 className="page-title">Video Production</h1>
          <p className="page-subtitle">
            I direct and produce videos for artists and brands. I plan, shoot, and edit
            the footage &mdash; handling the full creative production pipeline from concept
            through final delivery.
          </p>
        </header>
      </FadeIn>

      <section className="section">
        <MasonryGrid projects={projects} columns={3} />
      </section>
    </div>
  );
}
