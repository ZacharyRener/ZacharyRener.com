import globals from "../styles/Global.module.css";
import styles from "../styles/FeaturedProject.module.css";
import Link from "next/link";
import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from "react-compare-slider";

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
        let buttonText = "View Project";
        if (props.hasOwnProperty("buttonText")) {
            buttonText = props.buttonText;
        }

        if (props.hasOwnProperty("link")) {
            if (props.hasOwnProperty("external") && props.external == true) {
                return (
                    <a target="_blank" rel="noreferrer" href={props.link}>
                        <span className={globals.button}>
                            {buttonText}
                            <i
                                className={
                                    globals.arrow + " fas fa-arrow-right"
                                }
                            ></i>
                        </span>
                    </a>
                );
            }
            return (
                <Link href={props.link}>
                    <span className={globals.button}>
                        {buttonText}
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
            if (props.hasOwnProperty("external") && props.external == true) {
                return (
                    <a target="_blank" rel="noreferrer" href={props.link}>
                        {imagePart()}
                    </a>
                );
            }
            return <Link href={props.link}>{imagePart()}</Link>;
        } else {
            return <img src={props.image} className={globals.hasShadow} />;
        }
    };

    const imagePart = () => {
        return (
            <ReactCompareSlider
                boundsPadding={0}
                itemOne={
                    <ReactCompareSliderImage
                        alt="Image one"
                        src={props.image}
                    />
                }
                itemTwo={
                    <ReactCompareSliderImage
                        alt="Image two"
                        src={props.image2}
                        style={{ transform: "scale(1.125)" }}
                    />
                }
                position={props.compPosition}
                style={{
                    height: "100%",
                    width: "100%",
                }}
                changePositionOnHover={false}
            />
        );
    };

    const excerpt = () => {
        if (props.hasOwnProperty("excerpt")) {
            return <p className={styles.excerpt}>{props.excerpt}</p>;
        }
    };

    const title = () => {
        if (props.hasOwnProperty("link")) {
            if (props.hasOwnProperty("external") && props.external == true) {
                return (
                    <span class="linked-title">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="linked-title"
                            href={props.link}
                        >
                            {titlePart()}
                        </a>
                    </span>
                );
            }
            return (
                <span className="linked-title">
                    <Link className="linked-title" href={props.link}>
                        {titlePart()}
                    </Link>
                </span>
            );
        } else {
            return <h2>{props.title}</h2>;
        }
    };

    const titlePart = () => {
        return <h2>{props.title}</h2>;
    };

    const tags = () => {
        if (props.hasOwnProperty("tags")) {
            return (
                <div className="tags">
                    {props.tags.map((tag) => (
                        <div className="tag">{tag.name}</div>
                    ))}
                </div>
            );
        }
    };

    return (
        <section className="featuredProjectWrapper">
            <section className={styles.featuredProject}>
                <div className={styles.titleWrapper}>
                    <div className={globals.connector}>
                        {number()}
                        <div className={styles.title}>
                            {tags()}
                            {title()}
                            {excerpt()}
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.projectWrapper}>
                <div className={styles.imageWrapper + " container"}>
                    {imagePart()}
                </div>
            </section>
            <div className={styles.buttonWrapper}>{button()}</div>
        </section>
    );
}
