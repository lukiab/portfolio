import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className="container">
      <FadeIn>
        <div className={styles.content}>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.description}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/" className={styles.link}>
            Return Home
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
