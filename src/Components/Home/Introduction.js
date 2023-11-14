import photo from './Images/Zootopia.png'

/* The "About Me" part of the homepage with a photo and opening description statement*/
const Introduction = () => {
    return (
            <div className="flex rounded-2xl bg-white h-fit w-1/2 my-6 mt-6 mx-12 flex-cols">
                <div>
                    <img src={photo} alt="Me at D23 2022, a Disney Fan Expo in California." className="border-black border-3 rounded-4xl pb-4 pl-4 pt-4 max-h-fit"/>
                </div>
                <div className="flex flex-col w-full">
                    <div className='text-4xl font-semibold align-middle my-11 mx-11 w-fit'>
                        Thanks for stopping by!
                    </div>
                    <div className='text-4xl align-middle my-11 mx-11 min-w-fit'>
                        <p>This is where you can find out a little bit more about my projects, background, and interests.</p>
                        
                        <p className='py-10'>To the right is me with some of my friends! Why <em className="italic">that</em> photo? 
                        It's a perfect example movie making and software development.</p>
                    </div>
                </div>
            </div>
    )
}

export default Introduction