import { useEffect, useState } from "react";
import { useQuery, UseQueryResult } from "react-query";
import { getAllVideos } from "../helpers/allVids.helper";
import { IVidInfo } from "../types/types";

interface IProp {
  currentVid: string;
  getAllVids: UseQueryResult<IVidInfo[], unknown>;
}

export const Footer: React.FC<IProp> = ({ currentVid, getAllVids }) => {
  const [allVids, setAllVids] = useState<IVidInfo[]>([]);

  useEffect(() => {
    if (getAllVids.data) {
      setAllVids(getAllVids.data);
    }
  }, [getAllVids.isSuccess]);
  const findObjectInArray = (videoName: string) => {
    return (
      allVids?.filter((item) => {
        return item.savedAs === videoName;
      }) as any[] as IVidInfo[]
    )[0];
  };
  const currentVideo = findObjectInArray(currentVid);
//   console.log(currentVideo);

  const renderInfo = (currentVideo: IVidInfo): JSX.Element => {
    if (currentVideo) {
      return (
        <div>
          <div className="info-header">
            <h2>{currentVideo.name}</h2>
          </div>
          <div className="info-text">
            <p>{currentVideo.description}</p>
          </div>
        </div>
      );
    } else {
      return <h2>Sth went wrong!</h2>;
    }
  };
  return <div>{renderInfo(currentVideo)}</div>;
};
