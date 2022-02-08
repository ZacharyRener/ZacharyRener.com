import globals from "../styles/Global.module.css";
import styles from "../styles/Footer.module.css";
import { useState } from "react";

export default function Footer() {
    return (
        <section className={styles.footerWrapper}>
            <div className="container">
                <div className={styles.textWrapper}>
                    <div className={styles.left}>© Zachary Rener 2022</div>
                    <div className={styles.right}>
                        Designed and built by Zachary Rener
                    </div>
                </div>
            </div>
        </section>
    );
}
