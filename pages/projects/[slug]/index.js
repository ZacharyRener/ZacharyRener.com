import { useRouter } from "next/router";
import subpageStyles from "../../../styles/Subpage.module.css";
import styles from "../../../styles/SingleProject.module.css";
import { useEffect, useState } from "react";
import Head from "../../../components/header.js";
import HeaderImage from "../../../components/header-image.js";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import globals from "../../../styles/Global.module.css";
import FeaturedProject from "../../../components/featured-project";
import Project from "../../../components/project";
import Button from "../../../components/button";
import Link from "next/link";
import data from "../../../data/projects";

export default function SingleProject() {
    const router = useRouter();
    const { slug } = router.query;

    const [projectExists, setProjectExists] = useState(false);

    const [title, setTitle] = useState("Project Not Found");
    const [content, setContent] = useState(
        <span className={styles.returnHome}>
            <Link href="/">Return Home</Link>
        </span>
    );
    const [featuredImage, setFeaturedImage] = useState("Loading");
    const [images, setImages] = useState([]);
    const [finalImage, setFinalImage] = useState("");
    const [steps, setSteps] = useState([]);
    const [codeLink, setCodeLink] = useState("");
    const [siteLink, setSiteLink] = useState("");

    useEffect(() => {
        if (data.hasOwnProperty(slug)) {
            const post = data[slug];
            setTitle(post.title);
            setContent(post.content);
            setFeaturedImage(post.featuredImage);
            setImages(post.images);
            setFinalImage(post.finalImage);
            setSteps(post.steps);
            setCodeLink(post.codeLink);
            setSiteLink(post.siteLink);
            setProjectExists(true);
        } else {
            console.log("doesnt have own property");
        }
    });

    if (projectExists) {
        return (
            <div className={styles.singleProjectWrapper}>
                <Head />
                <Navbar />
                <HeaderImage title={title} />
                <section
                    className={
                        subpageStyles.bodyCopy + " container " + styles.bodyCopy
                    }
                >
                    <p>{content}</p>
                </section>
                <FeaturedProject
                    title={
                        <span>
                            Website
                            <br />
                            Development
                        </span>
                    }
                    image={featuredImage}
                    number="01."
                />
                <section className={styles.projectsWrapper}>
                    {steps.map((step, index) => {
                        return (
                            <Project
                                key={index}
                                orientation={index % 2 == 0 ? "left" : "right"}
                                color={index % 2 == 0 ? "gray" : "red"}
                                title={step.title}
                                number={`0${index + 2}.`}
                                image={step.image}
                            />
                        );
                    })}
                </section>
                <FeaturedProject
                    title={<span>Launch</span>}
                    image={finalImage}
                    number={"0" + (steps.length + 2) + "."}
                />
                <section className={styles.buttonWrapper}>
                    <Button title="View Code" link={codeLink} target="_blank" />
                    <Button
                        title="View Live Site"
                        link={siteLink}
                        target="_blank"
                    />
                </section>
                <Footer />
            </div>
        );
    } else {
        return (
            <div className={styles.singleProjectWrapper}>
                <Head />
                <Navbar />
                <HeaderImage title={title} />
                <section
                    className={
                        subpageStyles.bodyCopy + " container " + styles.bodyCopy
                    }
                >
                    <p>{content}</p>
                </section>

                <Footer />
            </div>
        );
    }
}
