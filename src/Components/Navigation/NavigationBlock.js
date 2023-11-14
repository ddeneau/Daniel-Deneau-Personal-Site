import { Link } from "react-router-dom"
/* An individual block or link in the navigation bar. */
const NavigationBlock = (title, to, iconPath) => {
    return (
        <div className="w-fit h-fit rounded-2xl justify-items-center border border-orange-500 bg-red-500 hover:bg-white hover:border-4 px-8 py-4 mt-5 text-4xl text-white hover:text-red-500 hover:font-semibold">
            <Link className="" to={to}>{title}
            </Link>
            <img className="h-16 w-16" src={iconPath} alt="icon"/>
        </div>
    )
}

export default NavigationBlock