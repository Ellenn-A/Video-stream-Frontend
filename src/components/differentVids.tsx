
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { getAllVideos } from "../helpers/allVids.helper";
import { IVidInfo } from "../types/types";
import { VideoBox } from "./videoBox";

interface IProp {
    currentVid:string,
    setCurrentVid:React.Dispatch<React.SetStateAction<string>>
}
export const DifferentVideosButtons:React.FC<IProp> = ({currentVid,setCurrentVid})=>{
    const [allVids, setAllVids] = useState<IVidInfo[]>([]);

    //get info from the backend 
    const getAllVids = useQuery('all-vids-query',getAllVideos);

    const handleClick =(objectName:string) =>{
        console.log(`set current video ${objectName}`)
        setCurrentVid(objectName);

    }
    useEffect(() =>{
        if(getAllVids.data){
            setAllVids(getAllVids.data);
            console.log(getAllVids.data)
        }
    }, [getAllVids.isSuccess])
    const renderButtons = ():JSX.Element[] =>{
        return allVids.map(vid=>{
            return(
                <div>
                    <button className="video-button"onClick={() =>handleClick(vid.savedAs)}>{vid.name}</button>
                </div>
            )
        })
    }
    
    return (
        <div className="button-container">
            {renderButtons()}
        </div>
  
    )
}