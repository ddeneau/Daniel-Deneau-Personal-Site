import Introduction from "../Components/Home/Introduction"
import Information from "../Components/Home/Information"
import Education from "../Components/Home/Education"

/* Landing/Home page with general information. */
const Home = () => {
    return(
        <div>
            <div className="lg:flex lg:flex-row rounded-3xl mt-1 mb-1 mx-8 bg-red-400 border-4 border-orange-600 sm:flex sm:flex-col">
                
                <div className="flex flex-col w-2/5">
                    <div className="flex w-full">{Introduction()}</div>
                    <div className="flex w-full"> {Education()} </div>
                </div>
                

                <div className="flex w-3/5">{Information()}</div>

            </div>
            <p className="flex justify-center ">Daniel Deneau, 2023</p>       
        </div> 
    )
}

export default Home