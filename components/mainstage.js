import styles from "../styles/Home.module.css";
import globals from "../styles/Global.module.css";
import { useState } from "react";
import GuideDot from "../components/guide-dot";

export default function Mainstage() {
    return (
        <div className={globals.connector}>
            <section id="mainstage" className={styles.mainstage}>
                <div className="container">
                    <section className={styles.content}>
                        <div>
                            Hi. I'm Zach,
                            <br />A Full-Stack
                            <br /> Web Developer
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

function handleTransition() {
    console.log("transition!");
}
