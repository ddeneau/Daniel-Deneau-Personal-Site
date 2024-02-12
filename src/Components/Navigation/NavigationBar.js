import NavigationBlock from "./NavigationBlock"
import houseIcon from "./home.png"
import atomIcon from "./code_blocks.png"
import movieIcon from "./live_tv.png"

/* Main navigation bar for the website. */
const NavigationBar = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-row w-1/3">
                <div className="w-1/3">{NavigationBlock("Software", "/Software", atomIcon)}</div> 
                <div className="w-1/3">{NavigationBlock("Home ", "/", houseIcon)}</div>
                <div className="w-1/3">{NavigationBlock("Film", "/Film", movieIcon)}</div>
            </div>
        </div>
    )
}

export default NavigationBar