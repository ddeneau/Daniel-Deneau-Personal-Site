import InformationBlock from "./InformationBlock"
import vitalizeImage from './Images/vitalize.png'
import prgImage from "./Images/prg.png"
import retensaImage from "./Images/retensa.png"
import InformationTitle from "./InformationTitle"

const Information = () => {
    return(
        <div className="rounded-2xl bg-white mt-6 mx-12">
            <div className="flex flex-col w-full">
                <div className='text-2xl text-center my-3 mx-11 min-w-fit leading-relaxed'>
                    {InformationTitle("Previous Roles")}
                    {InformationBlock("VitalizeCare", vitalizeImage, "https://vitalizecare.co/" ,"I joined this start-up in the early fall of 2020, a few months into the world being comfortable working remotely. It was founded by two premed students who are still growing their company.", "Given the immense strain on the healthcare system, I was deeply motivated to contribute to the development of an app dedicated to enhancing the mental well-being of medical professionals. This project provided me with a unique opportunity to apply my technical skills to address a pressing societal issue.")}
                    {InformationBlock("Baxter the Chef", prgImage, "https://prg.cs.umd.edu/", "During my Winter Break of 2021, I began working under a Computer Engineering PhD researcher at the University of Maryland. The project was part of the Perception and Robotics Group within the Human-Computer Interaction Lab", "As an AI and robotics simulation developer, I was responsible for development within our Unity3D simulation. One of my main task throughout the process was focused on developing a modified version of an algorithm that subdived 3D graphics models (like the kind you build in Blender or Maya for games or simulations).")}
                    {InformationBlock("Retensa", retensaImage, "https://retensa.com/", "My previous experiences primarily involved startups and academic Retensa was a significant step up in terms of scale and complexity. I was initially overwhelmed by the fast-paced environment, but I quickly embraced the challenge and immersed myself in the learning process..", "Active participation in stand-up meetings with product managers and engineers gave me insights into large-scale software projects. Additionally, hands-on involvement in QA testing provided practical experience in safeguarding the quality and integrity of our products. These enriching experiences deepened my appreciation of the systems powering cloud web services.")}
                </div>
            </div>
        </div>
    )
}

export default Information