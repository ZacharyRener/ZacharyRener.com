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
            Strive
            <br />
            Consulting
          </span>
        }
        image="/Strive/Homepage.jpg"
        link="/projects/strive"
      />
      <Project
        orientation="left"
        color="gray"
        title={<span>Trip Tiger</span>}
        number="02."
        image="/TripTiger/TT_Homepage.jpg"
        link="/projects/triptiger"
      />
      <Project
        orientation="right"
        color="red"
        title={<span>Heller</span>}
        number="03."
        image="/Heller/Heller_Homepage.jpg"
        link="/projects/heller"
      />
      <Project
        orientation="left"
        color="gray"
        title={<span>Spire</span>}
        number="04."
        image="/Spire/Homepage.jpg"
        link="/projects/gcf"
      />
      <Project
        orientation="right"
        color="red"
        title={<span>VMG Health</span>}
        number="05."
        image="/VMG/Homepage.jpg"
        link="/projects/vmg"
      />

      <Footer />
    </div>
  );
}
