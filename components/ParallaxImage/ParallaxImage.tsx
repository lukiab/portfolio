'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ParallaxImage.module.css';

interface ParallaxImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  parallaxStrength?: number;
  className?: string;
}

export default function ParallaxImage({
  src,
  alt,
  aspectRatio = '4/5',
  parallaxStrength = 0.1,
  className = '',
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${-parallaxStrength * 100}%`, `${parallaxStrength * 100}%`]
  );

  return (
    <div
      ref={ref}
      className={`${styles.container} ${className}`}
      style={{ aspectRatio }}
    >
      <motion.div className={styles.imageWrapper} style={{ y }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={styles.image}
        />
      </motion.div>
    </div>
  );
}
