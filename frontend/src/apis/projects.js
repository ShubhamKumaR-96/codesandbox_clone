import axiosInstance from "../config/axiosInstance"

export const createProjectApi=async()=>{
    try {
        const response=await axiosInstance.post('/api/v1/projects')
        console.log("Create api project response" , response.data)

        return response.data
    } catch (error) {
        throw error
    }
}

export const getProjectTree=async({projectId})=>{
    try {
        const response=await axiosInstance.get(`/api/v1/projects/${projectId}/tree`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log("Error while getting tree structure",error)
        throw error
    }
}