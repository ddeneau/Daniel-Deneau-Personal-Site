import FilmSection from "../Components/FIlm/FilmSection"

const Film = () => {
    return (
        <div className="rounded-3xl bg-slate-600 border-4 border-orange-600 mt-8 mb-2 mx-8 flex flex-col">
             
            {FilmSection()}
        </div>
    )
}

export default Film