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
        <div className={styles.container + " " + globals.noOverflow}>
            <Head />
            <Navbar />
            <Mainstage />

            <FeaturedProject
                title={<span>Personal Website</span>}
                excerpt={
                    <span>
                        This is the website you're on right now. Built with
                        Next.JS, React, and UIKit, this site is SEO friendly,
                        animated, and blazing fast.
                    </span>
                }
                image="/PortfolioSite/portfolio-cover.png"
                image2="/PortfolioSite/livesitenew.png"
                compPosition="33"
                link="/projects/portfolio"
                tags={[
                    { name: "Fullstack" },
                    { name: "React" },
                    { name: "Next.JS SSR" },
                    { name: "UI/UX Library" },
                ]}
            />

            <Project
                orientation="left"
                color="red"
                title={<span>DomainTools</span>}
                excerpt={
                    <span>
                        Averaging 1M+ views per month, DomainTools needed a
                        website that was performant, and that would enable
                        marketers already familiar with WordPress to easily
                        transition to the new website.
                    </span>
                }
                tags={[
                    { name: "Fullstack" },
                    { name: "WordPress" },
                    { name: "Gutenberg" },
                    { name: "ACF Blocks" },
                ]}
                number="02."
                image="/domaintools/domaintoolslive.png"
                image2="/domaintools/domain_tools_cover.png"
                compPosition="66"
                link="/projects/domaintools"
            />
            <Project
                orientation="right"
                color="red"
                title={<span>NightDragon</span>}
                tags={[
                    { name: "Fullstack" },
                    { name: "WordPress" },
                    { name: "Animations" },
                ]}
                excerpt={
                    <span>
                        {" "}
                        WordPress - Registering Style, Parent / Child Theme,
                        Hooks
                    </span>
                }
                number="03."
                image="/nightdragon/nightdragon_cover.png"
                image2="/nightdragon/nightdragonwebsite.png"
                compPosition="33"
                link="/projects/nightdragon"
            />
            <Footer />
        </div>
    );
}
