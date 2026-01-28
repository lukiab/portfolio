'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Project } from '@/lib/projects';
import { getCategoryLabel } from '@/lib/projects';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  index?: number;
  aspectRatio?: string;
}

export default function ProjectCard({
  project,
  index = 0,
  aspectRatio,
}: ProjectCardProps) {
  // Vary aspect ratios for visual interest in masonry
  const ratios = ['4/5', '3/4', '1/1', '5/6'];
  const defaultRatio = aspectRatio || ratios[index % ratios.length];

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link href={`/project/${project.id}`} className={styles.link}>
        <div className={styles.imageContainer} style={{ aspectRatio: defaultRatio }}>
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.image}
          />
          <div className={styles.overlay}>
            <span className={styles.viewProject}>View Project</span>
          </div>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <div className={styles.meta}>
            {project.client && (
              <span className={styles.client}>{project.client}</span>
            )}
            <span className={styles.category}>{getCategoryLabel(project.category)}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
