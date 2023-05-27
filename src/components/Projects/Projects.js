import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import traffic from "../../Assets/Projects/download.png";
import food from "../../Assets/Projects/Food.jpg";
import bitsOfCode from "../../Assets/Projects/blog.png";
import hydro from "../../Assets/Projects/hydro.jpg";
import knee from "../../Assets/Projects/knee.jpg";
import ansys from "../../Assets/Projects/ansys.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hydro}
              isBlog={false}
              title="IoT based Indoor Hydroponic Farming"
              description=" Hydroponic gardening is method of growing plants without soil. It's a way to nurture a huge variety of edible plants (think herbs, veggies, even some fruits) indoors all year round, regardless of what Mother Nature is doing outside your door."
              ghLink="https://github.com/sankalpghodke1/Traffic_Management_Syatem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={knee}
              isBlog={false}
              title="DESIGN OF KNEE SCOOTER"
              description="To develop a seated knee
              scooter for specialized use by elderly individuals
              who are suffering from knee injury/weakness.
              Application: This bike is made for the use of
              people with knee issues. The bike protects the
              knee from retracting and bending. The bike is
              hence useful to users who are suffering from a
              knee injury or facing a knee joint weakness "
              ghLink="https://github.com/sankalpghodke1/Food-Delivery-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ansys}
              isBlog={false}
              title="Analysis of Spitting Phenomenon in context of Covid-1"
              description="To study the Impact of Sneezed and Coughed Droplets Produced from a Moving
              Passenger on Other Passengers inside Aircraft Cabins"
              ghLink="https://github.com/sankalpghodke1/Blog-Template"            
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
