import styles from "../styles/Home.module.css";
import globals from "../styles/Global.module.css";
import { useState } from "react";
import GuideDot from "../components/guide-dot";

export default function Mainstage() {
  return (
    <div className={globals.connector}>
      <div className={globals.mainstageOverlay}></div>
      <section id="mainstage" className={styles.mainstage}>
        <div className="container">
          <section className={styles.content}>
            <div>
              Hi. I&apos;m Zach,
              <br />A Software-Engineer
            </div>
          </section>
          <div className={styles.captionWrapper}></div>
        </div>
        <section className={styles.videoWrapper}>
          <video
            className={styles.video}
            id="video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/output.mp4" type="video/mp4" />
          </video>
          <div className={styles.controlSpace}></div>
        </section>
        <section className={styles.gradientOverlay}></section>
      </section>
      <GuideDot />
    </div>
  );
}
