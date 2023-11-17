import InformationBlock from "./InformationBlock"
import vitalizeImage from './Images/vitalize.png'
import prgImage from "./Images/prg.png"
import retensaImage from "./Images/retensa.png"
import InformationTitle from "./InformationTitle"

const Information = () => {
    return(
        <div className="rounded-2xl bg-white h-fit w-1/2 my-6 mt-6 ml-24 mr-12">
            <div className="flex flex-col w-full">
                <div className='text-4xl text-center my-11 mx-11 min-w-fit leading-relaxed'>
                    {InformationTitle("Previous Roles:", "When I first entered school, I was set on engineering (aerospace).", "I still would like to pursue engineering, or computational physics, but I eventually graduated with an Information Science degree.")}
                    {InformationBlock("VitalizeCare", vitalizeImage, "https://vitalizecare.co/" ,"I joined this start-up in the early fall of 2020, a few months into the world being comfortable working remotely. It was founded by two amazing premed students who are growing their company to this day!", "With the healthcare system overwhelmed, it was great to get a chance to design and code a React Native app that would help the mental wellbeing of medical professionals.")}
                    {InformationBlock("Baxter the Chef", prgImage, "https://prg.cs.umd.edu/", "I worked under a Computer Engineering PhD researcher at the University of Maryland. The project was part of the Perception and Robotics Group within the Human-Computer Interaction Lab", "My main task throughout the process was focused on developing a modified version of an algorithm that subdived 3D graphics models (like the kind you build in Blender or Maya for games or simulations) as if they were being cut with a knife. Don't worry, we would only use it on stuff like vegetables.")}
                    {InformationBlock("Retensa", retensaImage, "https://retensa.com/", "I mentioned in my interview how much it interested me to work for a technology company with Fortune 500 clients, since I only had experience in start-ups or academic internsups.", "The culture was fast-paced, and taught me a lot about how consulting firms of this scale operate. I got to attend and particapte heavily in stand-up meetings with product managers and lead engineers, try my hand at QA testing, and learned a lot about the systems that it takes to run a cloud web service.")}
                </div>
            </div>
        </div>
    )
}

export default Information