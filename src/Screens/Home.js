import Introduction from "../Components/Home/Introduction"
import Education from "../Components/Home/Education"
import Current from "../Components/Home/Current"

/* Landing/Home page with general information. */
const Home = () => {
    return(
        <div>
            <div className="flex flex-col lg:flex-row justify-items-center rounded-3xl m-8 bg-gray-600 border-4 border-orange-600">
                
                <div className="flex flex-col lg:m-8 sm:m-8 lg:w-1/2 h-fit sm:w-fit sm:justify-center">
                    <div className="flex ">{Introduction()}</div>
                    <div className="flex "> {Education()} </div>
                </div>
                

                <div className="flex lg:m-8 sm:m-8 lg:w-1/2 h-fit w-full sm:justify-center">{Current()}</div>
            </div>      
        </div> 
    )
}

export default Home