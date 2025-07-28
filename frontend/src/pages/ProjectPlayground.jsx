import { useParams } from "react-router-dom"

const ProjectPlayground = () => {
    const {projectId}=useParams()

  return (
    <div>
        Project Id : {projectId}
    </div>
  )
}

export default ProjectPlayground
