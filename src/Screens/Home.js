import Introduction from "../Components/Home/Introduction"
import Education from "../Components/Home/Education"
import Current from "../Components/Home/Current"

/* Landing/Home page with general information. */
const Home = () => {
    return(
        <div>
            <div className="flex flex-col flex-row justify-center rounded-3xl m-8 bg-gray-600 border-4 border-orange-600">
                
                <div className="flex flex-col h-fit mx-6 justify-items-center">
                    <div className="flex ">{Introduction()}</div>
                    <div className="flex "> {Education()} </div>
                    <div className="flex md:grid-cols-3 h-fit justify-center">{Current()}</div>
                </div>
                

                
            </div>      
        </div> 
    )
}

export default Home