import { useRouter } from "next/router";
import { fetchPageData } from "../../../lib/fetchPageContent";
import subpageStyles from "../../../styles/Subpage.module.css";
import styles from "../../../styles/SingleProject.module.css";
import { useEffect, useState } from "react";
import Head from "../../../components/header.js";
import HeaderImage from "../../../components/header-image.js";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Project from "../../../components/project";
import Link from "next/link";
import data from "../../../data/projects";
import ProjectShowcase from "../../../components/projectShowcase.js";
import Layout from "../../../components/_layout.js";
import do_shortcode from "../../../components/shortcode.js";

/**
 * Fetches data on the server side from the headless WordPress.
 *
 * @param {Object} context - The context object provided by Next.js.
 * @returns {Promise<{ props: { pageData: Object, projectsData: Array } }>} The data fetched from the WordPress API.
 * @throws Will throw an error if fetching page data fails.
 */
export async function getServerSideProps(context) {
    const { params } = context;
    try {
        const { page_data: pageData } = await fetchPageData({
            postType: "projects",
            slug: params?.slug,
        });
        return {
            props: {
                pageData,
            },
        };
    } catch (error) {
        console.error("Error fetching server-side props:", error);
        return {
            props: {
                pageData: null,
            },
        };
    }
}

export default function SingleProject({ pageData }) {
    const router = useRouter();
    const { slug } = router.query;

    const [projectExists, setProjectExists] = useState(false);
    const [title, setTitle] = useState("Project Not Found");
    const [content, setContent] = useState(
        <span className={styles.returnHome}>
            <Link href="/">Return Home</Link>
        </span>
    );
    const [sidebarContent, setSidebarContent] = useState("");
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        document.body.classList = "";
        document.body.classList.add("single-project");
        console.log("pageData", pageData);
        if (pageData) {
            setTitle(pageData.acf.hero_hero.title);
            setContent(pageData.acf.hero_hero.excerpt);
            // setSidebarContent(post.sidebarContent);
            // setSteps(post.steps);
            setProjectExists(true);
        }
    });

    if (projectExists) {
        return (
            <div className="singleProjectWrapper">
                <Head />
                <Navbar />
                <section className="container bodyCopy">
                    <div className="inner">
                        <div uk-scrollspy="target: > *; cls:uk-animation-fade uk-animation-slide-bottom-small zr-animation;delay:50; repeat: false;">
                            <h1>{title}</h1>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: do_shortcode(content),
                                }}
                            ></div>
                        </div>
                    </div>
                </section>
                <div className="main-container">
                    <Layout pageData={pageData} />
                </div>
                <Footer />
            </div>
        );
    } else {
        // 404
        return (
            <div className="singleProjectWrapper">
                <Head />
                <Navbar />
                <HeaderImage title={title} />
                <section className="container bodyCopy">
                    <div>
                        <p>{content}</p>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}
