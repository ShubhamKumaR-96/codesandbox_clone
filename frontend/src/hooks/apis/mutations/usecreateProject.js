import { useMutation } from "@tanstack/react-query";
import { createProjectApi } from "../../../apis/projects";

export default function usecreateProject() {
  const { mutateAsync, isPending, isSuccess, error } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: (data) => {
      console.log("Project creation successfully", data);
    },
    onError: () => {
      console.log("Error while creating project",error);
    },
  });

  return {
    createProjectMutation: mutateAsync,
    isPending,
    isSuccess,
    error,
  };
}
