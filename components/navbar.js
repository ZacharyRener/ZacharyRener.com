import globals from "../styles/Global.module.css";
import styles from "../styles/Navbar.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if (window.scrollY > 0) {
                setScrolled("scrolled");
            } else {
                setScrolled("");
            }
        });
    });

    return (
        <section className={styles.navbar + " " + scrolled}>
            <nav className={styles.navbarWrapper + " "}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <Link href="/">
                            <span className={styles.logo}>ZR</span>
                        </Link>
                    </div>
                    <div className={styles.right}>
                        <Link href="/all-projects">
                            <span className={styles.link}>All Projects</span>
                        </Link>
                        <Link href="/contact">
                            <span className={styles.link + " " + styles.cta}>
                                Contact
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>
        </section>
    );
}
