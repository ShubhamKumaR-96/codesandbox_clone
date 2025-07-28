import util from "util";
import child_process from "child_process";
import { v4 as uuidv4 } from 'uuid'
import fs from "fs/promises";
import { REACT_PROJECT_CMD } from "../config/serverConfig.js";

const execPromisified=util.promisify(child_process.exec)

export const createProjectController = async (req, res) => {

    const projectId = uuidv4();
    console.log("Project Id created:",projectId)

    await fs.mkdir(`./projects/${projectId}`)

    const response=await execPromisified(REACT_PROJECT_CMD,{
        cwd:`./projects/${projectId}`
    })

    return res.json({
        msg:"Project created",
        data:projectId
    })
};
