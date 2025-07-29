import { createProjectService, getProjectTreeService } from "../services/ProjectService.js";

export const createProjectController = async (req, res) => {
  try {
    const projectId = await createProjectService();

    return res.status(201).json({
      message: "Project created successfully",
      projectId,
      success: true
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create project",
      error: error.message,
      success: false
    });
  }
};

export const getProjectTree = async (req, res) => {
  try {
    const tree = await getProjectTreeService(req.params.projectId);

    return res.status(200).json({
      projectTree: tree,
      success: true,
      message: "Successfully fetched the tree"
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch project tree",
      error: error.message,
      success: false
    });
  }
};
