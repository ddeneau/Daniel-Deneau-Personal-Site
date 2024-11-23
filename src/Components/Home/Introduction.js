import photo from './Images/Zootopia.png'

/* The "About Me" part of the homepage with a photo and opening description statement*/
const Introduction = () => {
    return (
            <div className="flex rounded-2xl bg-white h-fit w-full my-2 mx-12 flex-col">
                <div className="m-4 my-4 flex flex-row justify-center">
                    <img src={photo} alt="Me at D23 2022, a Disney Fan Expo in California." className=" w-1/4 h-1/4 rounded-full"/>
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