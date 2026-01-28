import { getProjectsByCategory } from '@/lib/projects';
import MasonryGrid from '@/components/MasonryGrid';
import FadeIn from '@/components/FadeIn';

export const metadata = {
  title: 'Editorial | Creative Direction | Lukia Sophia Burbaum',
  description: 'Editorial photography and production for fashion, beauty, and lifestyle publications.',
};

export default function EditorialPage() {
  const projects = getProjectsByCategory('editorial');

  return (
    <div className="container">
      <FadeIn>
        <header className="page-header">
          <h1 className="page-title">Editorial</h1>
          <p className="page-subtitle">
            Editorial storytelling for fashion, beauty, and lifestyle publications.
            Concept development, creative direction, and production for
            magazine features and digital content.
          </p>
        </header>
      </FadeIn>

      <section className="section">
        <MasonryGrid projects={projects} columns={3} />
      </section>
    </div>
  );
}
