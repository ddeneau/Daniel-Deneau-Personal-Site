import photo from './Images/Zootopia.png'

/* The "About Me" part of the homepage with a photo and opening description statement*/
const Introduction = () => {
    return (
            <div className="flex rounded-2xl bg-white h-fit w-full my-6 mt-6 mx-12 flex-col">
                <div>
                    <img src={photo} alt="Me at D23 2022, a Disney Fan Expo in California." className="border-black border-3 rounded-4xl"/>
                </div>
                <div className="flex flex-col w-full">
                    <div className='text-3xl font-semibold align-middle mt-6 mb-3 mx-11 w-fit'>
                        Thanks for stopping by!
                    </div>
                    <div className='text-lg align-middle my-6 mx-11 min-w-fit leading-relaxed'>
                        <p>This is where you can find out a little bit more about my projects, background, and interests.</p>
                    </div>
                </div>
            </div>
    )
}

export default Introduction