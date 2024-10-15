/**
 * Fetches page or post data based on given parameters, enriching projects with featured image URLs and category names.
 *
 * @param {Object} params - The parameters to fetch the data.
 * @param {number} [params.pageId] - The ID of the page to fetch.
 * @param {string} [params.postType] - The post type to fetch (e.g., "projects").
 * @param {string} [params.slug] - The slug of the post to fetch.
 * @returns {Promise<{ page_data: Object, projects_data: Array }>} The page or post data and enriched projects data.
 * @throws Will throw an error if any of the fetch operations fail.
 */
export async function fetchPageData({ pageId, postType, slug }) {
    const baseUrl = process.env.BACKEND_URL + "/wp-json/wp/v2";
    try {
        let pageData;
        if (pageId) {
            // Fetch the page data by ID
            const pageResponse = await fetch(`${baseUrl}/pages/${pageId}`);
            if (!pageResponse.ok) {
                throw new Error("Failed to fetch page data");
            }
            pageData = await pageResponse.json();
        } else if (postType && slug) {
            // Fetch the post data by post type and slug
            const postResponse = await fetch(
                `${baseUrl}/${postType}?slug=${slug}`
            );
            if (!postResponse.ok) {
                throw new Error("Failed to fetch post data");
            }
            const posts = await postResponse.json();
            if (posts.length === 0) {
                throw new Error("No post found with the given slug");
            }
            pageData = posts[0];
        } else {
            throw new Error(
                "Either pageId or both postType and slug must be provided"
            );
        }

        // Extract the featured project IDs if available
        const projectIds =
            pageData.acf?.featured_projects_new_featured_projects
                ?.featured_projects || [];

        // Fetch projects by IDs if they exist
        let projectsData = [];
        if (projectIds.length > 0) {
            const projectsResponse = await fetch(
                `${baseUrl}/projects?include=${projectIds.join(",")}`
            );
            if (!projectsResponse.ok) {
                throw new Error("Failed to fetch projects data");
            }
            projectsData = await projectsResponse.json();

            // Sort projects to match the original IDs order
            projectsData = projectIds.map((id) =>
                projectsData.find((project) => project.id === id)
            );
        }

        // Collect all unique image IDs and category IDs
        const imageIds = [
            ...new Set(
                projectsData
                    .map((project) => project.acf.featured_image)
                    .filter(Boolean)
            ),
        ];
        const categoryIds = [
            ...new Set(
                projectsData
                    .flatMap((project) => project.acf.categories)
                    .filter(Boolean)
            ),
        ];

        // Fetch all images in a single request
        let imagesData = [];
        if (imageIds.length > 0) {
            const imagesResponse = await fetch(
                `${baseUrl}/media?include=${imageIds.join(",")}`
            );
            if (!imagesResponse.ok) {
                throw new Error("Failed to fetch images data");
            }
            imagesData = await imagesResponse.json();
        }

        // Fetch all categories in a single request
        let categoriesData = [];
        if (categoryIds.length > 0) {
            const categoriesResponse = await fetch(
                `${baseUrl}/project_types?include=${categoryIds.join(",")}`
            );
            if (!categoriesResponse.ok) {
                throw new Error("Failed to fetch categories data");
            }
            categoriesData = await categoriesResponse.json();
        }

        // Create maps for quick lookup
        const imageMap = new Map(
            imagesData.map((image) => [image.id, image.source_url])
        );
        const categoryMap = new Map(
            categoriesData.map((category) => [category.id, category.name])
        );

        // Enrich projects data with image URLs and category names
        projectsData = projectsData.map((project) => {
            if (project.acf.featured_image) {
                project.acf.featured_image_url =
                    imageMap.get(project.acf.featured_image) || null;
            }
            if (project.acf.categories) {
                project.acf.categories = project.acf.categories.map(
                    (id) => categoryMap.get(id) || null
                );
            }
            return project;
        });

        return {
            page_data: pageData,
            projects_data: projectsData,
        };
    } catch (error) {
        console.error("Error fetching page data:", error);
        throw error;
    }
}
