import globals from "../styles/Global.module.css";
import styles from "../styles/FeaturedProject.module.css";
import { useState } from "react";

export default function GuideDot() {
    return (
        <section
            className={styles.dotGuideWrapper}
            uk-scrollspy="cls:uk-animation-fade uk-animation-slide-bottom-small;delay:150; repeat: false;"
        >
            <div className={styles.guideLabel}>Some Recent Work:</div>
            <div className={styles.dotGuide}></div>
        </section>
    );
}
