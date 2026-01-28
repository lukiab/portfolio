import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects, getProjectById, getCategoryLabel } from '@/lib/projects';
import FadeIn from '@/components/FadeIn';
import ParallaxImage from '@/components/ParallaxImage';
import styles from './page.module.css';

interface ProjectPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Lukia Sophia Burbaum`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  const categoryPath = getCategoryPath(project.category);

  return (
    <div className="container">
      <FadeIn>
        <nav className={styles.breadcrumb}>
          <Link href={categoryPath.href} className={styles.breadcrumbLink}>
            {categoryPath.label}
          </Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>{project.title}</span>
        </nav>
      </FadeIn>

      <FadeIn delay={0.1}>
        <header className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.meta}>
            {project.client && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Client</span>
                <span className={styles.metaValue}>{project.client}</span>
              </div>
            )}
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Year</span>
              <span className={styles.metaValue}>{project.year}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>{project.role}</span>
            </div>
          </div>
        </header>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className={styles.heroImage}>
          <Image
            src={project.images[0] || project.thumbnail}
            alt={project.title}
            fill
            sizes="100vw"
            className={styles.image}
            priority
          />
        </div>
      </FadeIn>

      <div className={styles.content}>
        <FadeIn delay={0.2}>
          <div className={styles.description}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <p className={styles.descriptionText}>{project.description}</p>
          </div>
        </FadeIn>

        {project.deliverables && project.deliverables.length > 0 && (
          <FadeIn delay={0.25}>
            <div className={styles.deliverables}>
              <h2 className={styles.sectionTitle}>Deliverables</h2>
              <ul className={styles.deliverablesList}>
                {project.deliverables.map((item, index) => (
                  <li key={index} className={styles.deliverableItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        )}
      </div>

      {project.images.length > 1 && (
        <section className={styles.gallery}>
          <FadeIn>
            <h2 className="section-title">Gallery</h2>
          </FadeIn>
          <div className={styles.galleryGrid}>
            {project.images.slice(1).map((image, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <ParallaxImage
                  src={image}
                  alt={`${project.title} - Image ${index + 2}`}
                  aspectRatio="4/5"
                  className={styles.galleryImage}
                />
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      <FadeIn>
        <nav className={styles.projectNav}>
          <Link href={categoryPath.href} className={styles.backLink}>
            Back to {categoryPath.label}
          </Link>
        </nav>
      </FadeIn>
    </div>
  );
}

function getCategoryPath(category: string): { href: string; label: string } {
  const paths: Record<string, { href: string; label: string }> = {
    'pm-digital': { href: '/project-management/digital-marketing', label: 'Digital Marketing' },
    'pm-creative': { href: '/project-management/creative-production', label: 'Creative Production' },
    commercial: { href: '/creative-direction/commercial', label: 'Commercial & Product' },
    editorial: { href: '/creative-direction/editorial', label: 'Editorial' },
    video: { href: '/creative-direction/video', label: 'Video Production' },
    web: { href: '/web-services', label: 'Web Services' },
  };
  return paths[category] || { href: '/', label: 'Home' };
}
