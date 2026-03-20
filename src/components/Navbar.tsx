"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
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
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/projects" className={styles.link}>Projects</Link>
        <Link href="/blog" className={styles.link}>Blog</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
      </div>
    </motion.nav>
  );
}
