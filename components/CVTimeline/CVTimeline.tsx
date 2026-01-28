'use client';

import { motion } from 'framer-motion';
import type { CVEntry } from '@/lib/projects';
import styles from './CVTimeline.module.css';

interface CVTimelineProps {
  entries: CVEntry[];
}

export default function CVTimeline({ entries }: CVTimelineProps) {
  return (
    <div className={styles.timeline}>
      {entries.map((entry, index) => (
        <motion.div
          key={index}
          className={styles.entry}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <div className={styles.year}>{entry.year}</div>
          <div className={styles.content}>
            <h4 className={styles.role}>{entry.role}</h4>
            <div className={styles.company}>{entry.company}</div>
            <p className={styles.description}>{entry.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
