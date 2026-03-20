"use client";

import styles from "./Skills.module.css";

const row1 = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "D3.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
];

const row2 = [
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
];

const row3 = [
  { name: "Strapi", icon: "https://cdn.worldvectorlogo.com/logos/strapi-2.svg" },
  { name: "Webpack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" },
];

export default function Skills() {
  const content1 = [...row1, ...row1, ...row1, ...row1];
  const content2 = [...row2, ...row2, ...row2, ...row2];
  const content3 = [...row3, ...row3, ...row3, ...row3];

  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeContent}>
          {content1.map((skill, i) => (
            <div key={`r1-${i}`} className={styles.skillBadge}>
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className={skill.name === "Next.js" ? styles.invertDark : ""} 
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.marqueeContainer}>
        <div className={`${styles.marqueeContent} ${styles.reverse}`}>
          {content2.map((skill, i) => (
            <div key={`r2-${i}`} className={styles.skillBadge}>
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeContent}>
          {content3.map((skill, i) => (
            <div key={`r3-${i}`} className={styles.skillBadge}>
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className={skill.name === "Three.js" ? styles.invertDark : ""} 
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
