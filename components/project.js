import globals from "../styles/Global.module.css";
import styles from "../styles/Project.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Project(props) {
    const titleOrientation = () => {
        if (props.orientation == "right") {
            return styles.right;
        }
    };

    const buttonOrientation = () => {
        if (props.orientation == "right") {
            return styles.buttonRight;
        } else if (props.orientation == "left") {
            return styles.buttonLeft;
        }
    };

    const projectColor = () => {
        if (props.color == "gray") {
            return styles.gray;
        } else if (props.color == "red") {
            return styles.red;
        }
    };

    const button = () => {
        if (props.hasOwnProperty("link")) {
            return (
                <div
                    className={styles.buttonWrapper + " " + buttonOrientation()}
                >
                    <Link href={props.link}>
                        <a className={globals.button}>
                            View Project
                            <i
                                className={
                                    globals.arrow + " fas fa-arrow-right"
                                }
                            ></i>
                        </a>
                    </Link>
                </div>
            );
        }
    };

    return (
        <div className={styles.projectWrapper + " " + projectColor()}>
            <div className="container">
                <section className={styles.project}>
                    <div className={styles.imageSide}>
                        <img className={globals.hasShadow} src={props.image} />
                    </div>
                    <div
                        className={styles.titleSide + " " + titleOrientation()}
                    >
                        <h2 className={styles.headline}>{props.title}</h2>
                        <div className={styles.largeNumber}>{props.number}</div>
                    </div>
                </section>
            </div>
            <div
                className={
                    props.orientation == "right" ? "container relative" : ""
                }
            ></div>
            {button()}
        </div>
    );
}
