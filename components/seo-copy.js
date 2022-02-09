import globals from "../styles/Global.module.css";
import styles from "../styles/SeoCopy.module.css";
import Link from "next/link";
import { useState } from "react";

export default function SEOCopy(props) {
    return (
        <section className={styles.SEOCopy + " " + "container"}>
            <h1 className={styles.seoH1}>Lorem ipsum dolor sit</h1>
            <div className={styles.contentWrapper}>
                <div className={styles.left}>
                    <p className={styles.seoP}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse
                        ultrices gravida. Risus commodo viverra maecenas
                        accumsan lacus vel facilisis.
                    </p>
                </div>
                <div className={styles.right}>
                    <p className={styles.seoP}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse
                        ultrices gravida. Risus commodo viverra maecenas
                        accumsan lacus vel facilisis.
                    </p>
                </div>
            </div>
            <div className={styles.buttonWrapper}>
                <Link href="/contact">
                    <a className={globals.button}>
                        Contact Me
                        <i className={globals.arrow + " fas fa-arrow-right"} />
                    </a>
                </Link>
            </div>
        </section>
    );
}
