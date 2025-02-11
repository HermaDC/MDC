import React from "react";
import {Header, Footer} from "../common/headerFooter";
import { ProjectsWrapper, ProjectsCard } from "./projects";


export function Home() {
  return (
    <div>
      <Header />
      <About id="about"/>
      <ProjectsWrapper id="projects">
        <ProjectsCard projectname="Asistente Virtual" description="Pequeño asistente virtual hecho con python que entiende ordenes breves" />
        <ProjectsCard projectname="Portfolio" description="Pequeño asistente virtual hecho con python que entiende ordenes breves" />
        <ProjectsCard projectname="Proyectos python" repoUrl="HermaDC/Mae" description="Pequeño asistente virtual hecho con python que entiende ordenes breves" />
      </ProjectsWrapper>
      <Footer/>
    </div>
  );
}




function About(){
  return(
    <div className="about">
      <h2>About</h2>
      <p>Este es un pequeño portafolio hecho con React.</p>
    </div>
  );
}


export default Home;