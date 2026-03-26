import InformationTitle from "../InformationTitle"
import ImagelessInformationBlock from "./ImagelessInformationBlock"
import space_photo from "../../Components/Images/offworld_2.png"
import job_photo from "../../Components/Images/job_board.png"
import movie_photo from "../../Components/Images/aa_photo.png"

const Current = () => {
    return(
        <div className="rounded-2xl bg-white my-2 mx-2 w-fit">
            <div className="flex flex-col w-full">
                <div className='text-2xl text-center my-2 mx-11 min-w-fit leading-relaxed'>
                    {InformationTitle("Currently...")}
                    {ImagelessInformationBlock("Directing Projects", movie_photo, null, "I am in post-production (editing and sound) on a short film, and working on a couple of scripts. Some of them are projects I plan to shoot, and others are projects I will put out there for others to read.")}
                    {ImagelessInformationBlock("React and TypeScript Projects", job_photo, null, "I am currently working on a job board website, as well as a few other projects using AWS, Vite, and TypeScript. Some of the fun challenges with these projects include managing user sessions and ensuring UI/UX compatibilty across devices.")}
                    {ImagelessInformationBlock("Game Development Project", space_photo, null, "One of my favorite projects right now is an outpost-building game using the Godot game engine. As of now, I do all of the programming, writing, and a bit of graphic design. The art and music is sourced online from creators that give permission to use their work.")}
                </div>
                </div>
           </div>
    )
}

export default Current