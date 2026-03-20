"use client";
import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import styles from "./page.module.css";

const projects = [
  {
    title: "AI-Powered Analytics",
    description: "A comprehensive dashboard that predicts user behavior using a custom PyTorch model deployed via FastAPI.",
    tags: ["React", "PyTorch", "FastAPI", "PostgreSQL"],
    github: "#",
    live: "#"
  },
  {
    title: "NeuroWeb CMS",
    description: "A headless CMS designed for AI agents, allowing LLMs to directly read and write content through structured APIs.",
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    github: "#",
    live: "#"
  },
  {
    title: "Conversational Copilot",
    description: "An elegant, interactive chat interface built for a proprietary RAG architecture, featuring real-time streaming.",
    tags: ["React", "WebSockets", "Framer Motion"],
    github: "#",
    live: "#"
  }
];

function InteractiveCard({ project, index }: { project: any, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={`glass-panel ${styles.card}`}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className={styles.cardHoverGlow}
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{project.title}</h2>
        <p className={styles.cardDescription}>{project.description}</p>
        
        <div className={styles.tags}>
          {project.tags.map((tag: string) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className={styles.cardActions}>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
          <Github size={18} /> Source
        </a>
        <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
          <ExternalLink size={18} /> Live Demo
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div className={styles.container}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.header}
      >
        <h1 className={styles.title}>Selected <span className="text-gradient">Projects</span></h1>
        <p className={styles.subtitle}>A showcase of my recent engineering work.</p>
      </motion.div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <InteractiveCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
