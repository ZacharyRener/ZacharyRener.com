import React from "react";
import Project from "./project"; // Adjust the import path as necessary

const ProjectShowcase = ({ sidebarContent, steps }) => {
    return (
        <div className="projectShowcase">
            <div className="p-inner">
                <div
                    className="main-sidebar"
                    uk-scrollspy="cls:uk-animation-fade uk-animation-slide-bottom-small zr-animation;delay:50; repeat: false;"
                    dangerouslySetInnerHTML={{
                        __html: sidebarContent,
                    }}
                ></div>
                <div className="main-content">
                    <section className="projectsWrapper">
                        {steps.map((step, index) => {
                            return (
                                <Project
                                    key={index}
                                    orientation={
                                        index % 2 !== 0 ? "left" : "right"
                                    }
                                    color={index % 2 === 0 ? "red" : "red"}
                                    video={step.video}
                                    image={step.image}
                                    clickable={false}
                                />
                            );
                        })}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProjectShowcase;
