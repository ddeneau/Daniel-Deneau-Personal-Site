import Introduction from "../Components/Home/Introduction"
import Education from "../Components/Home/Education"
import Current from "../Components/Home/Current"

/* Landing/Home page with general information. */
const Home = () => {
    return(
        <div>
            <div className="flex flex-col justify-items-center rounded-3xl mt-1 mb-1 mx-8 bg-red-400 border-4 border-orange-600 
                            lg:flex lg:flex-row
                                ">
                
                <div className="lg:w-3/5 sm:w-full">
                    <div className="flex w-full">{Introduction()}</div>
                    <div className="flex w-full"> {Education()} </div>
                </div>
                

                <div className="flex w-2/5 sm:w-fit sm:justify-center">{Current()}</div>

            </div>
            <p className="flex justify-center ">Daniel Deneau, 2024</p>       
        </div> 
    )
}

export default Home