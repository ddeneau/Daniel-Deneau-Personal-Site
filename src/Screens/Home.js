import Introduction from "../Components/Home/Introduction"
import Education from "../Components/Home/Education"
import Current from "../Components/Home/Current"

/* Landing/Home page with general information. */
const Home = () => {
    return(
        <div>
            <div className="flex flex-col justify-items-center rounded-3xl m-8 bg-gray-600 border-4 border-orange-600 
                            lg:flex lg:flex-row
                                ">
                
                <div className="m-8 lg:w-1/2 h-fit sm:w-full">
                    <div className="flex w-fit h-1/2">{Introduction()}</div>
                    <div className="flex w-fit h-1/2"> {Education()} </div>
                </div>
                

                <div className="flex w-1/2 h-1/2 sm:w-fit sm:justify-center m-8">{Current()}</div>

            </div>
            <p className="flex justify-center ">Daniel Deneau, 2024</p>       
        </div> 
    )
}

export default Home