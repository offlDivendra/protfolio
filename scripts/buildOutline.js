const fs = require('fs');

const svgContent = fs.readFileSync('public/profile-lines.svg', 'utf8');
const dMatch = svgContent.match(/d="([^"]+)"/);
if(!dMatch) throw new Error("Could not find path 'd' attribute");
const pathD = dMatch[1];

const componentCode = `"use client";
import React, { useEffect } from "react";
import styles from "./Outline.module.css";

const Outline = () => {
  useEffect(() => {
    const paths = document.querySelectorAll("." + styles.outlineSvg + " path");

    paths.forEach((path, index) => {
      const length = path.getTotalLength();

      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;

      // Trigger animation
      setTimeout(() => {
        path.style.transition = "stroke-dashoffset 3s ease-in-out";
        path.style.strokeDashoffset = "0";
      }, 300 + index * 5); // delay each path slightly
    });
  }, []);

  return (
    <div className={styles.container}>
      <svg viewBox="0 0 400 400" className={styles.outlineSvg}>
        <path d="${pathD}" />
      </svg>
    </div>
  );
};

export default Outline;
`;

fs.writeFileSync('src/components/Outline.tsx', componentCode);
console.log('Outline Component generated!');
