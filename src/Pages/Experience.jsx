import { useState } from "react";
import {
  ProfessionalExperienceData,
  VolunteerExperienceData,
} from "./Projects/ProjectData";
import ProjectCard from "./Projects/ProjectCard";
import Footer from "../components/Footer/Footer";

export default function Experience() {
  const [professionalExperienceData] = useState(
    ProfessionalExperienceData.ProfessionalExperienceData
  );
  const [volunteerExperienceData] = useState(
    VolunteerExperienceData.VolunteerExperienceData
  );
  return (
    <>
      {/* div */}
      <div className="container col-xxl-9 px-lg-5 px-2 py-5 my-lg-2 mt-3 mb-5">
        <div className="my-3">
          <h1 className="fw-bold  my-3">Professional Experience</h1>
          <p className="text-dim">
            I've done a lot of work in the past, and I'm proud of it. some of
            the internships and jobs I've had the pleasure of working on are
            listed below.
          </p>
        </div>
        <div class="row row-cols-1 row-cols-md-2 g-2">
          {professionalExperienceData.map((projects, index) => (
            <ProjectCard
              ProjectId={projects.id}
              ProjectTitle={projects.title}
              ProjectSubTitle={projects.subtitle}
              ProjectDescription={projects.desc}
              ProjectTech={projects.techStack.map((tech) => tech)}
            ></ProjectCard>
          ))}
        </div>
      </div>
      <div className="container col-xxl-9 px-lg-5 px-2 py-5 my-lg-2 mt-3 mb-5">
        <div className="my-3">
          <h1 className="fw-bold  my-3">Volunteer Experience</h1>
          <p className="text-dim">
            I'm an active member of many organizations, and I've had the
            pleasure of volunteering in many different ways.
          </p>
        </div>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          {volunteerExperienceData.map((projects, index) => (
            <ProjectCard
              ProjectId={index}
              ProjectTitle={projects.title}
              ProjectSubTitle={projects.subtitle}
              ProjectDescription={projects.desc}
              GithubURL={projects.github}
              PreviewURL={projects.view}
            ></ProjectCard>
          ))}
        </div>
      </div>
      <Footer
        title="I occasionally take on freelance opportunities."
        desc="  Have an exciting project where you need some help? Send me over a
      message, and let's chat!"
        btnTitle="Drop a message"
        file="/Contact"
      />
    </>
  );
}
