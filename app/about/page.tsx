import Image from 'next/image';
import { cvEntries, education, skills, clients } from '@/lib/projects';
import FadeIn from '@/components/FadeIn';
import CVTimeline from '@/components/CVTimeline';
import ClientLogos from '@/components/ClientLogos';
import styles from './page.module.css';

export const metadata = {
  title: 'About | Lukia Sophia Burbaum',
  description: 'Creative Producer & Director, and Project Manager based in Copenhagen. 6+ years of experience with 30+ global clients.',
};

export default function AboutPage() {
  return (
    <div className="container">
      <div className={styles.grid}>
        <FadeIn className={styles.imageColumn}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/lukia-burbaum.jpg"
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
                I&apos;m a freelance creative producer, director and project manager with roots
                in Germany and Greece, based in Copenhagen. I collaborate with fashion, lifestyle,
                and cultural brands to craft cross-cultural visual storylines through strategy,
                aesthetic precision and smooth processes.
              </p>
              <p>
                I combine my experience within both paid media and art to help you create
                meaningful creatives that tell a story and perform. With 6+ years of experience
                and over 30 global clients, I bring a holistic approach to every project.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className={styles.contact}>
              <h3 className={styles.contactTitle}>Get in Touch</h3>
              <a href="mailto:burbaumlukia@gmail.com" className={styles.email}>
                burbaumlukia@gmail.com
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
          <h2 className="section-title">Education</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className={styles.educationList}>
            {education.map((entry, index) => (
              <div key={index} className={styles.educationItem}>
                <div className={styles.educationContent}>
                  <span className={styles.educationDegree}>{entry.degree}</span>
                  <span className={styles.educationInstitution}>{entry.institution}</span>
                  {entry.detail && <span className={styles.educationDetail}>{entry.detail}</span>}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className={styles.section}>
        <FadeIn>
          <h2 className="section-title">Skills</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className={styles.skillsGrid}>
            <div className={styles.skillGroup}>
              <h3 className={styles.skillGroupTitle}>Professional</h3>
              <ul className={styles.skillList}>
                {skills.professional.map((skill) => (
                  <li key={skill} className={styles.skillItem}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className={styles.skillGroup}>
              <h3 className={styles.skillGroupTitle}>Technical</h3>
              <ul className={styles.skillList}>
                {skills.technical.map((skill) => (
                  <li key={skill} className={styles.skillItem}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className={styles.skillGroup}>
              <h3 className={styles.skillGroupTitle}>Languages</h3>
              <ul className={styles.skillList}>
                {skills.languages.map((lang) => (
                  <li key={lang} className={styles.skillItem}>{lang}</li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
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
