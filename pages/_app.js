import "hamburgers/dist/hamburgers.min.css";
import "../styles/globals.css";
import "../styles/main.scss";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { GlobalContext } from "../context/GlobalContext";
import Maintenance from "../components/maintenance";
import App from "next/app";

const isMaintenanceMode = false;

Router.events.on("routeChangeStart", () => {
    NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
    NProgress.done();
});
Router.events.on("routeChangeError", () => {
    NProgress.done();
});

function MyApp({ Component, pageProps, isLoggedIn }) {
    const router = useRouter();
    const [globalState, setGlobalState] = useState({
        postID: 0,
    });
    const [hasUserOverride, setHasUserOverride] = useState(false);

    useEffect(() => {
        if (window.location.search.includes("override=true")) {
            setHasUserOverride(true);
        }

        const fetchPostID = async () => {
            let postID = 11; // Default to homepage ID
            const pathname = router.asPath.split("?")[0];

            if (pathname === "/" || pathname === "") {
                // Homepage
                postID = 11;
            } else if (pathname.includes("/projects/")) {
                // Projects post type
                const slug = pathname
                    .split("/projects/")[1]
                    ?.replace(/\/$/, "");
                if (slug) {
                    const id = await getPostIDFromSlug(slug, "projects");
                    if (id) postID = id;
                }
            } else if (pathname.includes("/articles/")) {
                // Articles post type
                const slug = pathname
                    .split("/articles/")[1]
                    ?.replace(/\/$/, "");
                if (slug) {
                    const id = await getPostIDFromSlug(slug, "articles");
                    if (id) postID = id;
                }
            } else {
                // Default to 'page' post type
                const slug = pathname.replace(/^\/|\/$/g, ""); // Remove leading/trailing slashes
                if (slug) {
                    const id = await getPostIDFromSlug(slug, "pages");
                    if (id) postID = id;
                }
            }

            setGlobalState({ postID });
        };

        fetchPostID();
    }, [router.asPath]); // Dependency on router.asPath

    if (isMaintenanceMode && !hasUserOverride) {
        return <Maintenance />;
    }

    return (
        <GlobalContext.Provider value={globalState}>
            <Component {...pageProps} />
        </GlobalContext.Provider>
    );
}

async function getPostIDFromSlug(slug, postType) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/${postType}?slug=${slug}`
        );
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
            return data[0].id;
        } else {
            console.error(`No ${postType} found for slug: ${slug}`);
            return null;
        }
    } catch (error) {
        console.error("Error fetching post ID:", error);
        return null;
    }
}

export default MyApp;
