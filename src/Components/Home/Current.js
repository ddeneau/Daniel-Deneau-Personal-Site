import InformationBlock from "./InformationBlock"
import InformationTitle from "./InformationTitle"

const Current = () => {
    return(
        <div className="rounded-2xl bg-white mt-6 mx-12 w-fit">
            <div className="flex flex-col w-full">
                <div className='text-2xl text-center my-3 mx-11 min-w-fit leading-relaxed'>
                    {InformationTitle("Currently...")}
                    {InformationBlock("The 9-to-5 Life", null, null)}
                    {InformationBlock("The 5-to-9 Life", null, null)}
                </div>
            </div>
        </div>
    )
}

export default Current