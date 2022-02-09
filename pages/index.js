import styles from "../styles/Home.module.css";
import Head from "../components/header.js";
import Mainstage from "../components/mainstage";
import Navbar from "../components/navbar";
import FeaturedProject from "../components/featured-project";
import Project from "../components/project";
import SEOCopy from "../components/seo-copy";
import Footer from "../components/footer";
import globals from "../styles/Global.module.css";

export default function Home() {
    return (
        <div className={styles.container + " " + globals.noOverflow}>
            <Head />
            <Navbar />
            <Mainstage />
            <FeaturedProject
                title={
                    <span>
                        SHR
                        <br />
                        Consulting
                    </span>
                }
                image="/shr.jpg"
                link="/projects/shr"
            />
            <Project
                orientation="left"
                color="gray"
                title={
                    <span>
                        Spire
                        <br />
                        Consulting
                        <br />
                        Group
                    </span>
                }
                number="02."
                image="/strive.jpg"
                link="/projects/spire"
            />
            <Project
                orientation="right"
                color="red"
                title={
                    <span>
                        Sunflower
                        <br />
                        Shoppe
                    </span>
                }
                number="03."
                image="/sunflower.jpg"
                link="/projects/sunflower"
            />
            <Project
                orientation="left"
                color="gray"
                title={
                    <span>
                        GCF
                        <br />
                        Business
                        <br />
                        Valuation
                    </span>
                }
                number="04."
                image="/gcf.jpg"
                link="/projects/gcf"
            />
            <SEOCopy />
            <Footer />
        </div>
    );
}
