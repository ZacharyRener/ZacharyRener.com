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
                            <h1>
                                <div uk-scrollspy="cls:uk-animation-fade uk-animation-slide-bottom-small;delay:0; repeat: true;">
                                    Web Development
                                </div>
                                <div uk-scrollspy="cls:uk-animation-fade uk-animation-slide-bottom-small;delay: 150; repeat: true;">
                                    For Agencies
                                </div>
                            </h1>
                            <p
                                className={styles.innerContent}
                                uk-scrollspy="cls:uk-animation-fade uk-animation-slide-bottom-small;delay: 300; repeat: true;"
                            >
                                Hi, I'm Zach. Your Agency's Web Development
                                Partner.
                            </p>
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
