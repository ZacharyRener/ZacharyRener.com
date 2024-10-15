import React, { useEffect, useState, useCallback } from "react";
import do_shortcode from "./shortcode.js";
import Wysiwyg from "./wysiwyg.js";
import ProjectShowcase from "./projectShowcase";

const Layout = ({ pageData }) => {
    // State to hold the processed content data
    const [contentData, setContentData] = useState([]);

    // Function to fetch the image URL from a given image ID
    const getImageUrlFromID = useCallback(async (imageID) => {
        try {
            const response = await fetch(
                `https://wp.zacharyrener.com/wp-json/wp/v2/media/${imageID}`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch image URL");
            }
            const data = await response.json();
            return data.source_url;
        } catch (error) {
            console.error("Error fetching image URL:", error);
            return null;
        }
    }, []);

    // Function to process the page data and extract necessary information
    const processPageData = useCallback(async () => {
        if (
            !pageData ||
            !pageData.acf ||
            !pageData.acf.page_builder_page_builder
        ) {
            setContentData([]);
            return;
        }

        // Process each block of page data
        const processedBlocks = await Promise.all(
            pageData.acf.page_builder_page_builder.map(async (block) => {
                switch (block.acf_fc_layout) {
                    case "project_showcase": {
                        const componentContent =
                            block.project_showcase_project_showcase;
                        const media = componentContent.media;

                        if (media) {
                            // Fetch media URLs
                            const mediaItems = await Promise.all(
                                media.map(async (item) => {
                                    if (item.media_type === "video") {
                                        const videoUrl =
                                            await getImageUrlFromID(item.video);
                                        return { video: videoUrl };
                                    } else {
                                        const imageUrl =
                                            await getImageUrlFromID(item.image);
                                        return { image: imageUrl };
                                    }
                                })
                            );

                            // Return the processed block data
                            return {
                                type: "project_showcase",
                                key: block.acf_fc_layout,
                                sidebarContent: do_shortcode(
                                    componentContent.sidebar_content
                                ),
                                steps: mediaItems, // Keep 'steps' prop name for ProjectShowcase
                            };
                        } else {
                            // If media is undefined, return with empty steps
                            return {
                                type: "project_showcase",
                                key: block.acf_fc_layout,
                                sidebarContent: do_shortcode(
                                    componentContent.sidebar_content
                                ),
                                steps: [],
                            };
                        }
                    }

                    case "wysiwyg": {
                        // Ensure content is a string
                        const contentData = block.wysiwyg_wysiwyg.wysiwyg;
                        let contentString = "";

                        if (typeof contentData === "string") {
                            contentString = contentData;
                        } else if (
                            contentData &&
                            typeof contentData === "object"
                        ) {
                            // Adjust this according to your actual data structure
                            contentString =
                                contentData.rendered ||
                                contentData.content ||
                                "";
                        }

                        return {
                            type: "wysiwyg",
                            key: block.acf_fc_layout,
                            content: do_shortcode(contentString),
                        };
                    }

                    // Add new cases here for additional block types

                    default:
                        return null;
                }
            })
        );

        // Filter out any null values and update the state
        setContentData(processedBlocks.filter((block) => block !== null));
    }, [pageData, getImageUrlFromID]);

    // useEffect to process page data whenever pageData changes
    useEffect(() => {
        processPageData();
    }, [pageData, processPageData]);

    // Render the content
    return (
        <div class="layout_root">
            {contentData.map((block, index) => {
                switch (block.type) {
                    case "project_showcase":
                        return (
                            <ProjectShowcase
                                key={index}
                                sidebarContent={block.sidebarContent}
                                steps={block.steps} // Keep 'steps' prop as expected by ProjectShowcase
                            />
                        );
                    case "wysiwyg":
                        return <Wysiwyg key={index} content={block.content} />;
                    // Add new cases here for additional block types
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default Layout;
