import globals from "../styles/Global.module.css";
import styles from "../styles/Navbar.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState("");
    const [mobileMenuClass, setMobileMenuClass] = useState("");
    const [isActive, setIsActive] = useState(false);

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

    const navbarLinks = () => {
        return (
            <>
                <a
                    href="https://docs.google.com/document/d/1TIZ4wakhXfRBrbQAm_x_dapY2KwqyK7dH9bMZ-bk4Nw/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className={styles.link}>Resume</span>
                </a>
                <a
                    href="https://docs.google.com/document/d/1F7Xmob4Jh8ImSJ9EataWQ7xxaf8bIx4cs6jWiF7IfBw/edit#heading=h.hnwatklyy346"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className={styles.link}>Code Samples</span>
                </a>
                <a
                    href="https://github.com/ZacharyRener"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className={styles.link}>GitHub</span>
                </a>

                <span>
                    <a
                        href="https://us18.list-manage.com/contact-form?u=c3aee447c73a5506280ee1d82&form_id=037fdd1db95dae27e6e70b47841aa70b"
                        target="_blank"
                    >
                        <span
                            className={styles.link + " button version-accent"}
                        >
                            Contact
                        </span>
                    </a>
                </span>
            </>
        );
    };

    return (
        <div>
            <section className={"mobileMenu" + " " + mobileMenuClass}>
                <div className={styles.mobileLinkWrapper}>{navbarLinks()}</div>
            </section>
            <section className={styles.navbar + " " + scrolled}>
                {process.env.NEXT_PUBLIC_STAGING_ENABLED === "true" && (
                    <div className="alert-bar">Staging Enabled</div>
                )}
                <nav className={styles.navbarWrapper + " "}>
                    <div className={styles.wrapper}>
                        <div className={styles.left}>
                            <div>
                                <Link href="/">
                                    <span className={styles.logo}>zr.</span>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.right}>
                            {navbarLinks()}
                            <div
                                className={
                                    styles.hamburgerWrapper +
                                    " " +
                                    globals.hasPointer
                                }
                                onClick={toggleMobileMenu}
                            >
                                {/* <div className={styles.hamburger}></div> */}
                                <button
                                    className={`hamburger hamburger--spin ${
                                        isActive ? "is-active" : ""
                                    }`}
                                    type="button"
                                    onClick={() => setIsActive(!isActive)}
                                >
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    );
}
