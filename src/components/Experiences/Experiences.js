import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

import * as logos from "./experienceLogos";

import "./experiences.css";

function Experiences() {

  const experiences = [
    {
      "title": "Intern",
      "organization": "GVL Electro Controls Pvt Ltd",
      "organizationLogo": logos.celebel,
      "duration": "1 June 2022 - 1 July 2022",
      "description": [],
      "skills": "Circuit Design,AutoCAD,Design, Control System, Process Automation,Machine Automation",
      "experienceType": "Internship",
    },
  ]

  return (
    <Container className="py-5 mt-5">
      <Particle />
      <div className="main-timeline">
        {
          experiences.map((experience, index) => {
            return (
              <div className={`timeline ${index % 2 === 0 ? "left" : "right"}`}>
                <ExperienceCard title={experience.title} duration={experience.duration} organization={experience.organization} description={experience.description} experienceType={experience.experienceType} skills={experience.skills} organizationLogo={experience.organizationLogo} disabledProps={["description"]} />
              </div>
            )
          })
        }
      </div>
    </Container>
  );
}

export default Experiences;