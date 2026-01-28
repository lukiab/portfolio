import { getProjectsByCategory } from '@/lib/projects';
import MasonryGrid from '@/components/MasonryGrid';
import FadeIn from '@/components/FadeIn';

export const metadata = {
  title: 'Commercial & Product | Creative Direction | Lukia Sophia Burbaum',
  description: 'Commercial and product photography direction for brands and campaigns.',
};

export default function CommercialPage() {
  const projects = getProjectsByCategory('commercial');

  return (
    <div className="container">
      <FadeIn>
        <header className="page-header">
          <h1 className="page-title">Commercial & Product</h1>
          <p className="page-subtitle">
            Creative direction for commercial and product photography.
            Developing visual concepts that elevate brands and showcase
            products with distinction.
          </p>
        </header>
      </FadeIn>

      <section className="section">
        <MasonryGrid projects={projects} columns={3} />
      </section>
    </div>
  );
}
