'use client';

import { motion } from 'framer-motion';
import styles from './ClientLogos.module.css';

interface ClientLogosProps {
  clients: string[];
}

export default function ClientLogos({ clients }: ClientLogosProps) {
  return (
    <div className={styles.container}>
      {clients.map((client, index) => (
        <motion.div
          key={client}
          className={styles.logo}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: index * 0.05,
          }}
        >
          <span className={styles.logoText}>{client}</span>
        </motion.div>
      ))}
    </div>
  );
}
