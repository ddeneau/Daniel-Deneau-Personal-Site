import { Link } from "react-router-dom"
/* An individual block or link in the navigation bar. */
const NavigationBlock = (title, to) => {
    return (
        <div>
            <Link className="justify-items-center border border-orange-500 hover:border-yellow-400" to={to}>{title}</Link>
        </div>
    )
}

export default NavigationBlock