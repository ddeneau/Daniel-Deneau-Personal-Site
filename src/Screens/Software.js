import Information from "../Components/Software/Information"

const Software = () => {
    return(
    <div>
        <div className="rounded-3xl bg-slate-600 border-4 border-orange-600 mt-8 mb-2 mx-8 flex">
           {Information()}
        </div>
    </div> 
    )
}

export default Software