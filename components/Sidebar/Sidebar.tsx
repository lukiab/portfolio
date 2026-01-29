'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Sidebar.module.css';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Project Management',
    href: '/project-management',
    children: [
      { label: 'Digital Marketing', href: '/project-management/digital-marketing' },
      { label: 'Creative Production', href: '/project-management/creative-production' },
    ],
  },
  {
    label: 'Creative Direction',
    href: '/creative-direction',
    children: [
      { label: 'Commercial & Product', href: '/creative-direction/commercial' },
      { label: 'Editorial', href: '/creative-direction/editorial' },
      { label: 'Video Production', href: '/creative-direction/video' },
    ],
  },
  { label: 'Web Services', href: '/web-services' },
  { label: 'About', href: '/about' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleExpand = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const isExpanded = (item: NavItem) => {
    return expandedItems.includes(item.label) || (item.children && isActive(item.href));
  };

  return (
    <>
      {/* Mobile Header */}
      <header className={styles.mobileHeader}>
        <Link href="/" className={styles.mobileLogo}>
          Lukia Sophia Burbaum
        </Link>
        <button
          className={styles.menuButton}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.menuLine} ${mobileOpen ? styles.menuLineOpen : ''}`} />
          <span className={`${styles.menuLine} ${mobileOpen ? styles.menuLineOpen : ''}`} />
        </button>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${mobileOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarInner}>
          <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
            Lukia Sophia Burbaum
          </Link>

          <nav className={styles.nav}>
            {navigation.map(item => (
              <div key={item.label} className={styles.navSection}>
                {item.children ? (
                  <>
                    <button
                      className={`${styles.navLink} ${styles.navParent} ${isActive(item.href) ? styles.navLinkActive : ''}`}
                      onClick={() => toggleExpand(item.label)}
                      aria-expanded={!!isExpanded(item)}
                      aria-label={`${item.label} submenu`}
                    >
                      {item.label}
                      <span className={`${styles.arrow} ${isExpanded(item) ? styles.arrowExpanded : ''}`} aria-hidden="true">
                        +
                      </span>
                    </button>
                    <AnimatePresence>
                      {isExpanded(item) && (
                        <motion.div
                          className={styles.navChildren}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.children.map(child => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`${styles.navChildLink} ${pathname === child.href ? styles.navLinkActive : ''}`}
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ''}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className={styles.contact}>
            <a href="mailto:hello@lukiaburbaum.com" className={styles.contactLink}>
              hello@lukiaburbaum.com
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
