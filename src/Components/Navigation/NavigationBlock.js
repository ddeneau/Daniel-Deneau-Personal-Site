import { Link } from "react-router-dom"
/* An individual block or link in the navigation bar. */
const NavigationBlock = (title, to, iconPath) => {
    return (
        <div>
            <Link className="w-full h-full flex flex-col justify-items-center items-center border border-slate-600 bg-red-400 hover:bg-white hover:border-4 mx-1/2 px-2 text-md text-white hover:text-red-500 hover:font-semibold transition-all duration-300 ease-in-out delay-150" to={to}>
                <span className="w-full truncate text-xs sm:text-sm md:text-md lg:text-lg text-center">{title}</span>
                <img className="h-fit w-fit" src={iconPath} alt="icon" />
            </Link>
        </div>
    )
}

export default NavigationBlock