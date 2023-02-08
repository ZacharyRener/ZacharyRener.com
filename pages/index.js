import styles from "../styles/Home.module.css";
import Head from "../components/header.js";
import Mainstage from "../components/mainstage";
import Navbar from "../components/navbar";
import FeaturedProject from "../components/featured-project";
import Project from "../components/project";
import Footer from "../components/footer";
import globals from "../styles/Global.module.css";

export default function Home() {
  return (
    <div className={ styles.container + " " + globals.noOverflow }>
      <Head />
      <Navbar />
      <Mainstage />
      <FeaturedProject
        title={ <span>React - Next.js, useState, useEffect, components</span>
        }
        image="/PortfolioSite/portfolio-cover.png"
        link="/projects/portfolio"
      />
      <Project
        orientation="right"
        color="red"
        title={ <span>PHP/Laravel - MVC, Controllers, Views</span> }
        number="02."
        image="/VMG/vmg-cover.png"
        link="/projects/vmg"
      />
      <Project
        orientation="left"
        color="red"
        title={ <span>WordPress - Hooks, ACF, Gutenberg, JS, SCSS</span> }
        number="03."
        image="/domaintools/domain_tools_cover.png"
        link="/projects/domaintools"
      />
      <Project
        orientation="right"
        color="red"
        title={ <span>WordPress - Registering Style, Parent / Child Theme, Hooks</span> }
        number="04."
        image="/nightdragon/nightdragon_cover.png"
        link="/projects/nightdragon"
      />
      <Footer />
    </div>
  );
}