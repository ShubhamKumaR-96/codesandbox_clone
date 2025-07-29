import { useParams } from "react-router-dom";
import { useTreeStructureStore } from "../store/treeStructureStore";
import TreeStructure from "../components/orgamisms/TreeStructure/TreeStructure";
import EditorComponent from "../components/molecules/EditorComponent/EditorComponent";
import EditorButton from "../components/molecules/EditorButton.jsx/EditorButton";
import { useEffect } from "react";


const ProjectComponent = () => {
  const { projectId:projectIdFromURL } = useParams();

  const {projectId,setProjectId}=useTreeStructureStore()

  useEffect(()=>{
 setProjectId(projectIdFromURL)
  },[setProjectId,projectIdFromURL])

  return (
    <>
      ProjectId: {projectIdFromURL}
      
       {projectId && (
        <div style={{
          backgroundColor:"#333254",
          paddingRight:"10px",
          paddingTop:"0.3vh",
          minWidth:"250px",
          maxWidth:"25%",
          height:"99.7vh",
          overflow:"auto"
        }}>
          <TreeStructure />
          </div>
       )}
        <EditorComponent />

        <EditorButton isActive={false} />
        <EditorButton isActive={true} />
      
    </>
  );
};

export default ProjectComponent;