"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav 
      className={`glass-panel ${styles.navbar}`}
      initial={{ y: -100, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.logo}>
        <Link href="/" onClick={() => setIsOpen(false)}>
          <span className="text-gradient">Venkatesh.</span>
        </Link>
      </div>

      <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
        <Link href="/" onClick={() => setIsOpen(false)} className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}>Home</Link>
        <Link href="/about" onClick={() => setIsOpen(false)} className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}>About</Link>
        <Link href="/projects" onClick={() => setIsOpen(false)} className={`${styles.link} ${pathname?.startsWith('/projects') ? styles.active : ''}`}>Projects</Link>
        <Link href="/blog" onClick={() => setIsOpen(false)} className={`${styles.link} ${pathname?.startsWith('/blog') ? styles.active : ''}`}>Blog</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)} className={`${styles.link} ${pathname === '/contact' ? styles.active : ''}`}>Contact</Link>
      </div>

      <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`${styles.bar} ${isOpen ? styles.barOpen1 : ''}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.barOpen2 : ''}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.barOpen3 : ''}`}></span>
      </button>
    </motion.nav>
  );
}
