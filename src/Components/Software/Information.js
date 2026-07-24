import vitalizeImage from '../Images/vitalize.png';
import prgImage from "../Images/prg.png";
import retensaImage from "../Images/retensa.png";
import itcon1 from "../Images/itcon.png";
import InformationTitle from "../InformationTitle";
import ImagelessInformationBlock from "../Home/ImagelessInformationBlock";

const Information = () => {
    return (
        <div className="justify-items-center rounded-2xl bg-white mx-6 my-6 px-6 py-8">
            {/* Information title section */ InformationTitle("Past Roles")}
                <div className="border border-red-400"></div>
            <div className="grid md:grid-cols-4 gap-6">
                    {ImagelessInformationBlock("Business Analyst - ITCON", itcon1, "https://itcon-inc.com/", "At ITCON I worked on government software development contracting teams. My day-to-day tasks involved watching the help desk closely, and assisiting developers and the project manager with documenting tasks and issues.", "My favorite part was working online with people in different parts of the country all day, every day. It felt a little like traveling and meeting people but I was just on my laptop." )}
                    {ImagelessInformationBlock("Business Analyst Intern - Retensa", retensaImage, "https://retensa.com/", "I forget exactly which website I applied for this role on, but I was excited to get an offer for a software company with a few well-known clients.", "I got to learn and practice how to support software development teams using project management software, and got to ask a lot of questions about how a software product worked.")}
                    {ImagelessInformationBlock("Simulation Development (C#) Intern - Baxter the Chef", prgImage, "https://prg.cs.umd.edu/", "One time I was browsing the research assistant job boards at my school and started working within the Human-Computer Interaction Lab", "As an AI and robotics simulation developer, I was responsible for development within a Unity3D simulation my boss had set-up, and I basically spent a year or so working on math, physics, and AI problems")}
                    {ImagelessInformationBlock("React Native Development Intern - VitalizeCare", vitalizeImage, "https://vitalizecare.co/" ,"I joined this start-up a few months into the world being comfortable working remotely, thinking it would be a great opportunity to practice mobile development on a team.", "It was interesting to contribute to the early development of a product set on impacting the well-being of medical professionals, especially since it is still growing today and gaining users")}
                </div>
        </div>
    )
}

export default Information