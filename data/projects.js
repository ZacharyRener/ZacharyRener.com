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
    title: "PHP/LARAVEL - MVC, CONTROLLERS, VIEWS",
    content:
      "This example uses the Roots Sage starter theme, which lets you use Laravel blade templates with WordPress. Allows for MVC-based WordPress theme development",
    featuredImage: "/VMG/controllerimport.png",
    detailUrl: "https://drive.google.com/file/d/1AnXTzuvqb6jC3M3uh7kp8I2_aZfb59LH/view",
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
    title: "REACT - NEXT.JS, USESTATE, USEEFFECT, COMPONENTS",
    content: "This is the website you're on right now! Built with Next.JS, and React.",
    featuredImage: "/PortfolioSite/navbar.png",
    stepOne: "Navbar Component - useState, useEffect",
    detailUrl: "https://github.com/ZacharyRener/ZacharyRener.com/blob/main/components/navbar.js",
    steps: [
        {
            image: "/PortfolioSite/components.png",
            title: <span>Using Components - Homepage</span>,
            link: "https://github.com/ZacharyRener/ZacharyRener.com/blob/main/pages/index.js",
            external: true,
        },
    ],
    finalImage: "/PortfolioSite/livesite.png",
    finalText: "Full Website",
    codeLink: false,
    siteLink: "https://zacharyrener.com",
    link: "/projects/portfolio",
  },
  domaintools: {
    title: "WORDPRESS - HOOKS, ACF, GUTENBERG, JS, SCSS",
    content:
    "Hooks, ACF, Gutenberg, JS, SCSS\
\
    This example shows the process for developing a carousel Gutenberg block using an ACF hook. It’s for domaintools.com - a website that averages ~1 million views per month\
\
    This is my initial commit from a codebase of 10 developers\
    ",
    featuredImage: "/domaintools/DomainToolsCodeExample.png",
    detailUrl: "https://drive.google.com/file/d/1fP-o7QdgzzpQrQCDC2lsRPTGJgYsX615/view",
    stepOne: "GitHub Commit",
    steps: [
      
    ],
    finalImage: "/domaintools/domaintoolslive.png",
    finalText: "Full Website",
    codeLink: false,
    siteLink: "https://domaintools.com/",
    link: "/projects/domaintools",
  },
  nightdragon: {
    title: "WORDPRESS - REGISTERING STYLE, PARENT / CHILD THEME, HOOKS",
    content:
      "Hooks, SCSS, Registering Style\
\
      This example shows the process for modifying an element from the parent theme. In the child theme, a hook is used to add additional output to an existing parent theme module. The style is registered per codebase standards, and the styling is done in a corresponding SCSS file. It’s for nightdragon.com\
\
      This is my initial commit from a code-base of 10 developers",
    featuredImage: "/nightdragon/NightDragonCodeExample.png",
    detailUrl: "https://drive.google.com/file/d/1AUKokceDbfKVTabpG2ztJJ-XQHB_ApOY/view",
    stepOne: "GitHub Commit",
    steps: [

    ],
    finalImage: "/nightdragon/nightdragonwebsite.png",
    finalText: "Full Website",
    codeLink: false,
    siteLink: "https://nightdragon.com/",
    link: "/projects/nightdragon",
  },
};

export default data;
