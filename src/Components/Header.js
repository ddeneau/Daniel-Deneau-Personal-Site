/* Header to go above each section of the website. */
const Header = () => {
    return (
        <div className="flex justify-center">
            <div className="border-4 border-orange-600 bg-red-400 rounded-2xl mx-7 mb-1 mt-2 w-1/2 font-sans">
                <div className="text-center my-2 text-2xl text-white">Daniel Deneau</div>
                <div className="text-center my-2 text-md text-white">Software Developer</div>
            </div>
        </div>
    )
}

export default Header