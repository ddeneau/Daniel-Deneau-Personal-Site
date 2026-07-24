import InformationTitle from "../InformationTitle"
import ImagelessInformationBlock from "./ImagelessInformationBlock"
import space_photo from "../../Components/Images/offworld_2.png"
import job_photo from "../../Components/Images/job_board.png"
import movie_photo from "../../Components/Images/poster2.png"

const Current = () => {
    return(
        <div className="flex rounded-2xl bg-white justify-items-center">
            <div className="flex flex-col">
                <div className='text-2xl text-center justify-items-center my-2 mx-11'>
                    {InformationTitle("Currently...")}
                    {ImagelessInformationBlock("Directing Projects", movie_photo, null, "Putting the final editing touches on two 20-30 minute projects before sharing them. Also in pre-production for another movie I'm writing!")}
                    {ImagelessInformationBlock("Software Development Projects", job_photo, null, "Working on a graphics engine as well as a couple of React projects such as this one in languages like TypeScript and JavaScript.")}
                    {ImagelessInformationBlock("Game Development Projects", space_photo, null, "Working on two games right now. This city-builder pictured above, and a narrative action-adventure game")}
                </div>
                </div>
           </div>
    )
}

export default Current