import NavigationBlock from "./NavigationBlock"
import houseIcon from "./home.png"
import atomIcon from "./code_blocks.png"
import movieIcon from "./live_tv.png"

/* Main navigation bar for the website. */
const NavigationBar = () => {
    return (
        <div className="flex justify-center bg-slate-600 my-4 sm:">
            <div className="flex flex-row w-1/3 sm:">
                <div className="w-1/3 sm:">{NavigationBlock("Software", "/Software", atomIcon)}</div> 
                <div className="w-1/3 sm:">{NavigationBlock("Main ", "/", houseIcon)}</div>
                <div className="w-1/3 sm:">{NavigationBlock("Media", "/Film", movieIcon)}</div>
            </div>
        </div>
    )
}

export default NavigationBar