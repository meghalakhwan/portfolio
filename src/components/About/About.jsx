import React from "react";
import styles from "./About.module.css";

import aboutImage from "../../assets/about/aboutImage.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import uiIcon from "../../assets/about/uiIcon.png";

const About = () => {
  return (
    <section className={styles.container} id="about"> 
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={aboutImage} className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon"  />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>I specialize in building modern, responsive, and user-friendly web applications
                using Next.js, React, TypeScript, and Tailwind CSS.</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="server icon" srcset="" />
            <div className={styles.aboutItemText}>
              <h3>Database Management</h3>
              <p> I have a strong background in managing and optimizing databases to ensure data integrity and efficiency using
                 MySQL, PostgreSQL, and MongoDB for scalable applications.</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="ui icon" srcset="" />
            <div className={styles.aboutItemText}>
              <h3> Full-Stack Capabilities</h3>
              <p> While my focus is frontend and databases, I also understand backend development concepts like APIs , Node.js & Express.js</p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};

export default About;
