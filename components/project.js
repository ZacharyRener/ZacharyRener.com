import globals from "../styles/Global.module.css";
import styles from "../styles/Project.module.css";
import Link from "next/link";
import ParallaxContent from "../components/parallax-content.js";
import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from "react-compare-slider";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Project(props) {
    const uniqueId = uuidv4();
    let plxStr = `y: 100; target: #${uniqueId}`;
    let plxStr_rev = `y: 100; target: #${uniqueId}`;

    plxStr = "disabled";
    plxStr_rev = "disabled";

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

    const [leftClass, setLeftClass] = useState("");

    useEffect(() => {
        if (props.hasOwnProperty("orientation")) {
            if (props.orientation == "left") {
                setLeftClass("container relative");
            }
        }
    });

    const button = () => {
        let buttonText = "View Project";
        if (props.hasOwnProperty("buttonText")) {
            buttonText = props.buttonText;
        }

        if (props.hasOwnProperty("link")) {
            if (props.hasOwnProperty("external") && props.external == true) {
                return (
                    <div
                        className={
                            styles.buttonWrapper + " " + buttonOrientation()
                        }
                    >
                        <a href={props.link} target="_blank" rel="noreferrer">
                            <a className={globals.button}>
                                {buttonText}
                                <i
                                    className={
                                        globals.arrow + " fas fa-arrow-right"
                                    }
                                ></i>
                            </a>
                        </a>
                    </div>
                );
            }
            return (
                <div
                    className={styles.buttonWrapper + " " + buttonOrientation()}
                >
                    <Link href={props.link}>
                        <a className={globals.button}>
                            {buttonText}
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

    const image = () => {
        if (props.hasOwnProperty("link")) {
            if (props.hasOwnProperty("external") && props.external == true) {
                return (
                    <a target="_blank" rel="noreferrer" href={props.link}>
                        <img
                            className={
                                globals.hasShadow +
                                " " +
                                globals.hasPointer +
                                " " +
                                styles.projectImage
                            }
                            src={props.image}
                        />
                    </a>
                );
            }
            return (
                <Link href={props.link}>
                    <img
                        className={
                            globals.hasShadow +
                            " " +
                            globals.hasPointer +
                            " " +
                            styles.projectImage
                        }
                        src={props.image}
                    />
                </Link>
            );
        } else {
            return <img className={globals.hasShadow} src={props.image} />;
        }
    };

    const imagePart = () => {
        let offset = "y: 50";
        if (parseInt(props.number) % 2 == 0) {
            offset = "y: -50";
        }

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

    const imagePartSimple = () => {
        return (
            <div>
                <img className={styles.projectImage} src={props.image} />
            </div>
        );
    };

    const excerpt = () => {
        if (props.hasOwnProperty("excerpt")) {
            return <p className={styles.excerpt}>{props.excerpt}</p>;
        }
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

    const newbutton = (buttonText, buttonLink, version, target) => {
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
        <div className={"projectWrapper " + apndClass} id={uniqueId}>
            <div className={styles.projectWrapper + " " + projectColor()}>
                <div className="container">
                    <section className={styles.project}>
                        <div
                            className={styles.imageSide}
                            uk-scrollspy="cls: uk-animation-slide-bottom-small; repeat: false;"
                        >
                            {props.hasOwnProperty("video") && props.video
                                ? video()
                                : imagePartSimple()}
                        </div>
                        <div
                            className={
                                styles.titleSide + " " + titleOrientation()
                            }
                        >
                            <div
                                className={styles.headline}
                                uk-parallax={plxStr}
                            >
                                <div uk-scrollspy="target: > *; cls: uk-animation-slide-bottom-small; delay: 50; repeat: false;">
                                    {title()}
                                    {tags()}
                                    {excerpt()}
                                    <div className="buttons">
                                        {props.button1 &&
                                            newbutton(...props.button1)}
                                        {props.button2 &&
                                            newbutton(...props.button2)}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.largeNumber}>
                                {props.number}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
