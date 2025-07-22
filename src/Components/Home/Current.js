import InformationTitle from "../Shared/InformationTitle"
import ImagelessInformationBlock from "./ImagelessInformationBlock"
import space_photo from "../../Components/Home/Images/space_game.png"
import job_photo from "../../Components/Home/Images/job_site.png"

const Current = () => {
    return(
        <div className="rounded-2xl bg-white my-2 mx-2 w-fit">
            <div className="flex flex-col w-full">
                <div className='text-2xl text-center my-2 mx-11 min-w-fit leading-relaxed'>
                    {InformationTitle("Currently...")}
                    {ImagelessInformationBlock("Job Board Project", job_photo, null, "A fun project that I got the idea for while applying for jobs. I'm working it into a functioning job board website.")}
                    {ImagelessInformationBlock("Working on Short Films and Writing", null, null, "Just finished one project, now working on securing funding for the next couple of scripts I have ready.")}
                    {ImagelessInformationBlock("Studying for my Certified Associate in Project Management exam!", null, null, "Required for my PMP exam since I don't have the required hours of project management experience.")}
                    {ImagelessInformationBlock("Game Development!", space_photo, null, "I am currently working on a outpost-building game using the Godot game engine.")}
                </div>
           </div>
        </div>
    )
}

export default Current