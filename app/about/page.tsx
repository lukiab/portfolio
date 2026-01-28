import Image from 'next/image';
import { cvEntries, clients } from '@/lib/projects';
import FadeIn from '@/components/FadeIn';
import CVTimeline from '@/components/CVTimeline';
import ClientLogos from '@/components/ClientLogos';
import styles from './page.module.css';

export const metadata = {
  title: 'About | Lukia Sophia Burbaum',
  description: 'Creative Director, Producer, and Project Manager based in Copenhagen. Learn more about my background and experience.',
};

export default function AboutPage() {
  return (
    <div className="container">
      <div className={styles.grid}>
        <FadeIn className={styles.imageColumn}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80"
              alt="Lukia Sophia Burbaum"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={styles.image}
              priority
            />
          </div>
        </FadeIn>

        <div className={styles.contentColumn}>
          <FadeIn>
            <header className={styles.header}>
              <h1 className="page-title">About</h1>
            </header>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className={styles.bio}>
              <p>
                I&apos;m a Creative Director, Producer, and Project Manager based in Copenhagen,
                specializing in editorial, commercial, and digital content creation.
              </p>
              <p>
                With a background spanning fashion publications, creative agencies, and
                independent production, I bring a holistic approach to every project—from
                initial concept through final delivery.
              </p>
              <p>
                My work focuses on creating compelling visual narratives that connect
                brands with their audiences. Whether directing a commercial campaign,
                producing an editorial story, or managing a digital launch, I believe
                in the power of thoughtful, intentional storytelling.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className={styles.contact}>
              <h3 className={styles.contactTitle}>Get in Touch</h3>
              <a href="mailto:hello@lukiaburbaum.com" className={styles.email}>
                hello@lukiaburbaum.com
              </a>
              <div className={styles.social}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  Instagram
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  LinkedIn
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <section className={styles.section}>
        <FadeIn>
          <h2 className="section-title">Experience</h2>
        </FadeIn>
        <CVTimeline entries={cvEntries} />
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
