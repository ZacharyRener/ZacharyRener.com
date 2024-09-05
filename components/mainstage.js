import styles from "../styles/Home.module.css";
import globals from "../styles/Global.module.css";
import { useState } from "react";
import GuideDot from "../components/guide-dot";
import Link from "next/link";

export default function Mainstage() {
    return (
        <div className={globals.connector}>
            <div className={globals.mainstageOverlay}></div>
            <section id="mainstage" className={styles.mainstage}>
                <div className="container">
                    <section className={styles.content}>
                        <div>
                            <h1>
                                <div uk-scrollspy="cls:uk-animation-fade uk-animation-slide-bottom-small;delay:0; repeat: false;">
                                    I'm Zach,
                                </div>
                                <div uk-scrollspy="cls:uk-animation-fade uk-animation-slide-bottom-small;delay:50; repeat: false;">
                                    an Independent
                                </div>
                                <div uk-scrollspy="cls:uk-animation-fade uk-animation-slide-bottom-small;delay:100; repeat: false;">
                                    Web Developer.
                                </div>
                            </h1>
                            <div class="guideLabel">
                                check out my recent full-builds:
                            </div>
                            {/* <p
                                className={styles.innerContent}
                                uk-scrollspy="cls:uk-animation-fade uk-animation-slide-bottom-small;delay: 50; repeat: false;"
                            >
                                fullstack web developer with7+ years of agency
                                experience
                            </p> */}
                            {/* <a
                                href="https://us18.list-manage.com/contact-form?u=c3aee447c73a5506280ee1d82&form_id=037fdd1db95dae27e6e70b47841aa70b"
                                target="_blank"
                            >
                                <span
                                    uk-scrollspy="cls:uk-animation-fade uk-animation-slide-bottom-small;delay:75; repeat: false;"
                                    className="btn btn-primary"
                                >
                                    Get in Touch
                                </span>
                            </a> */}
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
            {/* <GuideDot /> */}
        </div>
    );
}
