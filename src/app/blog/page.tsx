"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import styles from "./page.module.css";

const posts = [
  {
    title: "How to learn coding in the AI Era — smart ways for beginners",
    excerpt: "A smart beginner’s roadmap for building real coding skills — balancing fundamentals and AI tools in 2025.",
    date: "Oct 5, 2025",
    readTime: "4 min read",
    url: "https://medium.com/p/907c39ab6038"
  },
  {
    title: "How to Use ChatGPT to Automate 80% of Your Daily Tasks",
    excerpt: "Discover practical strategies and advanced prompts to leverage ChatGPT as your ultimate personal productivity assistant.",
    date: "Nov 12, 2025",
    readTime: "4 min read",
    url: "https://medium.com/gitconnected/how-to-use-chatgpt-to-automate-80-of-your-daily-tasks-ed42a7e59f7c"
  },
  {
    title: "6 AI Skills That Will Make You Irreplaceable In Your Career",
    excerpt: "The generative AI revolution is here. Master these six crucial skills to future-proof your career in the tech industry.",
    date: "Dec 3, 2025",
    readTime: "4 min read",
    url: "https://medium.com/gitconnected/6-ai-skills-that-will-make-you-irreplaceable-in-your-career-7ed55becee57"
  },
  {
    title: "10 Ways AI is Already Changing Your Life",
    excerpt: "From invisible algorithms to daily conveniences, here is how artificial intelligence is quietly reshaping our world.",
    date: "Jan 18, 2026",
    readTime: "5 min read",
    url: "https://medium.com/gitconnected/10-ways-ai-is-already-changing-your-life-and-you-dont-even-know-it-a36653a4d714"
  },
  {
    title: "Brain-Computer Interfaces: How Our Minds Could Control Technology",
    excerpt: "An exploration into the cutting-edge world of BCIs and what the future holds for human-computer interaction.",
    date: "Feb 09, 2026",
    readTime: "5 min read",
    url: "https://medium.com/design-bootcamp/brain-computer-interfaces-how-our-minds-could-control-technology-6943d2c017fe"
  },
  {
    title: "Agentic AI: The Next Big Thing Beyond ChatGPT",
    excerpt: "Moving from conversational AI to autonomous, reasoning agents capable of executing complex, multi-step workflows.",
    date: "Feb 27, 2026",
    readTime: "5 min read",
    url: "https://medium.com/design-bootcamp/agentic-ai-the-next-big-thing-beyond-chatgpt-e549585dc9fa"
  },
  {
    title: "The Dangers of AI Vibe Coding (Why It's Failing Junior Developers)",
    excerpt: "Why relying too heavily on AI code generation without understanding core computer science fundamentals is a massive trap.",
    date: "Mar 15, 2026",
    readTime: "4 min read",
    url: "https://medium.com/design-bootcamp/the-dangers-of-ai-vibe-coding-why-it-s-failing-junior-developers-67ba7b60ceba"
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
        <h1 className={styles.title}>Writings & <span className={styles.titleAccent}>Thoughts</span></h1>
        <p className={styles.subtitle}>
          Articles on AI and Technology.
        </p>
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

            <a href={post.url} target="_blank" rel="noopener noreferrer" className={styles.readMoreBtn}>
              Read Article <ArrowRight size={16} />
            </a>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
