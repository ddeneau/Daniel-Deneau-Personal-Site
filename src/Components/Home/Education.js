import photo from './Images/logo.png'

const Education = () => {
    return (
        <div className="flex rounded-2xl bg-white h-fit w-full my-6 mx-12 flex-col">
            <div className="flex flex-col w-full">
                <div className='text-4xl font-semibold align-middle mt-6 mx-11 w-fit'>
                    Education
                </div>
                <div className='text-3xl align-middle my-3 mx-11 w-fit'>
                    <p>Bachelor's of Science, Information Science</p>
                </div>
                <div className='text-3xl align-middle my-3 mx-11 w-fit'>
                    <p>University of Maryland, College Park</p>
                </div>
                <div className='text-lg align-middle my-3 mx-11 min-w-fit leading-relaxed'>
                    <p>At Maryland, I delved into math, physics, computer science, and programming fundamentals. Exploring software development methadologies, my major equipped me with tools to implement and expand upon digital solutions to meet people and business needs.  </p>
                </div>
                {<img src={photo} alt="Your Logo" className="border-black border-3 rounded-4xl" />}
            </div>
        </div>
    );
};

export default Education;
