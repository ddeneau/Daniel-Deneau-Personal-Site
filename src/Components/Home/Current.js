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
                    {ImagelessInformationBlock("React and TypeScript Projects", job_photo, null, "I am currently working on a job board website, as well as a few other projects using AWS, Vite, and TypeScript. Some of the fun challenges with these projects include managing user sessions and ensuring UI/UX compatibilty across devices.")}
                    {ImagelessInformationBlock("Directing Projects", movie_photo, null, "At this point I have finished shooting for three out of four planned days for my next (third) short film. It is about a painter. I heard great advice that you should not try to make short films about a character. Instead, center a short film idea around some event. But I wrote the script before I heard that, now a year later, we're almost done filming. Right as I'm done with this I'm jumping into the next script I wrote, the cast is all onboard.")}
                    {ImagelessInformationBlock("Game Development Project", space_photo, null, "One of my favorite projects right now is an outpost-building game using the Godot game engine. As of now, I do all of the programming, writing, and a bit of graphic design. The art and music is sourced online from creators that give permission to use their work.")}
                </div>
                </div>
           </div>
    )
}

export default Current