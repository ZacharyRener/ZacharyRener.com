import globals from "../styles/Global.module.css";
import styles from "../styles/FeaturedProject.module.css";
import Link from "next/link";
import ParallaxContent from "../components/parallax-content.js";
import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from "react-compare-slider";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function FeaturedProject(props) {
    const uniqueId = uuidv4();
    let plxStr = `y: 100; target: #${uniqueId}`;
    plxStr = "disabled";

    const number = () => {
        if (props.hasOwnProperty("number")) {
            return <div className={styles.largeNumber}>{props.number}</div>;
        } else {
            return <div className={styles.largeNumber}>01</div>;
        }
    };

    const button = (buttonText, buttonLink, version, target) => {
        // defaults
        buttonText = buttonText ?? "View Live Site";
        buttonLink = buttonLink ?? "#";
        version = version ?? "default";
        target = target ?? "_self";

        return (
            <a
                href={buttonLink}
                target={target}
                className={`button version-${version}`}
            >
                {buttonText}
            </a>
        );
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

    const imagePartSimple = () => {
        return <img className={styles.projectImage} src={props.image} />;
    };

    const imagePart = () => {
        let offset = "y: -100";
        return (
            <div uk-parallax={plxStr}>
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
            </div>
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
                <div
                    className="tags"
                    uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-small; delay: 25; repeat: false;"
                >
                    {props.tags.map((tag) => (
                        <div className="tag">{tag.name}</div>
                    ))}
                </div>
            );
        }
    };

    const video = () => {
        return (
            <div>
                <video
                    playsInline
                    controls
                    autoPlay
                    loop
                    muted
                    uk-video="autoplay: inview"
                    src={props.video}
                ></video>
            </div>
        );
    };

    const apndClass = props.hasOwnProperty("clickable") ? "not-clickable" : "";

    return (
        <section
            className={"featuredProjectWrapper " + apndClass}
            id={uniqueId}
        >
            <section className={styles.featuredProject}>
                <div className={styles.titleWrapper}>
                    <div className={globals.connector}>
                        {number()}
                        <div className={styles.title}>
                            <div uk-scrollspy="target: > *; cls: uk-animation-slide-bottom-small; delay: 50; repeat: false;">
                                {title()}
                                {tags()}
                                {excerpt()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.projectWrapper}>
                <div
                    className={styles.imageWrapper + " container"}
                    uk-scrollspy="target: > *; cls:uk-animation-fade uk-animation-slide-bottom-small; repeat: false;"
                >
                    {props.hasOwnProperty("video") && props.video
                        ? video()
                        : imagePartSimple()}
                </div>
            </section>
            <div
                uk-scrollspy="target: > *; cls: uk-animation-slide-bottom-small; repeat: false;"
                className={styles.buttonWrapper}
            >
                {props.button1 && button(...props.button1)}
                {props.button2 && button(...props.button2)}
            </div>
        </section>
    );
}
