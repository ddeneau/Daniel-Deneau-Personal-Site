import NavigationBlock from "./NavigationBlock"

/* Main navigation bar for the website. */
const NavigationBar = () => {
    return (
        <div className="grid grid-cols-3 px-5">
            {NavigationBlock("Software", "/Software")}
            {NavigationBlock("Film", "/Film")}
            {NavigationBlock("Home")}
        </div>
    )
}

export default NavigationBar