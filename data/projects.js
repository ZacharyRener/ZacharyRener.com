const data = {
    strive: {
        title: "Strive",
        content:
            "A sleek, modern website that a company can manage themselves. Delivered a fully custom WordPress theme for lead generation and web presence.",
        featuredImage: "/Strive/Homepage.jpg",
        stepOne: "Website Development",
        steps: [
            {
                image: "/Strive/MegaMenu.jpg",
                title: <span>Mega-Menu</span>,
            },
            {
                image: "/Strive/ContentDelivery.jpg",
                title: <span>Content Organization</span>,
            },
            {
                image: "/Strive/Modules.jpg",
                title: <span>Re-Usable Modules</span>,
            },
            {
                image: "/Strive/Backend.jpg",
                title: <span>Customized Editor</span>,
            },
        ],
        finalImage: "/Strive/LeadGeneration.jpg",
        finalText: "Lead Generation",
        codeLink: false,
        siteLink: "https://striveconsulting.com/",
        link: "/projects/strive",
    },
    triptiger: {
        title: "Trip Tiger",
        subtitle: "FlightAware API Integration",
        content:
            "Client wanted to discover and retrieve information about flights based on user-input. Built a custom React componenent that integrates MUI autocomplete on a very large data-set. The data is then passed to the FlightAware API, which presents the user with a list of flights, and fills out a form.",
        featuredImage: "/TripTiger/TT_Homepage.jpg",
        stepOne: "Website Development",
        steps: [
            {
                image: "/TripTiger/TT_Form.png",
                title: <span>Form with Autocomplete</span>,
            },

            {
                image: "/TripTiger/TT_FlightSelection.png",
                title: (
                    <span>
                        Flight Aware
                        <br />
                        API Integration
                    </span>
                ),
            },
            {
                image: "/TripTiger/TT_Completion.png",
                title: <span>Form Completion</span>,
            },
        ],
        finalImage: "/TripTiger/TT_Checkout.png",
        finalText: "Checkout",
        codeLink: false,
        siteLink: "https://triptigerhelp.com/",
        link: "/projects/triptiger",
    },
    heller: {
        title: "Heller",
        subtitle: "Website Development",
        content:
            "A sleek, modern website that a company can manage themselves. Delivered a fully custom WordPress theme for lead generation and web presence.",
        featuredImage: "/Heller/Heller_Homepage.jpg",
        stepOne: "Website Development",
        steps: [
            {
                image: "/Heller/Heller_Modules.jpg",
                title: <span>Re-Usable Modules</span>,
            },

            {
                image: "/Heller/Heller_Backend.jpg",
                title: <span>Custom Editor</span>,
            },
            {
                image: "/Heller/Heller_ContentMigration.jpg",
                title: <span>Content Migration</span>,
            },
        ],
        finalImage: "/Heller/Heller_Leads.jpg",
        finalText: "Lead Generation",
        codeLink: false,
        siteLink: "http://heller.mifw.co/",
        link: "/projects/heller",
    },

    spire: {
        title: "Spire",
        subtitle: "Website Development",
        content:
            "A sleek, modern website that a company can manage themselves. Delivered a fully custom WordPress theme for lead generation and web presence.",
        featuredImage: "/Spire/Homepage.jpg",
        stepOne: "Website Development",
        steps: [
            {
                image: "/Spire/MegaMenu.jpg",
                title: <span>Mega-Menu</span>,
            },
            {
                image: "/Spire/Content.jpg",
                title: <span>Content Organization</span>,
            },
            {
                image: "/Spire/Careers.jpg",
                title: <span>Career Center</span>,
            },
        ],
        finalImage: "/Spire/LeadGeneration.jpg",
        finalText: "Lead Generation",
        codeLink: false,
        siteLink: "https://www.spireconsultinggroup.com/",
        link: "/projects/spire",
    },

    vmg: {
        title: "Laravel Templating With Sage",
        content:
            "This example uses the Roots Sage starter theme, which lets you use Laravel blade templates with WordPress. Allows for MVC-based WordPress theme development",
        featuredImage: "/VMG/controllerimport.png",
        detailUrl:
            "https://drive.google.com/file/d/1AnXTzuvqb6jC3M3uh7kp8I2_aZfb59LH/view",
        stepOne: "Controller Import",
        steps: [
            {
                image: "/VMG/controllersource.png",
                title: <span>Controllers</span>,
                link: "https://drive.google.com/file/d/1CUbtxwfqy7jU_-piitlXLHPR5jQzdivm/view",
                external: true,
            },
            {
                image: "/VMG/LaravelBladesView.png",
                title: <span>Views - Accessing controller data</span>,
                link: "https://drive.google.com/file/d/1zkD2cSvqOK13eAwAN1JEQdnQcxgBKqA1/view",
                external: true,
            },
        ],
        finalImage: "/VMG/Homepage.jpg",
        finalText: "Full Website",
        codeLink: false,
        siteLink: "https://vmghealth.com/",
        link: "/projects/vmg",
    },
    portfolio: {
        title: "Personal Website",
        content:
            "This is my personal website, built with Next.JS, React, and UIKit. It's optimized for search engines, features subtle animations, and delivers fast performance",
        featuredImage: "/PortfolioSite/components.png",
        featuredImage2: "/PortfolioSite/livesite.png",
        featuredCompPosition: "50",
        featuredButtonText: "View Code",
        stepOne: "Reusable Components",
        featuredTags: [
            {
                name: "Code Sample",
            },
            {
                name: "React",
            },
            {
                name: "Components",
            },
        ],
        featuredExcerpt:
            "The site relies on several reusable components. This approach makes updating a breeze, keeps developers and designers aligned, and ensures a consistent experience.",
        detailUrl:
            "https://github.com/ZacharyRener/ZacharyRener.com/blob/main/pages/index.js",
        steps: [
            {
                image: "/PortfolioSite/navbar.png",
                image2: "/PortfolioSite/zr-nav.png",
                compPosition: "50",
                title: <span>Animations</span>,
                link: "https://github.com/ZacharyRener/ZacharyRener.com/blob/main/components/navbar.js",
                external: true,
                excerpt:
                    "UIKit's scrollspy enables uniform animations across the site. It fosters a shared understanding between designers and developers, while also giving a feeling of progression when scrolling through the page.",
                tags: [
                    {
                        name: "Code Sample",
                    },
                    {
                        name: "UI/UX Library",
                    },
                ],
                buttonText: "View Code",
            },
            {
                image: "/PortfolioSite/navbar.png",
                image2: "/PortfolioSite/zr-nav.png",
                compPosition: "50",
                title: <span>Server Side Rendering</span>,
                link: "https://github.com/ZacharyRener/ZacharyRener.com/blob/main/components/navbar.js",
                external: true,
                excerpt:
                    "Server-side rendering plays a key role in the site's SEO optimization, ensuring pages load in the blink of an eye. This means smooth, lag-free navigation throughout the website.",
                tags: [
                    {
                        name: "Code Sample",
                    },
                    {
                        name: "UI/UX Library",
                    },
                ],
                buttonText: "View Code",
            },
        ],
        finalImage: "/PortfolioSite/livesite.png",
        finalImage2: "/PortfolioSite/zr-nav.png",
        finalCompPosition: "66",
        finalText: "Final Product",
        finalExcerpt:
            "The components and animations come together to create an engaging user experience. The site is responsive, the components are reusable, and the user feels a sense of progression. Here, you can see everything come together.",
        codeLink: false,
        siteLink: "https://zacharyrener.com",
        finalTags: [
            {
                name: "Live Site",
            },
            {
                name: "Completed Project",
            },
        ],
        finalButtonText: "View Live Site",
        link: "/projects/portfolio",
    },
    domaintools: {
        title: "DomainTools",
        content:
            "DomainTools: a client of a mid-size, DC-based digital agency. Averaging 1M+ views per month, they needed a website that was performant, and that would enable marketers already familiar with WordPress to easily transition to the new website. Below is one of many commits I made to the codebase, this one specifically for a carousel Gutenberg block.",
        featuredImage: "/domaintools/domaintoolslive.png",
        featuredImage2: "/domaintools/DomainToolsCodeExample.png",
        featuredCompPosition: "33",
        featuredButtonText: "View Code",
        stepOne: "Gutenberg & ACF Blocks",
        featuredTags: [
            {
                name: "Code Sample",
            },
            {
                name: "Gutenberg",
            },
            {
                name: "WordPress",
            },
            {
                name: "ACF",
            },
        ],
        featuredExcerpt:
            "This example shows the process for developing a carousel Gutenberg block using an ACF hook.",
        detailUrl:
            "https://drive.google.com/file/d/1fP-o7QdgzzpQrQCDC2lsRPTGJgYsX615/view",
        steps: [],
        finalImage: "/domaintools/domaintoolslive.png",
        finalImage2: "/domaintools/DomainToolsCodeExample.png",
        finalCompPosition: "66",
        finalText: "Final Product",
        finalExcerpt:
            'This website was an "all hands on deck" project. I worked alongside 6 other developers, and took part in industry standard practices such as code reviews, continuous integration, and standup meetings.',
        codeLink: false,
        siteLink: "https://domaintools.com",
        finalTags: [
            {
                name: "Live Site",
            },
            {
                name: "Completed Project",
            },
        ],
        finalButtonText: "View Live Site",
        link: "/projects/domaintools",
    },
    nightdragon: {
        title: "NightDragon",
        content:
            "NightDragon: a client of a mid-size, DC-based digital agency. Below is one of many commits I made to the codebase, this one specifically for showcasing the relationship between a parent and child theme. The child theme calls a hook to add additional output to an existing parent theme module.",
        featuredImage: "/nightdragon/NightDragonCodeExample.png",
        featuredImage2: "/nightdragon/nightdragonwebsite.png",
        featuredCompPosition: "50",
        featuredButtonText: "View Code",
        stepOne: "Parent / Child Themes",
        featuredTags: [
            {
                name: "Code Sample",
            },
            {
                name: "WordPress",
            },
            {
                name: "Hooks",
            },
            {
                name: "Parent/Child Theme",
            },
        ],
        featuredExcerpt:
            "In the child theme, a hook is used to add additional output to an existing parent theme module. The style is registered per codebase standards, and the styling is done in a corresponding SCSS file.",
        detailUrl:
            "https://drive.google.com/file/d/1AUKokceDbfKVTabpG2ztJJ-XQHB_ApOY/view",
        steps: [],
        finalImage: "/nightdragon/nightdragonwebsite.png",
        finalImage2: "/nightdragon/NightDragonCodeExample.png",
        finalCompPosition: "100",
        finalText: "Final Product",
        finalExcerpt:
            "I worked alongside 2 other developers, and took part in industry standard practices such as code reviews, continuous integration, and standup meetings.",
        codeLink: false,
        siteLink: "https://nightdragon.com/",
        finalTags: [
            {
                name: "Live Site",
            },
            {
                name: "Completed Project",
            },
        ],
        finalButtonText: "View Live Site",
        link: "/projects/nightdragon",
    },
    madre: {
        title: "MADRE",
        content: `
			<p>
				A digital agency client needed a website for MADRE, a non-profit organization. It needed to be able to handle a large amount of content, and be able to be easily updated by non-technical staff. I was able to:
			</p>
			<ul>
				<li>take over the project from another developer</li>
				<li>build 90% of the frontend (including the entire homepage)</li>
				<li>complete a multi-round QA process</li>
				<li>complete a project send-off to the backend developer</li>
			</ul>
			<a class='button version-accent' href="https://www.madre.org/" target="_blank">View Live Site</a>
			`,
        sidebarContent: `
			<h3>Tech Stack</h3>
			<p><strong>Frontend: </strong>SCSS, Twig, UIKit</p>

			<h3>Accesibility</h3>
			<p>WCAG Level AA</p>
			<a class='button version-accent' href="https://www.madre.org/" target="_blank">View Live Site</a>
		`,
        featuredImage: "/madre/madre-livesite.png",
        featuredImage2: "/PortfolioSite/portfolio-cover.png",
        featuredCompPosition: "75",
        stepOne: "complex layering",
        featuredTags: [],

        steps: [
            {
                image: "/madre/madre-filtering.png",
                image2: "/PortfolioSite/portfolio-cover.png",
                compPosition: "75",
                title: <span>filterable content</span>,

                external: true,

                tags: [],
            },
            {
                image: "/madre/madre-content-library.png",
                image2: "/PortfolioSite/portfolio-cover.png",
                compPosition: "75",
                title: <span>multiple content libraries</span>,

                external: true,

                tags: [],
            },
        ],
        finalImage: "/madre/madre-wp-admin.png",
        finalImage2: "/PortfolioSite/portfolio-cover.png",
        finalCompPosition: "75",
        finalText: "wordpress backend",

        codeLink: false,
        siteLink: "https://madre.org",
        finalTags: [],
        finalButtonText: "View Live Site",
        link: "/projects/madre",
    },
    alignco: {
        title: "alignco",
        content: `
				<p>A digital agency client needed a website for a new client, alignco. I was able to:</p>
				<ul>
					<li>build the entire frontend</li>
					<li>build the entire backend</li>
					<li>build a custom load animation for the homepage</li>
					<li>complete a multi-round QA process</li>
				</ul>
				<a class='button version-accent' href="https://alignco.us/" target="_blank">View Live Site</a>
			`,
        sidebarContent: `
			<h3>Tech Stack</h3>
			<p><strong>Frontend: </strong>SCSS, Twig, UIKit</p>
			<p><strong>Backend: </strong>WordPress, ACF, ACF Flexible Content, Timber, Twig</p>
			<h3>Accesibility</h3>
			<p>WCAG Level AA</p>
			<a class='button version-accent' href="https://alignco.us/" target="_blank">View Live Site</a>
		`,
        featuredVideo: "/alignco/alignco.mp4",
        featuredImage: "/madre/madre-livesite.png",
        featuredImage2: "/PortfolioSite/portfolio-cover.png",
        featuredCompPosition: "75",

        stepOne: "page load animation",
        featuredTags: [],

        steps: [
            {
                video: "/alignco/aco-pt-2-c.mp4",
                image: "/madre/madre-map.png",
                image2: "/PortfolioSite/portfolio-cover.png",
                compPosition: "75",
                title: <span>scroll-based animations</span>,
                external: true,
                tags: [],
            },
        ],
        finalImage: "/alignco/wp-admin.png",
        finalImage2: "/PortfolioSite/portfolio-cover.png",
        finalCompPosition: "75",
        finalText: "wordpress backend",
        codeLink: false,
        siteLink: "https://alignco.us",
        finalTags: [
            {
                name: "ACF flexible content",
            },
        ],
        finalButtonText: "View Live Site",
        link: "/projects/madre",
    },
    abundantfutures: {
        title: "Abundant Futures Fund",
        content: `
			<p>A digital agency non-profit client needed a highly-animated website that quickly grabs attention. This project has a lot of moving, animated parts that are all tied to scroll position. I was able to:</p>
			<ul>
				<li>build the entire frontend</li>
				<li>build the entire backend</li>
				<li>build custom, scroll-based svg animations</li>
				<li>complete a multi-stage QA process</li>
			</ul>
			<a class='button version-accent' href="https://abundantfuturesfund.org/" target="_blank">View Live Site</a>
			`,
        sidebarContent: `
			<h3>Tech Stack</h3>
			<p><strong>Frontend: </strong>SCSS, GSAP, Twig, UIKit</p>
			<p><strong>Backend: </strong>WordPress, ACF, ACF Flexible Content, Timber, Twig</p>
			<h3>Accesibility</h3>
			<p>WCAG Level AA</p>
			<a class='button version-accent' href="https://abundantfuturesfund.org/" target="_blank">View Live Site</a>
		`,
        featuredVideo: "/abu/abu-take-2-trim.mp4",
        featuredImage: "/madre/madre-livesite.png",
        featuredImage2: "/PortfolioSite/portfolio-cover.png",
        featuredCompPosition: "75",

        stepOne: "scroll based experience",
        featuredTags: [],

        steps: [
            {
                video: "/abu/abu-take-3.mp4",
                image: "/madre/madre-map.png",
                image2: "/PortfolioSite/portfolio-cover.png",
                compPosition: "75",
                title: <span>custom designed animations</span>,
                external: true,
                tags: [],
            },
        ],
        finalImage: "/abu/abu-wp-admin.png",
        finalImage2: "/PortfolioSite/portfolio-cover.png",
        finalText: "wordpress backend",

        codeLink: false,
        siteLink: "https://abundantfuturesfund.org/",
        finalTags: [],
        finalButtonText: "View Live Site",
        link: "/projects/madre",
    },
    psaros: {
        title: "Georgetown University: Psaros",
        content: `
			<p>
				A digital agency client needed a website for Georgetown University's Psaros Center, and they needed it in a rush. <br>In <strong>four weeks</strong>, I was able to:
				<ul>
					<li>build the entire frontend</li>
					<li>build the entire backend</li>
					<li>complete a rigourous QA process</li>
					<li>achieve a 100% WCAG level AA accessibility rating in SiteImprove</li>
					<li>work directly with a screen reader user to ensure the site was fully accessible beyond automated ratings.</li>
				</ul>
				<a class='button version-accent' href="https://finpolicy.georgetown.edu/" target="_blank">View Live Site</a>
			</p>
			
			`,
        sidebarContent: `
			<h3>Tech Stack</h3>
			<p><strong>Frontend: </strong>Lit.JS & Shoelace Web Components, Vite, SCSS, Framer Motion, GSAP, Twig</p>
			<p><strong>Backend: </strong>WordPress, ACF, ACF Flexible Content, Timber, Twig</p>
			<h3>Scope</h3>
			<p>
				<strong>20 </strong>Unique components<br>
				<strong>1 </strong>Unique template<br>
				<strong>4 </strong>Customizable templates with different heroes<br>
				<strong>3 </strong>Filterable content libraries<br>
				Custom animations
			</p>
			<a class='button version-accent' href="https://finpolicy.georgetown.edu/" target="_blank">View Live Site</a>
		`,
        featuredVideo: "/psaros.mp4",
        featuredImage: "/madre/madre-livesite.png",
        featuredImage2: "/PortfolioSite/portfolio-cover.png",
        featuredCompPosition: "75",

        stepOne: "",
        featuredTags: [],

        steps: [
            {
                video: "/psaors-ada.mp4",
                image: "/madre/madre-map.png",
                image2: "/PortfolioSite/portfolio-cover.png",
                compPosition: "75",
                title: <span>scroll-based animations</span>,
                external: true,
                tags: [],
            },
            {
                video: "/psaros-news.mp4",
                image: "/madre/madre-map.png",
                image2: "/PortfolioSite/portfolio-cover.png",
                compPosition: "75",
                title: <span>scroll-based animations</span>,
                external: true,
                tags: [],
            },
        ],
        finalImage: "/psaros-admin.png",
        finalImage2: "/PortfolioSite/portfolio-cover.png",
        finalCompPosition: "75",
        finalText: "wordpress backend",
        codeLink: false,
        siteLink: "https://alignco.us",
        finalTags: [
            {
                name: "ACF flexible content",
            },
        ],
        finalButtonText: "View Live Site",
        link: "/projects/psaros",
    },
    humanityunited: {
        title: "Humanity United",
        content: `
			<p>
				A digital agency client needed a website for non-profit Humanity United. I was able to:
				<ul>
					<li>build the entire frontend</li>
					<li>complete a multi-process QA process</li>
					<li>complete a project hand-off to the backend developer</li>
				</ul>
				<a class='button version-accent' href="https://humanityunited.org/" target="_blank">View Live Site</a>
			</p>
			
			`,
        sidebarContent: `
			<h3>Tech Stack</h3>
			<p><strong>Frontend: </strong>SCSS, Twig, UIKit</p>
			<p><strong>Backend: </strong>WordPress, ACF, ACF Flexible Content, Timber, Twig</p>
			<h3>Accesibility</h3>
			<p>WCAG Level AA</p>
			<a class='button version-accent' href="https://humanityunited.org/" target="_blank">View Live Site</a>
		`,
        // featuredVideo: "/psaros.mp4",
        featuredImage: "/hum-1.png",
        featuredImage2: "/PortfolioSite/portfolio-cover.png",
        featuredCompPosition: "75",

        stepOne: "",
        featuredTags: [],

        steps: [
            {
                // video: "/psaors-ada.mp4",
                image: "/hum-2.png",
                image2: "/PortfolioSite/portfolio-cover.png",
                compPosition: "75",
                title: <span>scroll-based animations</span>,
                external: true,
                tags: [],
            },
        ],
        finalImage: "/hum-3.png",
        finalImage2: "/PortfolioSite/portfolio-cover.png",
        finalCompPosition: "75",
        finalText: "wordpress backend",
        codeLink: false,
        siteLink: "https://humanityunited.org/",
        finalTags: [
            {
                name: "ACF flexible content",
            },
        ],
        finalButtonText: "View Live Site",
        link: "/projects/humanityunited",
    },
    afcny: {
        title: "Advocates for Children of New York",
        content: `
			<p>
				A digital agency client needed a website for the non-profit Advocates for Children of New York. The site needed to be accessible, and needed to be able to handle a large amount of content. I was able to:
				<ul>
					<li>build the entire frontend</li>
					<li>complete a multi-round QA process</li>
					<li>complete a project hand-off to the backend developer</li>
				</ul>
				<a class='button version-accent' href="https://advocatesforchildren.org/" target="_blank">View Live Site</a>
			</p>
			
			`,
        sidebarContent: `
			<h3>Tech Stack</h3>
			<p><strong>Frontend: </strong>SCSS, Twig, UIKit</p>
			<p><strong>Backend: </strong>WordPress, ACF, ACF Flexible Content, Timber, Twig</p>
			<h3>Accesibility</h3>
			<p>WCAG Level AA</p>
			<a class='button version-accent' href="https://advocatesforchildren.org/" target="_blank">View Live Site</a>
		`,
        // featuredVideo: "/psaros.mp4",
        featuredImage: "/afc-1.png",
        featuredImage2: "/PortfolioSite/portfolio-cover.png",
        featuredCompPosition: "75",

        stepOne: "",
        featuredTags: [],

        steps: [
            {
                // video: "/psaors-ada.mp4",
                image: "/afc-2.png",
                image2: "/PortfolioSite/portfolio-cover.png",
                compPosition: "75",
                title: <span>scroll-based animations</span>,
                external: true,
                tags: [],
            },
            {
                // video: "/psaros-news.mp4",
                image: "/afc-3.png",
                image2: "/PortfolioSite/portfolio-cover.png",
                compPosition: "75",
                title: <span>scroll-based animations</span>,
                external: true,
                tags: [],
            },
        ],
        finalImage: "/afc-4.png",
        finalImage2: "/PortfolioSite/portfolio-cover.png",
        finalCompPosition: "75",
        finalText: "wordpress backend",
        codeLink: false,
        siteLink: "https://alignco.us",
        finalTags: [
            {
                name: "ACF flexible content",
            },
        ],
        finalButtonText: "View Live Site",
        link: "/projects/afcny",
    },
};

export default data;
