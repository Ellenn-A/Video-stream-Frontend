import { useState } from "react";
import { useQuery } from "react-query";
import { getAllVideos } from "../../helpers/allVids.helper";
import { IVidInfo } from "../../types/types";
import { DifferentVideosButtons } from "../differentVids";
import { Footer } from "../footer";
import { VideoBox } from "../videoBox";
// put all the componentss here - so they can share results from uSeQuery etc states and setStates too

export const VideoPlayer = () => {
  const [currentVid, setCurrentVid] = useState<string>("bunny");
  const [allVids, setAllVids] = useState<IVidInfo[]>([]);

  //get info from the backend
  const getAllVids = useQuery("all-vids-query", getAllVideos);

  return (
    <div className="video-player-area">
      <div className="buttons-area">
        <DifferentVideosButtons
          currentVid={currentVid}
          setCurrentVid={setCurrentVid}
          allVids={allVids}
          setAllVids={setAllVids}
          getAllVids={getAllVids}
        />
      </div>
      <div className="video-area">
        <VideoBox vidName={currentVid} />
      </div>
      <div className="footer-area">
        <Footer currentVid={currentVid} getAllVids={getAllVids} />
      </div>
    </div>
  );
};
