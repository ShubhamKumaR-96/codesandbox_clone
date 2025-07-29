import { useQuery } from "@tanstack/react-query";
import { getProjectTree } from "../../../apis/projects";

export const useProjectTreeStructure=async()=>{
    const {isLoading,isError,data}=useQuery({
        queryFn:()=>getProjectTree({projectId})

    })

    return {
        is
    }
}