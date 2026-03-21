"use client";
import { motion } from "framer-motion";
import { Code, Brain, ChevronRight, Download, ExternalLink } from "lucide-react";
import Skills from "@/components/Skills";
import styles from "./page.module.css";

export default function About() {
  return (
    <main className={styles.container}>
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.header}
      >
        <h1 className={styles.title}>About <span className="text-gradient">Me</span></h1>
        <p className={styles.subtitle}>
          I'm a passionate engineer who loves blending cutting-edge AI models with beautiful, high-performance web applications.
        </p>
        <div className={styles.resumeActions}>
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
            <ExternalLink size={18} /> View CV
          </a>
          <a href="/Resume.pdf" download="Venkatesh_Resume.pdf" className={styles.secondaryBtn}>
            <Download size={18} /> Download
          </a>
        </div>
      </motion.header>

      <section className={styles.bentoGrid}>
        <motion.div
          className={`glass-panel ${styles.card} ${styles.webDev}`}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.iconWrapper}><Code size={24} /></div>
          <h2>Web Development</h2>
          <p>Building pixel-perfect, responsive, and accessible user interfaces that provide exceptional user experiences. I specialize in the React ecosystem.</p>
        </motion.div>

        <motion.div
          className={`glass-panel ${styles.card} ${styles.aiEng}`}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.iconWrapper}><Brain size={24} /></div>
          <h2>AI Engineering</h2>
          <p>Training and deploying machine learning models. From NLP to computer vision, I integrate intelligent features directly into web products.</p>
        </motion.div>
      </section>

      <Skills />
    </main>
  );
}
