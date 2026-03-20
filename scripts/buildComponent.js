const fs = require('fs');

const svgContent = fs.readFileSync('public/profile-lines.svg', 'utf8');
const dMatch = svgContent.match(/d="([^"]+)"/);
if(!dMatch) throw new Error("Could not find path 'd' attribute");
const pathD = dMatch[1];

const componentCode = `"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "../app/page.module.css";

export default function ProfileAnimation() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.imageWrapper} style={{ backgroundColor: '#0a0a0a' }}>
      <div className={styles.imageGlow} />
      
      {/* Real Image */}
      <motion.img 
        src="/profile.png" 
        alt="Profile"
        className={styles.profileImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: showImage ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* SVG Animation Overlay */}
      <motion.svg 
        viewBox="0 0 400 400" 
        style={{
          position: "absolute",
          top: 0, left: 0,
          width: "100%", height: "100%",
          zIndex: 2,
          pointerEvents: "none"
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: showImage ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.path
          d="${pathD}"
          initial={{ pathLength: 0, fill: "transparent", stroke: "rgba(255,255,255,0.7)", strokeWidth: 1 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}
`;

fs.writeFileSync('src/components/ProfileAnimation.tsx', componentCode);
console.log('Component generated!');
