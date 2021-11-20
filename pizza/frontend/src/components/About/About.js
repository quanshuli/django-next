import React from "react";
import Head from "next/head";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>This is about page</p>
    </div>
  );
};

export default About;
