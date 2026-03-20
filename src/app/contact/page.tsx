"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Instagram, Twitter, Github } from "lucide-react";
import styles from "./page.module.css";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/offlvenkatesh@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: "New Message from Portfolio Website!"
        })
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("Oops! Something went wrong reaching the server. Please use the direct email link instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <motion.div 
          className={styles.headerLeft}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className={styles.title}>Contact.</h1>
          <p className={styles.subtitle}>
            <span>Let's build something</span>
            <span className={styles.gradientBadge}>amazing</span>
            <span>together</span>
          </p>

          <div className={styles.socialLinks}>
            {/* 1. LinkedIn (Top priority for recruiters) */}
            <a href="https://www.linkedin.com/in/offlvenkatesh/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 448 512" fill="currentColor">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
            
            {/* 2. GitHub (Crucial portfolio evidence for developers/AI engineers) */}
            <a href="https://github.com/offlvenkatesh" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
              <Github size={22} />
            </a>
            
            {/* 3. Email (Direct contact, using web compose link to prevent annoying local mail app popups) */}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=offlvenkatesh@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Email (Gmail)">
              <Mail size={22} />
            </a>
            
            {/* 4. Medium (Thought leadership and articles) */}
            <a href="https://medium.com/@offlvenkatesh" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Medium">
              <span style={{ fontSize: '1.3rem', fontWeight: 800 }}>M</span>
            </a>
            
            {/* 5. X / Twitter (Tech community presence) */}
            <a href="https://x.com/offlvenkatesh7" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X (Twitter)">
              <Twitter size={22} />
            </a>
            
            {/* 6. Instagram (Personal touch, lowest recruiter priority) */}
            <a href="https://www.instagram.com/offlvenkatesh" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <Instagram size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className={`glass-panel ${styles.formWrapper}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {isSubmitted ? (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>✓</div>
              <h2>Message Sent!</h2>
              <p>Thanks for reaching out. I'll get back to you soon.</p>
              <button onClick={() => setIsSubmitted(false)} className={styles.submitBtn}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                  required 
                  className={styles.input} 
                  placeholder=" " 
                />
                <label htmlFor="name" className={styles.label}>Your Name</label>
              </div>
              
              <div className={styles.inputGroup}>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  required 
                  className={styles.input} 
                  placeholder=" " 
                />
                <label htmlFor="email" className={styles.label}>Your Email</label>
              </div>

              <div className={styles.inputGroup}>
                <textarea 
                  name="message" 
                  id="message"
                  value={formState.message}
                  onChange={handleChange}
                  required 
                  className={styles.textarea} 
                  placeholder=" "
                  rows={5}
                />
                <label htmlFor="message" className={styles.label}>Your Message</label>
              </div>

              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
