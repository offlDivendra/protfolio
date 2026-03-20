"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav 
      className={`glass-panel ${styles.navbar}`}
      initial={{ y: -100, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.logo}>
        <Link href="/">
          <span className="text-gradient">Venkatesh.</span>
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}>Home</Link>
        <Link href="/about" className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}>About</Link>
        <Link href="/projects" className={`${styles.link} ${pathname?.startsWith('/projects') ? styles.active : ''}`}>Projects</Link>
        <Link href="/blog" className={`${styles.link} ${pathname?.startsWith('/blog') ? styles.active : ''}`}>Blog</Link>
        <Link href="/contact" className={`${styles.link} ${pathname === '/contact' ? styles.active : ''}`}>Contact</Link>
      </div>
    </motion.nav>
  );
}
