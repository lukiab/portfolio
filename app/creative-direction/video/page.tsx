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
            Video production and direction for brand stories, fashion films,
            and commercial content. From script development through
            post-production supervision.
          </p>
        </header>
      </FadeIn>

      <section className="section">
        <MasonryGrid projects={projects} columns={3} />
      </section>
    </div>
  );
}
