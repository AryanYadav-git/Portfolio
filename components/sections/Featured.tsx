import { features } from '@/constants'
import { Heading, ProjectCard } from '../common'
const Featured = () => {
  return (
    <div className="w-full" id="projects">
    <Heading title="Featured"/>
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
      {features.map(project =>(
        <ProjectCard project={project}/>
      ))}
    </div>
    
  </div>
  )
}

export default Featured