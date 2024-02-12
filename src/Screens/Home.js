import Introduction from "../Components/Home/Introduction"
import Information from "../Components/Home/Information"
import Education from "../Components/Home/Education"

/* Landing/Home page with general information. */
const Home = () => {
    return(
        <div>
            <div className="flex flex-col justify-items-center rounded-3xl mt-1 mb-1 mx-8 bg-red-400 border-4 border-orange-600 
                            lg:flex lg:flex-row
                                ">
                
                <div className="lg:w-2/5 sm:w-full">
                    <div className="flex w-full">{Introduction()}</div>
                    <div className="flex w-full"> {Education()} </div>
                </div>
                

                <div className="flex w-3/5 sm:w-fit sm:justify-center">{Information()}</div>

            </div>
            <p className="flex justify-center ">Daniel Deneau, 2023</p>       
        </div> 
    )
}

export default Home