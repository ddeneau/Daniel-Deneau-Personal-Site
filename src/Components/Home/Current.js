import InformationBlock from "./InformationBlock"
import InformationTitle from "./InformationTitle"

const Current = () => {
    return(
        <div className="rounded-2xl bg-white mt-6 mx-12 w-fit">
            <div className="flex flex-col w-full">
                <div className='text-2xl text-center my-3 mx-11 min-w-fit leading-relaxed'>
                    {InformationTitle("Currently...")}
                    {InformationBlock("", null, null)}
                    {InformationBlock("", null, null)}
                </div>
            </div>
        </div>
    )
}

export default Current