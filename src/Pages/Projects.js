import React from "react";
import { useState } from "react";
import { ProjectData, SideProjectData } from "./ProjectData";
import Footer from "../components/Footer";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projectsData] = useState(ProjectData.ProjectsData);
  const [sideprojectsData] = useState(SideProjectData.SideProjectsData);
  return (
    <>
      <div className="container col-xxl-9 px-lg-5 px-2 py-5 my-lg-2 mt-3 mb-5">
        <h1 className="fw-bold  my-3">Projects</h1>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          {projectsData.map((projects, index) => (
            <ProjectCard
              ProjectId={projects.id}
              ProjectTitle={projects.title}
              ProjectDescription={projects.desc}
              GithubURL={projects.github}
              PreviewURL={projects.view}
            ></ProjectCard>
          ))}
        </div>
      </div>
      <div className="container col-xxl-9 px-lg-5 px-2 py-5 my-lg-2 mt-3 mb-5">
        <h1 className="fw-bold  my-3">Side Projects</h1>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          {sideprojectsData.map((projects, index) => (
            <ProjectCard
              ProjectId={projects.id}
              ProjectTitle={projects.title}
              ProjectDescription={projects.desc}
              GithubURL={projects.github}
              PreviewURL={projects.view}
              Tags={projects.tag}
            ></ProjectCard>
          ))}
        </div>
      </div>
      <Footer
        title="I occasionally take on freelance opportunities."
        desc="I also worked with several organizations ranging from campus clubs to startups."
      />
    </>
  );
}
