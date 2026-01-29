import { getProjectsByCategory } from '@/lib/projects';
import MasonryGrid from '@/components/MasonryGrid';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Creative Direction & Production | Lukia Sophia Burbaum',
  description: 'Creative direction and production services for commercial, editorial, and video projects.',
};

export default function CreativeDirectionPage() {
  const commercialProjects = getProjectsByCategory('commercial');
  const editorialProjects = getProjectsByCategory('editorial');
  const videoProjects = getProjectsByCategory('video');
  const allProjects = [...commercialProjects, ...editorialProjects, ...videoProjects];

  return (
    <div className="container">
      <FadeIn>
        <header className="page-header">
          <h1 className="page-title">Creative Direction & Production</h1>
          <p className="page-subtitle">
            From concept to final asset &mdash; I lead pre-production, coordinate on shooting days,
            and ensure smooth post-production. I handle productions either completely from start to
            finish, or work with a team of photographers, editors, stylists, and assistants.
          </p>
        </header>
      </FadeIn>

      <nav className={styles.subnav}>
        <Link href="/creative-direction/commercial" className={styles.subnavLink}>
          Commercial & Product
        </Link>
        <Link href="/creative-direction/editorial" className={styles.subnavLink}>
          Editorial
        </Link>
        <Link href="/creative-direction/video" className={styles.subnavLink}>
          Video Production
        </Link>
      </nav>

      <section className="section">
        <FadeIn delay={0.1}>
          <h2 className="section-title">All Projects</h2>
        </FadeIn>
        <MasonryGrid projects={allProjects} columns={3} />
      </section>
    </div>
  );
}
