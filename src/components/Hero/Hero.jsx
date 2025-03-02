import React from "react";
import styles from "./Hero.module.css";

import heroImage from "../../assets/hero/heroImage.png";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Megha</h1>
        <p className={styles.description}>
          Passionate Web Developer | Creating Sleek & Responsive UI{" "}
        </p>
        <a href="mailto:meghalakhwan9@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImage}
        alt=""
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
