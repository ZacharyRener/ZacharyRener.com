import homeStyles from "../styles/Home.module.css";
import globals from "../styles/Global.module.css";
import { useState, useEffect } from "react";
import styles from "../styles/HeaderImage.module.css";

export default function HeaderImage(props) {
    return (
        <div className={globals.connector}>
            <div className={globals.mainstageOverlay}></div>
            <section
                className={homeStyles.mainstage + " " + styles.headerImage}
            >
                <div className="container">
                    <section
                        className={homeStyles.content + " " + styles.pageTitle}
                    >
                        <div uk-scrollspy="cls:uk-animation-fade uk-animation-slide-bottom-small;delay:0; repeat: false;">
                            {props.title}
                        </div>
                    </section>
                </div>
                <section className={homeStyles.videoWrapper}>
                    <video
                        className={homeStyles.video}
                        id="video"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/output.mp4" type="video/mp4" />
                    </video>
                    <div className={homeStyles.controlSpace}></div>
                </section>
                <section className={homeStyles.gradientOverlay}></section>
            </section>
        </div>
    );
}
