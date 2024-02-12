import { Link } from "react-router-dom"
/* An individual block or link in the navigation bar. */
const NavigationBlock = (title, to, iconPath) => {
    return (
        <div>
            <Link className="w-full h-full flex flex-col justify-items-center items-center border border-white bg-red-400 hover:bg-white hover:border-4 mx-1/2 px-2 text-md text-white hover:text-red-500 hover:font-semibold" to={to}>{title}
                <img className="h-fit w-fit" src={iconPath} alt="icon"/>
            </Link>
        </div>
    )
}

export default NavigationBlock