import { getProjectsByCategory } from '@/lib/projects';
import MasonryGrid from '@/components/MasonryGrid';
import FadeIn from '@/components/FadeIn';
import styles from './page.module.css';

export const metadata = {
  title: 'Web Services | Lukia Sophia Burbaum',
  description: 'Custom website design and development for photographers, artists, and creative professionals.',
};

export default function WebServicesPage() {
  const projects = getProjectsByCategory('web');

  return (
    <div className="container">
      <FadeIn>
        <header className="page-header">
          <h1 className="page-title">Web Services</h1>
          <p className="page-subtitle">
            Custom portfolio websites for photographers, artists, and creative professionals.
            Clean, image-forward design that lets your work speak for itself.
          </p>
        </header>
      </FadeIn>

      <section className={styles.services}>
        <FadeIn delay={0.1}>
          <h2 className="section-title">Services</h2>
        </FadeIn>
        <div className={styles.serviceGrid}>
          <FadeIn delay={0.15}>
            <div className={styles.service}>
              <h3 className={styles.serviceTitle}>Portfolio Design</h3>
              <p className={styles.serviceDescription}>
                Custom portfolio websites designed to showcase your work beautifully.
                Clean layouts, intuitive navigation, and optimized image presentation.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className={styles.service}>
              <h3 className={styles.serviceTitle}>Development</h3>
              <p className={styles.serviceDescription}>
                Modern, fast-loading websites built with the latest technologies.
                Mobile-responsive, SEO-optimized, and easy to maintain.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className={styles.service}>
              <h3 className={styles.serviceTitle}>CMS Integration</h3>
              <p className={styles.serviceDescription}>
                Easy-to-use content management systems that let you update
                your portfolio without touching code.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <FadeIn delay={0.1}>
          <h2 className="section-title">Recent Projects</h2>
        </FadeIn>
        <MasonryGrid projects={projects} columns={3} />
      </section>
    </div>
  );
}
