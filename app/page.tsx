import { getFeaturedProjects, clients } from '@/lib/projects';
import MasonryGrid from '@/components/MasonryGrid';
import FadeIn from '@/components/FadeIn';
import ClientLogos from '@/components/ClientLogos';
import styles from './page.module.css';

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="container">
      <FadeIn>
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Creative Producer &amp; Director,<br />
            and Project Manager
          </h1>
          <p className={styles.heroSubtitle}>
            I combine my experience within both paid media and art to help you create
            meaningful creatives that tell a story and perform. Based in Copenhagen.
          </p>
        </header>
      </FadeIn>

      <section className={styles.section}>
        <FadeIn delay={0.1}>
          <h2 className="section-title">Selected Work</h2>
        </FadeIn>
        <MasonryGrid projects={featuredProjects} columns={3} />
      </section>

      <section className={styles.section}>
        <FadeIn>
          <h2 className="section-title">Select Clients</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <ClientLogos clients={clients} />
        </FadeIn>
      </section>
    </div>
  );
}
