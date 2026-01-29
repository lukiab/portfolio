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
            With editorial shoots, I let my creativity flow. These are projects where I
            fully immerse myself into my aesthetic vision. With my art, I want to tell a story
            and evoke feelings. I lead the creative and art direction, and handle both
            pre- and post-production.
          </p>
        </header>
      </FadeIn>

      <section className="section">
        <MasonryGrid projects={projects} columns={3} />
      </section>
    </div>
  );
}
