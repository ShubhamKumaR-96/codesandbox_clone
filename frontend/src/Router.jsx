import { Route, Routes } from "react-router-dom"
import CreateProject from "./pages/CreateProject"
import ProjectComponent from "./pages/ProjectComponent"

export const Router =()=>{
   return (
    <Routes>
       <Route path="/" element={<CreateProject />} />
       <Route path="/project/:projectId" element={<ProjectComponent />} />
    </Routes>
   )
}