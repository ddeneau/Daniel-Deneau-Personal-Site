import { Link } from "react-router-dom"
/* An individual block or link in the navigation bar. */
const NavigationBlock = (title, to, iconPath) => {
    return (
        <div className="w-fit h-fit flex flex-col justify-items-center items-center border border-orange-500 bg-red-500 hover:bg-white hover:border-4 mx-1/2 px-2 text-md text-white hover:text-red-500 hover:font-semibold">
            <Link className="" to={to}>{title}
            </Link>
            <img className="h-fit w-fit" src={iconPath} alt="icon"/>
        </div>
    )
}

export default NavigationBlock