"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import styles from "./page.module.css";

const posts = [
  {
    title: "Understanding React Server Components in Next.js 15",
    excerpt: "A deep dive into how Server Components work under the hood and why they are a game-changer for performance.",
    date: "March 20, 2026",
    readTime: "5 min read",
    slug: "#"
  },
  {
    title: "Deploying PyTorch Models on the Edge",
    excerpt: "Learn how to optimize and deploy your PyTorch models for edge devices using ONNX and WebAssembly.",
    date: "February 12, 2026",
    readTime: "8 min read",
    slug: "#"
  },
  {
    title: "Building Micro-Interactions with Framer Motion",
    excerpt: "Small animations can drastically improve user experience. Here is my approach to UI micro-interactions.",
    date: "January 05, 2026",
    readTime: "4 min read",
    slug: "#"
  }
];

export default function Blog() {
  return (
    <div className={styles.container}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.header}
      >
        <h1 className={styles.title}>Writings & <span className="text-gradient">Thoughts</span></h1>
        <p className={styles.subtitle}>Articles on web development, AI, and design.</p>
      </motion.div>

      <div className={styles.postList}>
        {posts.map((post, index) => (
          <motion.article
            key={index}
            className={`glass-panel ${styles.postCard}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.postMeta}>
              <span className={styles.metaItem}><Calendar size={14} /> {post.date}</span>
              <span className={styles.metaItem}><Clock size={14} /> {post.readTime}</span>
            </div>
            
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postExcerpt}>{post.excerpt}</p>
            
            <Link href={post.slug} className={styles.readMoreBtn}>
              Read Article <ArrowRight size={16} />
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
