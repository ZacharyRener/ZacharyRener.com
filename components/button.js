import globals from "../styles/Global.module.css";
import styles from "../styles/FeaturedProject.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Button(props) {
    return (
        <a href={props.link} className={globals.button} target={props.target}>
            {props.title}
            <i className={globals.arrow + " fas fa-arrow-right"}></i>
        </a>
    );
}
