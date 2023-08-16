import globals from "../styles/Global.module.css";
import styles from "../styles/Project.module.css";
import Link from "next/link";
import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from "react-compare-slider";
import { useEffect, useState } from "react";

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
        <div className={styles.projectWrapper + " " + projectColor()}>
            <div className="container">
                <section className={styles.project}>
                    <div className={styles.imageSide}>{imagePart()}</div>
                    <div
                        className={styles.titleSide + " " + titleOrientation()}
                    >
                        <div className={styles.headline}>
                            {tags()}
                            <h2>{props.title}</h2>
                            {excerpt()}
                        </div>
                        <div className={styles.largeNumber}>{props.number}</div>
                    </div>
                </section>
            </div>
            <div
                className={
                    props.orientation == "right" ? "container relative" : ""
                }
            ></div>
            <div className="container relative">{button()}</div>
        </div>
    );
}
