/* Header to go above each section of the website. */
const Header = () => {
    return (
        <div className="flex justify-center">
            <div className="border-4 border-orange-600 bg-red-400 rounded-2xl mx-7 mb-10 mt-2 w-1/2 font-sans">
                <div className="text-center my-2 text-9xl text-white">Welcome</div>
                <div className="text-center my-2 text-5xl text-white">to Dan's Corner</div>
            </div>
        </div>
    )
}

export default Header