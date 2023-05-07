import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import traffic from "../../Assets/Projects/download.png";
import food from "../../Assets/Projects/Food.jpg";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={traffic}
              isBlog={false}
              title="Traffic Management System"
              description="An Intelligent Traffic Management System (ITMS) using computer vision is a revolutionary technology that can significantly improve the way we manage and regulate traffic on our roads. This system relies on advanced computer vision algorithms and techniques to analyze real-time video data from cameras placed on the road network."
              ghLink="https://github.com/sankalpghodke1/Traffic_Management_Syatem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Delivery App"
              description="A food delivery app is a revolutionary technology that has transformed the way people order and receive food. These apps are designed to make the process of ordering food fast, easy, and convenient, and they have become increasingly popular in recent years.

              With a food delivery app, users can browse menus from a variety of local restaurants, place their orders, and track their delivery in real-time. "
              ghLink="https://github.com/sankalpghodke1/Food-Delivery-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blog Template"
              description="A blog template is a pre-designed format that can be used to create a professional-looking blog. These templates come with a range of features, including layouts, fonts, colors, and graphics, and can be customized to suit a blogger's specific needs and preferences.

              Using a blog template can save time and effort, as bloggers do not need to create a blog from scratch. They can simply select a template that suits their needs and customize it to reflect their own brand and personality. "
              ghLink="https://github.com/sankalpghodke1/Blog-Template"            
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
