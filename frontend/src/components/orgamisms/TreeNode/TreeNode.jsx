import { useState } from 'react'
import {IoIosArrowForward,IoIosArrowDown} from 'react-icons/io'
import { FileIcon } from '../../molecules/FileIcon/FileIcon'

export const Tree=({FileFolderData})=>{

    const [visible,setIsVisible]=useState({})

    const toggleVisiblity=(name)=>{
        setIsVisible({
            ...visible,
            [name]:!visible[name]
        })
    }

    return(
        (FileFolderData && <div style={{
            paddingLeft:"10px",
            color:"white"
        }}>
        { 
        FileFolderData.children ? 
       (<button onClick={()=>toggleVisiblity(FileFolderData.name)} style={{
        border:"none",
        cursor:"pointer",
        outline:"none",
        color:"white",
        background:"transparent",
        paddingTop:"12px",
        fontSize:"16px"
       }}>
                {visible[FileFolderData.name] ? <IoIosArrowDown/> :  <IoIosArrowForward />}
            {FileFolderData.name}
        </button>):(
             <div style={{display:"flex", alignItems:"center"}}> 
               <FileIcon extension="js" />
           <p style={{
            paddingTop:"10px",
            fontSize:"15px",
            cursor:"pointer",
            marginLeft:"5px",
           }}> {FileFolderData.name}
           
           </p>  </div>
        )}
        {visible[FileFolderData.name] && FileFolderData.children && (
            FileFolderData.children.map((child)=>(
                <Tree 
                FileFolderData={child}
                key={child.name} />
            ))
        )}
        </div>)
    )
}