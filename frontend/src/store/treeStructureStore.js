import { QueryClient } from "@tanstack/react-query";
import { create } from "zustand";
import { getProjectTree } from "../apis/projects";

export const useTreeStructureStore = create((set,get) => {
  const queryClient = new QueryClient();

  return {
    projectId:null,
    treeStructure: null,
    setTreeStructure: async (projectId) => {

      const id=get().projectId

      if(!id) return

      const data = await queryClient.fetchQuery({
        queryKey: [`projecttree-${id}`],
        queryFn: () => getProjectTree({ projectId : id}),
      });
      console.log(data);

      set({
        treeStructure: data,
      });
    },
    setProjectId:(projectId)=>{
      set({
        projectId:projectId
      })
    }
  };
});