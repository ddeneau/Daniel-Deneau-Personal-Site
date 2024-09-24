import FilmSection from "../Components/FIlm/FilmSection"

const Film = () => {
    return (
        <div className="rounded-3xl bg-slate-600 border-4 border-orange-600 mt-8 mb-2 mx-8 flex flex-col">
            <p className="text-2xl font-bold m-6 bg-white rounded-2xl text-center">Past Projects</p>
            {FilmSection()}
        </div>
    )
}

export default Film