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
        title: "Madre",
        content:
            "Nonprofit client of a mid-size, west-coast based digital agency. I handled front-end development from the ground-up which would later be integrated into a custom WordPress theme by the backend team.",
        featuredImage: "/madre/madre-livesite.png",
        featuredImage2: "/PortfolioSite/portfolio-cover.png",
        featuredCompPosition: "75",
        featuredButtonText: "View Code",
        stepOne: "Design System",
        featuredTags: [
            {
                name: "Code Sample",
            },
            {
                name: "Frontend",
            },
        ],
        featuredExcerpt:
            "The frontend of this website was built using a design system tool that allows for rapid prototyping and component-based development. This approach fosters a shared understanding between designers and developers, and eases the handoff between front and backend.",
        detailUrl:
            "https://drive.google.com/file/d/1fiAD6mPw3dvzA0FSoeVtAATidMnXAAyI/view?usp=sharing",
        steps: [
            {
                image: "/madre/madre-map.png",
                image2: "/PortfolioSite/portfolio-cover.png",
                compPosition: "75",
                title: <span>Front-End from the Ground-up</span>,
                link: "https://drive.google.com/file/d/1iRyvvWeNO41YJ9qFTYdPmcDeu-HXv34c/view",
                external: true,
                excerpt:
                    "Front-end development was component-based. I helped relieve the frontend team of some of their workload, and was able to deliver a high-quality product on time.",
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
                image: "/madre/madre-form.png",
                image2: "/PortfolioSite/portfolio-cover.png",
                compPosition: "75",
                title: <span>Animations</span>,
                link: "https://github.com/ZacharyRener/ZacharyRener.com/blob/main/components/navbar.js",
                external: true,
                excerpt:
                    "The team's UI library enables uniform animations across the site. It fosters a shared understanding between designers and developers, while also giving a feeling of progression when scrolling through the page.",
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
                image: "/madre/madre-quote.png",
                image2: "/PortfolioSite/portfolio-cover.png",
                compPosition: "80",
                title: <span>Extensive QA Testing</span>,
                link: "https://drive.google.com/file/d/1lEefe2ms-suokmbp0Fm6G68xdWAx6GZ-/view?usp=sharing",
                external: true,
                excerpt:
                    "After finishing initial development, the site enters a rigorous QA testing phase. This ensures the site is responsive, accessible, and performs well across all devices and browsers.",
                tags: [
                    {
                        name: "Code Sample",
                    },
                    {
                        name: "QA Testing",
                    },
                ],
                buttonText: "View Code",
            },
        ],
        finalImage: "/madre/madre-filterable.png",
        finalImage2: "/PortfolioSite/portfolio-cover.png",
        finalCompPosition: "75",
        finalText: "Final Product",
        finalExcerpt:
            "My front-end code was integrated into a custom WordPress theme by the backend team. The design system tool helped alleviate friction during the handoff. The site is responsive, the components are reusable, and the user feels a sense of progression.",
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
        link: "/projects/madre",
    },
};

export default data;
