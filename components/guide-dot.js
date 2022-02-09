import globals from "../styles/Global.module.css";
import styles from "../styles/FeaturedProject.module.css";
import { useState } from "react";

export default function GuideDot() {
    return (
        <section className={styles.dotGuideWrapper}>
            <div className={styles.guideLabel}>My Work</div>
            <div className={styles.dotGuide}></div>
        </section>
    );
}
