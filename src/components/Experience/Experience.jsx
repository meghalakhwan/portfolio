import React from "react";

import styles from "./Experience.module.css";

import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import javascript from "../../assets/skills/javascript.jpeg";
import react from "../../assets/skills/react.png";
import node from "../../assets/skills/node.png";
import sql from "../../assets/skills/sql.jpeg";
import tailwindcss from "../../assets/skills/tailwindcss.jpeg";
import java from "../../assets/skills/java.png";
import typescript from "../../assets/skills/typescript.jpeg";
import mongodb from "../../assets/skills/mongodb.png";
import github from "../../assets/skills/github.png";
import figma from "../../assets/skills/figma.png";

import allsoft from "../../assets/history/allsoft.jpeg";
import technophilia from "../../assets/history/technophilia.jpeg";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={html} alt="Html" />
            </div>
            <div className={styles.skillImageContainer}>
              <img src={css} alt="Html" />
            </div>
            <div className={styles.skillImageContainer}>
              <img src={javascript} alt="Html" />
            </div>
            <div className={styles.skillImageContainer}>
              <img src={react} alt="Html" />
            </div>
            <div className={styles.skillImageContainer}>
              <img src={node} alt="Html" />
            </div>
            <div className={styles.skillImageContainer}>
              <img src={sql} alt="Html" />
            </div>
            <div className={styles.skillImageContainer}>
              <img src={tailwindcss} alt="Html" />
            </div>
            <div className={styles.skillImageContainer}>
              <img src={java} alt="Html" />
            </div>
            <div className={styles.skillImageContainer}>
              <img src={typescript} alt="Html" />
            </div>
            <div className={styles.skillImageContainer}>
              <img src={mongodb} alt="Html" />
            </div>
            <div className={styles.skillImageContainer}>
              <img src={github} alt="Html" />
            </div>
            <div className={styles.skillImageContainer}>
              <img src={figma} alt="Html" />
            </div>
          </div>
        </div>
        <ul className={styles.history}>
          <li className={styles.historyItem}>
            <img src={technophilia} alt="technophilia" />
            <div className={styles.historyItemDetails}>
              <h3>{`Web developer Intern, Technophilia Solutions`}</h3>
              <p>{`July, 2023 - Aug, 2023`}</p>
              <ul>
                {`• Demonstrated proficiency in HTML, CSS, Javascript and other web development technologies through active participation in project planning, development and troubleshooting phases.`}
              </ul>
              <ul>
                {`• Gaining hands-on-experience in front-end and back-end development methodologies.`}
              </ul>
            </div>
          </li>
          <li className={styles.historyItem}>
            <img src={allsoft} alt="allsoft" />
            <div className={styles.historyItemDetails}>
              <h3>{`Full Stack Development Externship, Allsoft Solutions`}</h3>
              <p>{`June, 2022 - July, 2022`}</p>
              <ul>
                {`• Developed and maintained responsive web applications using frontend technologies.`}
              </ul>
              <ul>
                {`• Collaborad with the developmet team to design and implement new features, ensuring functionality and usability.`}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
