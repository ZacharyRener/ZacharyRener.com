import styles from "../styles/Home.module.css";
import Head from "../components/header.js";
import Mainstage from "../components/mainstage";
import Navbar from "../components/navbar";
import FeaturedProject from "../components/featured-project";
import Project from "../components/project";
import Footer from "../components/footer";
import globals from "../styles/Global.module.css";
import ParallaxContent from "../components/parallax-content.js";

export default function Home() {
    return (
        <div className={styles.container + " " + globals.noOverflow}>
            <Head />
            <Navbar />
            <Mainstage />

			
				<FeaturedProject
					title={<span>alignco</span>}
					
					video="/alignco/alignco-trim-1.mp4"
					image="/alignco/alignco-2.gif"
					// image2="/PortfolioSite/portfolio-cover.png"
					compPosition="75"
					link="/projects/alignco"
					tags={[
						{ name: "animated" },
						{ name: "fullstack" },
						{ name: "isolated frontend" },
						{ name: "wordpress backend" },
						{ name: "acf flexible content" },
					]}
				/>
			
			<Project
				orientation="left"
				color="red"
                title={<span>abundant futures fund</span>}
				video="/abu/abu-take-2-trim.mp4"
                image="/madre/madre-livesite.png"
                // image2="/PortfolioSite/portfolio-cover.png"
                compPosition="75"
				number="02."
                link="/projects/abundantfutures"
                tags={[
						{ name: "scroll-based animations" },
						{ name: "fullstack" },
						{ name: "isolated frontend" },
						{ name: "wordpress backend" },
						{ name: "acf flexible content" },
					]}
            />


            <Project
				orientation="right"
				color="red"
                title={<span>madre</span>}
                image="/madre/madre-livesite.png"
                // image2="/PortfolioSite/portfolio-cover.png"
                compPosition="75"
				number="02."
                link="/projects/madre"
                tags={[
                    { name: "isolated frontend" },
                    { name: "integrated by backend team" },
                ]}
            />

            {/* <Project
                orientation="left"
                color="red"
                title={<span>domaintools</span>}
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
                title={<span>nightdragon</span>}
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
                // image="/nightdragon/nightdragon_cover.png"
                image="/nightdragon/nightdragonwebsite.png"
                compPosition="33"
                link="/projects/nightdragon"
            />

            <Project
                orientation="left"
                color="gray"
                number="04."
                title={<span>personal website</span>}
                excerpt={
                    <span>
                        This is my personal website, built with Next.JS, React,
                        and UIKit. It's optimized for search engines, features
                        subtle animations, and delivers fast performance
                    </span>
                }
                // image="/PortfolioSite/portfolio-cover.png"
                image="/PortfolioSite/livesite.png"
                compPosition="33"
                link="/projects/portfolio"
                tags={[
                    { name: "Fullstack" },
                    { name: "React" },
                    { name: "Next.JS SSR" },
                    { name: "UI/UX Library" },
                ]}
            /> */}

            <Footer />
        </div>
    );
}
