import { getProjectsByCategory } from '@/lib/projects';
import MasonryGrid from '@/components/MasonryGrid';
import FadeIn from '@/components/FadeIn';

export const metadata = {
  title: 'Creative Production Management | Project Management | Lukia Sophia Burbaum',
  description: 'Creative production management services including photo and video shoots, talent coordination, and post-production supervision.',
};

export default function CreativeProductionPage() {
  const projects = getProjectsByCategory('pm-creative');

  return (
    <div className="container">
      <FadeIn>
        <header className="page-header">
          <h1 className="page-title">Creative Production Management</h1>
          <p className="page-subtitle">
            As a creative producer, I lead your creative processes. I work either independently
            or alongside a team of creatives to plan and produce your creative assets &mdash;
            from pre-production and planning, through shooting imagery &amp; video, to post-production and editing.
          </p>
        </header>
      </FadeIn>

      <section className="section">
        <MasonryGrid projects={projects} columns={3} />
      </section>
    </div>
  );
}
