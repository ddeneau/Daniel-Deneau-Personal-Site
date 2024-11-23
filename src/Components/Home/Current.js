import InformationTitle from "./InformationTitle"
import InformationBlock from "./InformationBlock"
import ImagelessInformationBlock from "./ImagelessInformationBlock"

const Current = () => {
    return(
        <div className="rounded-2xl bg-white mt-6 mx-2 w-fit">
            <div className="flex flex-col w-full">
                <div className='text-2xl text-center my-3 mx-11 min-w-fit leading-relaxed'>
                    {InformationTitle("Currently...")}
                    {ImagelessInformationBlock("Studying for my Certified Associate in Project Management exam!", "https://www.pmi.org/certifications/certified-associate-capm", "Required for my PMP exam since I don't have the required hours of project management experience.")}
                    {InformationBlock("Working at ITCON", "https://itcon-inc.com/about", "", "I'm a business and quality analyst.")}
                </div>
            </div>
        </div>
    )
}

export default Current