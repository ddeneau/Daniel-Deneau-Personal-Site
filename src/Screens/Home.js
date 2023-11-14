import Introduction from "../Components/Home/Introduction"
import Information from "../Components/Home/Information"

/* Landing/Home page with general information. */
const Home = () => {
    return(
        <div>
            <div className="flex flex-row rounded-3xl mt-8 mb-2 mx-8 bg-red-400 border-4 border-orange-600 " h-screen >
                {Introduction()}
                {Information()}
            </div>
            <p className="flex justify-center ">Daniel Deneau, 2023</p>       
        </div> 
    )
}

export default Home