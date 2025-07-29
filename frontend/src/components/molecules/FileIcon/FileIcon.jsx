import { FaJs } from "react-icons/fa6";
export const FileIcon=({extension})=>{
    return(
       <>
        {extension == "js" && <FaJs color="yellow" style={
            {
                height:"20px",
                width:"20px"
            }
        } />}
       </>
    )
}