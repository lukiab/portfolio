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
            As a Creative Director, I make your visions come to life. From concept to final
            asset &mdash; I lead pre-production, coordinate on shooting days, and ensure smooth
            post-production for commercial and product campaigns.
          </p>
        </header>
      </FadeIn>

      <section className="section">
        <MasonryGrid projects={projects} columns={3} />
      </section>
    </div>
  );
}
