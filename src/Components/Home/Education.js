import photo from '../Images/logo.png'

const Education = () => {
    return (
        <div className="flex rounded-2xl bg-white h-fit w-full my-6 flex-col">
            <div className="flex flex-col w-full">
                <div className='text-medium font-semibold align-middle mt-2 w-fit'>
                    Education
                </div>
                <div className='text-medium align-middle w-fit'>
                    <p>I have a Bachelor's of Science in Information Science from the University of Maryland.</p>
                </div>
                <div className='text-medium align-middle my-2 min-w-fit leading-relaxed'>
                    <p>At UMD I got into programming and software development for the first time.
                       There was a bit of a struggle to get any sort of internships at first, but eventually I got to work on projects I  liked. I graduated in 2023 right before the generative AI boom (which is kind of crazy.)</p>
                    <p>I took a lot of classes in the Cinema and Media Studies department as well, which more or less explains the film section.
                       Though I always loved books and movies, I had to watch a lot of random academic film stuff that I ended up really enjoying..</p>
                </div>
                {<img src={photo} alt="Your Logo" className="border-black border-3" />}
            </div>
        </div>
    );
};

export default Education;
