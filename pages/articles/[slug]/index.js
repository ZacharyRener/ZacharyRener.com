import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import { fetchPageData } from "../../lib/fetchPageContent";
import { useEffect } from "react";

/**
 * Fetches data on the server side from the headless WordPress.
 *
 * @param {Object} context - The context object provided by Next.js.
 * @returns {Promise<{ props: { pageData: Object, articlesData: Array } }>} The data fetched from the WordPress API.
 * @throws Will throw an error if fetching page data fails.
 */
export async function getServerSideProps(context) {
    const { params } = context;
    try {
        const { page_data: pageData } = await fetchPageData({
            postType: "articles",
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

export default function SingleArticle({ pageData }) {
    useEffect(() => {
        document.body.classList = "";
        document.body.classList.add("single-article");
        console.log("pageData", pageData);
    });
    return (
        <main>
            <Header />
            <Navbar />
            <div class="main-content">
                <div class="p-inner">
                    <div
                        class="content_root"
                        dangerouslySetInnerHTML={{
                            __html: pageData.content.rendered,
                        }}
                    ></div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
