import { v4 as uuidv4 } from "uuid";
import fs from "fs/promises";
import { execPromisified } from "../utils/execUtility.js";
import { REACT_PROJECT_CMD } from "../config/serverConfig.js";
import path from "path";
import directoryTree from "directory-tree";

export const createProjectService = async () => {
  try {
    const projectId = uuidv4();
    console.log("New project id:", projectId);

    

    // Create the project directory (make sure ./projects exists)
     await fs.mkdir(`./projects/${projectId}`);

     const response = await execPromisified(REACT_PROJECT_CMD, {
        cwd: `./projects/${projectId}`
    });

    return projectId;
    console.log(projectId)
  } catch (error) {
    console.error("Error creating project:", error);
    throw new Error("Project creation failed");
  }
};

export const getProjectTreeService = async (projectId) => {
  try {
    const projectPath = path.resolve(`./projects/${projectId}`);
    const tree = directoryTree(projectPath);
    return tree;
  } catch (error) {
    console.error("Error reading project tree:", error);
    throw new Error("Failed to read project directory");
  }
};
