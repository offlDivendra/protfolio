"use client";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Skills from "@/components/Skills";
import Outline from "@/components/Outline";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          {/* Left Side: Intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={styles.heroLeft}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={styles.badge}
            >
              <Terminal size={16} />
              <span>Hi, I'm Venkatesh</span>
            </motion.div>
            
            <h1 className={styles.title}>
              AI Engineer & <br /><span className="text-gradient">Web Developer.</span>
            </h1>
            
            <p className={styles.description}>
              I bridge the gap between stunning web interfaces and powerful artificial intelligence. 
              Designing the future, one pixel and parameter at a time.
            </p>

            <div className={styles.actions}>
              <Link href="/projects" className={styles.primaryBtn}>
                View Work <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className={styles.secondaryBtn}>
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Animated Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className={styles.heroRight}
          >
            <Outline />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Decorative background elements */}
      <div className={styles.meshGradient} />
    </div>
  );
}
