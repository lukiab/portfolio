'use client';

import type { Project } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import styles from './MasonryGrid.module.css';

interface MasonryGridProps {
  projects: Project[];
  columns?: number;
}

export default function MasonryGrid({ projects, columns = 3 }: MasonryGridProps) {
  return (
    <div
      className={styles.grid}
      style={{ '--columns': columns } as React.CSSProperties}
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
