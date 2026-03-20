"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import styles from "./page.module.css";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={styles.container}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.header}
      >
        <h1 className={styles.title}>Let's <span className="text-gradient">Connect</span></h1>
        <p className={styles.subtitle}>Open for opportunities or just a friendly chat.</p>
      </motion.div>

      <div className={styles.content}>
        <motion.div 
          className={styles.contactInfo}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={`glass-panel ${styles.infoCard}`}>
            <div className={styles.infoItem}>
              <div className={styles.iconBox}><Mail size={20} /></div>
              <div>
                <h3>Email</h3>
                <p>hello@portfolio.com</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.iconBox}><MapPin size={20} /></div>
              <div>
                <h3>Location</h3>
                <p>San Francisco, CA</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.iconBox}><Phone size={20} /></div>
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
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
