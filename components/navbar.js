import globals from "../styles/Global.module.css";
import styles from "../styles/Navbar.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState("");
    const [mobileMenuClass, setMobileMenuClass] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setScrolled("scrolled");
            } else {
                setScrolled("");
            }
        });
    });

    const toggleMobileMenu = () => {
        if (mobileMenuClass == "active") {
            setMobileMenuClass("");
        } else {
            setMobileMenuClass("active");
        }
    };

    return (
        <div>
            <section className={"mobileMenu" + " " + mobileMenuClass}>
                <div className={styles.mobileLinkWrapper}>
                    <Link href="https://github.com/ZacharyRener" target="_blank">
                        <a className={styles.mobileLink}>GitHub</a>
                    </Link>
                    <Link href="https://docs.google.com/document/d/1TIZ4wakhXfRBrbQAm_x_dapY2KwqyK7dH9bMZ-bk4Nw/edit?usp=sharing" target="_blank">
                        <a className={styles.mobileLink}>
                            Resume
                        </a>
                    </Link>
					<Link href="https://us18.list-manage.com/contact-form?u=c3aee447c73a5506280ee1d82&form_id=037fdd1db95dae27e6e70b47841aa70b" target="_blank">
                        <a className={styles.mobileLink + " " + styles.cta}>
                            Contact
                        </a>
                    </Link>
                </div>
            </section>
            <section className={styles.navbar + " " + scrolled}>
                <nav className={styles.navbarWrapper + " "}>
                    <div className={styles.wrapper}>
                        <div className={styles.left}>
                            <div >
                                <Link href="/">
                                    <span className={styles.logo}>zr.</span>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <a
                                href="https://github.com/ZacharyRener"
                                target="_blank"
                                rel="noreferrer"
                                
                            >
                                <span className={styles.link}>GitHub</span>
                            </a>
                            <a
                                href="https://docs.google.com/document/d/1TIZ4wakhXfRBrbQAm_x_dapY2KwqyK7dH9bMZ-bk4Nw/edit?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                
                            >
                                <span className={styles.link}>Resume</span>
                            </a>
                            <span >
                                <a
                                    href="https://us18.list-manage.com/contact-form?u=c3aee447c73a5506280ee1d82&form_id=037fdd1db95dae27e6e70b47841aa70b"
                                    target="_blank"
                                    
                                >
                                    <span
                                        className={
                                            styles.link + " " + styles.cta
                                        }
                                    >
                                        Contact
                                    </span>
                                </a>
                            </span>
                            <div
                                className={
                                    styles.hamburgerWrapper +
                                    " " +
                                    globals.hasPointer
                                }
                                onClick={toggleMobileMenu}
                            >
                                <div className={styles.hamburger}></div>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    );
}
