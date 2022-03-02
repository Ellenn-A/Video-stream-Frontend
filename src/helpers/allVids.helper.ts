import axios from "axios"
import { IVidInfo } from "../types/types";


export const getAllVideos = async () =>{
    const result = await axios.get<IVidInfo[]>('http://localhost:3001/all-vids')
    // console.log(result.data);
    return result.data;
}