import { useEffect } from "react";
import { fetchPageData } from "../lib/fetchPageContent";
import styles from "../styles/Home.module.css";
import Head from "../components/header.js";
import Footer from "../components/footer";
import Mainstage from "../components/mainstage";
import Navbar from "../components/navbar";
import FeaturedProject from "../components/featured-project";
import Project from "../components/project";

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
        const { page_data: pageData, projects_data: projectsData } =
            await fetchPageData({
                pageId: 11,
            });
        return {
            props: {
                pageData,
                projectsData,
            },
        };
    } catch (error) {
        console.error("Error fetching server-side props:", error);
        return {
            props: {
                pageData: null,
                projectsData: [],
            },
        };
    }
}

/**
 * The Home component renders the homepage with featured projects.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.pageData - The page data fetched from WordPress.
 * @param {Array} props.projectsData - The array of projects fetched from WordPress.
 * @returns {JSX.Element} The rendered homepage component.
 */
export default function Home({ pageData, projectsData = [] }) {
    useEffect(() => {
        document.body.className = "home";
    }, []);

    /**
     * Generates an array of project components to be rendered.
     *
     * @returns {Array<JSX.Element>} An array of FeaturedProject and Project components.
     */
    const renderProjects = () => {
        if (projectsData.length === 0) return null;

        return projectsData.map((project, index) => {
            // Extract tags from project categories
            const tags = project.acf.categories
                ? project.acf.categories.map((category) => ({ name: category }))
                : [];

            // Prepare featured buttons if available
            const featuredButtons = project.acf.featured_buttons || [];
            const [button1Data, button2Data] = featuredButtons;

            // Construct project properties
            const projectProps = {
                key: project.id,
                title: project.title.rendered,
                image: project.acf.featured_image_url,
                link: `/projects/${project.slug}`,
                tags,
                ...(button1Data && {
                    button1: [button1Data.title, button1Data.url, "accent"],
                }),
                ...(button2Data && {
                    button2: [
                        button2Data.title,
                        button2Data.url,
                        null,
                        "_blank",
                    ],
                }),
            };

            if (index === 0 || index === projectsData.length - 1) {
                // The first project is featured
                return <FeaturedProject {...projectProps} />;
            } else {
                // Alternate project orientation
                projectProps.orientation = index % 2 === 0 ? "left" : "right";
                return <Project {...projectProps} />;
            }
        });
    };

    return (
        <main>
            <Head />
            <Navbar />
            <Mainstage />
            {projectsData.length > 0 ? (
                renderProjects()
            ) : (
                <p>No projects available</p>
            )}
            <Footer />
        </main>
    );
}
