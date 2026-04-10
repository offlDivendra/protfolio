"use client";
import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import styles from "./page.module.css";

const projects = [
  {
    title: "Netflix",
    description: "A high-fidelity Netflix interface clone featuring a sleek, responsive dark-mode design with pixel-perfect red accents and complex interactive components.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/offlvenkatesh/NetflixUI",
    live: "https://netflix-ui-1beg.vercel.app/"
  },
  {
    title: "Simply Recipes",
    description: "A beautifully responsive recipe discovery platform featuring dynamic search, category filtering, and visually stunning culinary layouts.",
    tags: ["HTML", "JavaScript", "CSS3"],
    github: "https://github.com/offlvenkatesh/SimplyRecipes",
    live: "https://simply-recipes-orcin.vercel.app/"
  },
  {
    title: "Marvel UI",
    description: "An immersive Marvel character and comic database explorer built with high-performance animations and deep API connectivity.",
    tags: ["React", "API Integration", "Framer Motion"],
    github: "https://github.com/offlvenkatesh/Marvel",
    live: "https://marvel-ui.vercel.app/"
  },
  {
    title: "Admin Dashboard",
    description: "A sleek, responsive administrative dashboard featuring real-time data visualization, interactive charts, and a clean modern UI library.",
    tags: ["React", "CSS3", "Recharts"],
    github: "https://github.com/offlvenkatesh/Dashboard",
    live: "https://dashboard-lake-two-47.vercel.app/"
  },
  {
    title: "YouTube Clone",
    description: "A pixel-perfect YouTube interface reconstruction supporting video grid layouts, responsive sidebars, and native-feeling category pills.",
    tags: ["HTML5", "CSS3"],
    github: "https://github.com/offlvenkatesh/youtube-ui-clone",
    live: "https://youtube-ui-clone-mauve.vercel.app/"
  },
  {
    title: "Eatery Cafe",
    description: "A premium, appetizing landing page for a modern cafe, showcasing smooth scrolling, elegant typography, and a fully responsive menu section.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/offlvenkatesh/Eatery-Cafe-Restaurant-Website",
    live: "https://youtube-ui-clone-cb9b.vercel.app/"
  },
  {
    title: "Google Search Clone",
    description: "A fully functional Google Search clone integrating real-time search queries and flawlessly mirroring the iconic minimalist search interface.",
    tags: ["HTML5", "CSS3"],
    github: "https://github.com/offlvenkatesh/Google-Clone",
    live: "https://google-clone-alpha-liard.vercel.app/"
  },
  {
    title: "Nike Limited ",
    description: "A high-end eCommerce landing experience for Nike sneakers, heavily focused on dramatic product showcases, glassmorphism, and fluid motion design.",
    tags: ["HTML5", "CSS3"],
    github: "https://github.com/offlvenkatesh/Nike-Limited-UI",
    live: "https://nike-limited-ui.vercel.app/"
  },
  {
    title: "India Covid Tracker",
    description: "A vital, real-time data tracking dashboard providing live statistics, interactive state-wise mapping, and historical charts for COVID-19 in India.",
    tags: ["React", "Recharts"],
    github: "https://github.com/offlDivendra/covid19-india-tracker",
    live: "https://covid19-india-tracker.vercel.app/"
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
        <h1 className={styles.title}>Selected <span className={styles.titleAccent}>Projects</span></h1>
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
