"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Outline from "@/components/Outline";
import styles from "./page.module.css";

export default function Home() {
  const roles = ["an AI Engineer.", "a Web Developer."];
  const [roleText, setRoleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 100;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const currentRole = roles[loopNum % roles.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setRoleText(currentRole.substring(0, roleText.length - 1));
        if (roleText.length === 0) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }, typingSpeed / 2);
    } else {
      timer = setTimeout(() => {
        setRoleText(currentRole.substring(0, roleText.length + 1));
        if (roleText.length === currentRole.length) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
        }
      }, typingSpeed);
    }
    return () => clearTimeout(timer);
  }, [roleText, isDeleting, loopNum]);

  return (
    <main className={styles.container}>
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
            >
              <h1 className={styles.nameTitle}>
                <span className={styles.greetingText}>Hi ! I'm </span>
                <span className={styles.nameAnimated}>Venkatesh</span>
              </h1>
            </motion.div>

            <h2 className={styles.subtitle}>
              <span className={styles.subtitleLight}>I am </span>
              <span className={styles.subtitleBold}>
                {roleText}
                <span className={styles.typingCursor}></span>
              </span>
            </h2>

            <div className={styles.descriptionWrapper}>
              <p className={styles.description}>
                I bridge the gap between stunning web interfaces and powerful artificial intelligence.
                <br />
                Designing the future, one pixel and parameter at a time.
              </p>
            </div>

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

      {/* Decorative background elements */}
      <div className={styles.meshGradient} />
    </main>
  );
}
