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
import Tag from "../../../components/tag";

export default function SingleProject() {
    const router = useRouter();
    const { slug } = router.query;

    const [projectExists, setProjectExists] = useState(false);

    const [title, setTitle] = useState("Project Not Found");
    const [stepOne, setStepOne] = useState("Website Development");
    const [content, setContent] = useState(
        <span className={styles.returnHome}>
            <Link href="/">Return Home</Link>
        </span>
    );
    const [featuredImage, setFeaturedImage] = useState("Loading");
    const [detailUrl, setDetailUrl] = useState("");
    const [images, setImages] = useState([]);
    const [finalImage, setFinalImage] = useState("");
    const [steps, setSteps] = useState([]);
    const [codeLink, setCodeLink] = useState("");
    const [siteLink, setSiteLink] = useState("");
    const [finalText, setFinalText] = useState("");
    const [image2, setImage2] = useState("");
    const [compPosition, setCompPosition] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [tags, setTags] = useState("");
    const [ftr_image2, ftr_setImage2] = useState("");
    const [ftr_compPosition, ftr_setCompPosition] = useState("");
    const [ftr_excerpt, ftr_setExcerpt] = useState("");
    const [ftr_tags, ftr_setTags] = useState("");
    const [final_image2, final_setImage2] = useState("");
    const [final_compPosition, final_setCompPosition] = useState("");
    const [final_excerpt, final_setExcerpt] = useState("");
    const [final_tags, final_setTags] = useState("");
    const [ftr_btnText, ftr_setBtnText] = useState("View Project");
    const [final_btnText, final_setBtnText] = useState("View Project");

    useEffect(() => {
        if (data.hasOwnProperty(slug)) {
            const post = data[slug];
            setTitle(post.title);
            setStepOne(post.stepOne);
            setContent(post.content);
            setFeaturedImage(post.featuredImage);
            setImages(post.images);
            setFinalImage(post.finalImage);
            setSteps(post.steps);
            setCodeLink(post.codeLink);
            setSiteLink(post.siteLink);
            setProjectExists(true);
            setFinalText(post.finalText);
            setDetailUrl(post.detailUrl);
            setImage2(post.image2);
            setCompPosition(post.compPosition);
            ftr_setImage2(post.featuredImage2);
            ftr_setCompPosition(post.featuredCompPosition);
            ftr_setExcerpt(post.featuredExcerpt);
            final_setImage2(post.finalImage2);
            final_setCompPosition(post.finalCompPosition);
            final_setExcerpt(post.finalExcerpt);
            ftr_setTags(post.featuredTags);
            final_setTags(post.finalTags);
            ftr_setBtnText(post.featuredButtonText);
            final_setBtnText(post.finalButtonText);
        } else {
            console.log("doesnt have own property");
        }
    });

    const viewCodeButton = () => {
        if (codeLink != false) {
            return <Button title="View Code" link={codeLink} target="_blank" />;
        }
    };

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
                    title={<span>{stepOne}</span>}
                    image={featuredImage}
                    image2={ftr_image2}
                    excerpt={ftr_excerpt}
                    compPosition={ftr_compPosition}
                    number="01."
                    link={detailUrl}
                    external={true}
                    tags={ftr_tags}
                    buttonText={ftr_btnText}
                />
                <section className={styles.projectsWrapper}>
                    {steps.map((step, index) => {
                        return (
                            <Project
                                key={index}
                                orientation={index % 2 != 0 ? "left" : "right"}
                                color={index % 2 == 0 ? "red" : "red"}
                                title={step.title}
                                number={`0${index + 2}.`}
                                image={step.image}
                                image2={step.image2}
                                compPosition={step.compPosition}
                                link={step.link}
                                external={step.external}
                                excerpt={step.excerpt}
                                tags={step.tags}
                                buttonText={step.buttonText}
                            />
                        );
                    })}
                </section>
                <FeaturedProject
                    title={finalText}
                    image={finalImage}
                    image2={final_image2}
                    compPosition={final_compPosition}
                    excerpt={final_excerpt}
                    number={"0" + (steps.length + 2) + "."}
                    link={siteLink}
                    external={true}
                    tags={final_tags}
                    buttonText={final_btnText}
                />

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
