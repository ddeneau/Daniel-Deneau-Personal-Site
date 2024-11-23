import photo from './Images/logo.png'

const Education = () => {
    return (
        <div className="flex rounded-2xl bg-white h-fit w-full my-6 mx-12 flex-col">
            <div className="flex flex-col w-full">
                <div className='text-medium font-semibold align-middle mt-2 mx-2 w-fit'>
                    Education
                </div>
                <div className='text-medium align-middle my-3 mx-4 w-fit'>
                    <p>Bachelor's of Science, Information Science</p>
                </div>
                <div className='text-medium align-middle my-3 mx-4 w-fit'>
                    <p>University of Maryland, College Park</p>
                </div>
                <div className='text-medium align-middle my-3 mx-4 min-w-fit leading-relaxed'>
                    <p>At Maryland, I got into programming, software development, silent film, and sound film.  </p>
                </div>
                {<img src={photo} alt="Your Logo" className="border-black border-3" />}
            </div>
        </div>
    );
};

export default Education;
