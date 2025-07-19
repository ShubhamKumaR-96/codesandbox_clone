import axiosInstance from "../config/axiosInstance"

export const pingChcek=async()=>{
    try {
        const res=await axiosInstance.get('/api/v1/ping')
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log("Error while fetching data from backend")
        
    }
}