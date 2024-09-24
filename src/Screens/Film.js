import FilmSection from "../Components/FIlm/FilmSection"

const Film = () => {
    return (
        <div className="rounded-3xl bg-red-400 border-4 border-orange-600 mt-8 h-screen mb-2 mx-8 flex flex-col">
            <div className="rounded-2xl bg-white h-auto m-8 flex'"> Hello </div>
            {FilmSection()}
        </div>
    )
}

export default Film