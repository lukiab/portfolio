import { getProjectsByCategory } from '@/lib/projects';
import MasonryGrid from '@/components/MasonryGrid';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Project Management | Lukia Sophia Burbaum',
  description: 'Project management services for digital marketing campaigns and creative productions.',
};

export default function ProjectManagementPage() {
  const digitalProjects = getProjectsByCategory('pm-digital');
  const creativeProjects = getProjectsByCategory('pm-creative');
  const allProjects = [...digitalProjects, ...creativeProjects];

  return (
    <div className="container">
      <FadeIn>
        <header className="page-header">
          <h1 className="page-title">Project Management</h1>
          <p className="page-subtitle">
            Strategic project leadership for digital marketing campaigns and creative productions.
            From concept to delivery, ensuring seamless execution and measurable results.
          </p>
        </header>
      </FadeIn>

      <nav className={styles.subnav}>
        <Link href="/project-management/digital-marketing" className={styles.subnavLink}>
          Digital Marketing
        </Link>
        <Link href="/project-management/creative-production" className={styles.subnavLink}>
          Creative Production
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
