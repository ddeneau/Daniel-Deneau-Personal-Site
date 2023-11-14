import NavigationBlock from "./NavigationBlock"
import houseIcon from "./home.png"
import atomIcon from "./code_blocks.png"
import movieIcon from "./live_tv.png"

/* Main navigation bar for the website. */
const NavigationBar = () => {
    return (
        <div className="flex space-x-4 justify-center px-5">
            {NavigationBlock("Science & Tech", "/Software", atomIcon)}
            {NavigationBlock("Home", "/", houseIcon)}
            {NavigationBlock("Filmmaking Projects", "/Film", movieIcon)}
        </div>
    )
}

export default NavigationBar