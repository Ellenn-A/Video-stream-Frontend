import React, { useEffect, useRef } from "react"
import { Footer } from "./footer";

interface IProps {
  vidName:string
}


export const VideoBox:React.FC<IProps> = ({vidName}):JSX.Element =>{

  const videoRef = useRef<HTMLVideoElement>(null); // idk really what this does

  useEffect(() => {
    videoRef.current?.load(); // manually reload the video
}, [ vidName ]);

  const address = `http://localhost:3001/video/`+vidName+`.mp4`;
  console.log(address)

    return(
        <div >
            <video id="videoPlayer" ref={videoRef} className="video-container"controls>
              <source src={address} type="video/mp4"/>
            </video>
      </div>
    )
}