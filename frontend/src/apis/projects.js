import axiosInstance from "../config/axiosInstance"

export const createProjectApi=async()=>{
    try {
        const response=await axiosInstance.post('/api/v1/projects')
        console.log(response.data)
        return response.data
    } catch (error) {
        throw error
    }
}