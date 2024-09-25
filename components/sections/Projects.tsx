import { projects } from "@/constants"
import {Heading, ProjectCard} from "../common"

const Projects = () => {
  return (
    <div className="w-full" id="projects">
      <Heading title="Projects"/>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {projects.map((project, index) =>(
          <ProjectCard key={index} project={project}/>
        ))}
      </div>
      
    </div>
  )
}

export default Projects