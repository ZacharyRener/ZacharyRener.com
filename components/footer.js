import globals from "../styles/Global.module.css";
import styles from "../styles/Footer.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <section className={styles.footerWrapper}>
            <div className="container">
                <div className={styles.textWrapper}>
                    <div className={styles.left}>© Zachary Rener 2024</div>
                    <div className={styles.right}>
                        {/* Designed and built by Zachary Rener */}
                        <Link
                            href="https://github.com/ZacharyRener"
                            target="_blank"
                        >
                            <a className={styles.mobileLink}>GitHub</a>
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link
                            href="https://wp.zacharyrener.com/wp-content/uploads/2025/03/ZachRener_Resume_3_12_25_Latest.pdf"
                            target="_blank"
                        >
                            <a className={styles.mobileLink}>Resume</a>
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link
                            href="https://us18.list-manage.com/contact-form?u=c3aee447c73a5506280ee1d82&form_id=037fdd1db95dae27e6e70b47841aa70b"
                            target="_blank"
                        >
                            <a className={styles.mobileLink + " " + styles.cta}>
                                Contact
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
