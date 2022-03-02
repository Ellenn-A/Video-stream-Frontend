import { useQuery } from "react-query";

interface IProp{
    projectName:string
}

export const Footer:React.FC<IProp> = ({projectName})=>{

    return (
        <div>
            <h2>
               {projectName}
            </h2>
        </div>
    )
}