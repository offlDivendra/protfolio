"use client";
import { motion } from "framer-motion";
import { Code, Brain, ChevronRight } from "lucide-react";
import styles from "./page.module.css";

export default function About() {
  const skills = ["React", "Next.js", "TypeScript", "Python", "PyTorch", "TensorFlow", "Node.js", "GraphQL"];

  return (
    <div className={styles.container}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.header}
      >
        <h1 className={styles.title}>About <span className="text-gradient">Me</span></h1>
        <p className={styles.subtitle}>
          I'm a passionate engineer who loves blending cutting-edge AI models with beautiful, high-performance web applications.
        </p>
      </motion.div>

      <div className={styles.bentoGrid}>
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

        <motion.div 
          className={`glass-panel ${styles.card} ${styles.skillsCard}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Tech Stack</h2>
          <div className={styles.skillsList}>
            {skills.map((skill, index) => (
              <span key={index} className={styles.skillBadge}>
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
