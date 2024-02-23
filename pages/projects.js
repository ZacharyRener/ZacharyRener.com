import { useRouter } from "next/router";
import subpageStyles from "../styles/Subpage.module.css";
import singleProjectStyles from "../styles/SingleProject.module.css";
import { useEffect, useState } from "react";
import Head from "../components/header.js";
import HeaderImage from "../components/header-image.js";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import globals from "../styles/Global.module.css";
import FeaturedProject from "../components/featured-project";
import Project from "../components/project";
import Button from "../components/button";
import Link from "next/link";
import styles from "../styles/projects.module.css";
import data from "../data/projects";

export default function Projects() {
  const [projects, setProjects] = useState({});

  useEffect(() => {
    setProjects(data);
  });

  return (
    <div className={singleProjectStyles.singleProjectWrapper}>
      <Head />
      <Navbar />
      <HeaderImage title="Projects" />

      <section className={singleProjectStyles.projectsWrapper}>
        {Object.values(projects).map((project, index) => {
          return (
            <Project
              key={index}
              orientation={index % 2 == 0 ? "left" : "right"}
              color={index % 2 == 0 ? "red" : "gray"}
              title={project.title}
              number={`0${index + 1}.`}
			  video={project.featuredVideo}
              image={project.featuredImage}
              link={project.link}
            />
          );
        })}
      </section>

      <Footer />
    </div>
  );
}
