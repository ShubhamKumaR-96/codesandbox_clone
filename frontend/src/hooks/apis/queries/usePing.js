import { useQuery } from "@tanstack/react-query";
import { pingChcek } from "../../../apis/Ping";

export default function usePing(){
    const{isError,isLoading,data,error} =useQuery({
        queryFn:pingChcek,
        queryKey:['ping'],
        staleTime:10000
    })
    return {
        isError,isLoading,error,data
    }
    
}