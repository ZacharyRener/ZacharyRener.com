import globals from "../styles/Global.module.css";
import styles from "../styles/FeaturedProject.module.css";
import Link from "next/link";
import { useState } from "react";

export default function FeaturedProject(props) {
    const number = () => {
        if (props.hasOwnProperty("number")) {
            return <div className={styles.largeNumber}>{props.number}</div>;
        } else {
            return <div className={styles.largeNumber}>01</div>;
        }
    };

    const button = () => {
        if (props.hasOwnProperty("link")) {
            if(props.hasOwnProperty("external") && props.external == true){
                return (
                    <a target="_blank" href={props.link}>
                        <span className={globals.button}>
                            View Project
                            <i
                                className={globals.arrow + " fas fa-arrow-right"}
                            ></i>
                        </span>
                    </a>
                );
            } 
            return (
                <Link href={props.link}>
                    <span className={globals.button}>
                        View Project
                        <i
                            className={globals.arrow + " fas fa-arrow-right"}
                        ></i>
                    </span>
                </Link>
            );
        }
    };

    const image = () => {
        if (props.hasOwnProperty("link")) {
            if(props.hasOwnProperty("external") && props.external == true){
                return (
                    <a target="_blank" href={props.link}>
                        <img
                            src={props.image}
                            className={globals.hasShadow + " " + globals.hasPointer}
                        />
                    </a>
                );
            }
            return (
                <Link href={props.link}>
                    <img
                        src={props.image}
                        className={globals.hasShadow + " " + globals.hasPointer}
                    />
                </Link>
            );
        } else {
            return <img src={props.image} className={globals.hasShadow} />;
        }
    };

    return (
        <section className="featuredProjectWrapper">
            <section className={styles.featuredProject}>
                <div className={styles.titleWrapper}>
                    <div className={globals.connector}>
                        {number()}
                        <h2 className={styles.title}>{props.title}</h2>
                    </div>
                </div>
            </section>
            <section className={styles.projectWrapper}>
                <div className={styles.imageWrapper + " container"}>
                    {image()}
                </div>
            </section>
            <div className={styles.buttonWrapper}>{button()}</div>
        </section>
    );
}
