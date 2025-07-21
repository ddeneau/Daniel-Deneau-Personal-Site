import photo from './Images/logo.png'

const Education = () => {
    return (
        <div className="flex rounded-2xl bg-white h-fit w-full my-6 mx-12 flex-col">
            <div className="flex flex-col w-full">
                <div className='text-medium font-semibold align-middle mt-2 mx-4 w-fit'>
                    Education
                </div>
                <div className='text-medium align-middle mx-4 w-fit'>
                    <p>I have a Bachelor's of Science in Information Science from the University of Maryland.</p>
                </div>
                <div className='text-medium align-middle my-2 mx-4 min-w-fit leading-relaxed'>
                    <p>At UMD I got into programming and software development for the first time. I graduated in 2023 right before the generative AI boom (which is kind of crazy.)</p>
                    <p>I took a lot of classes in the Cinema and Media Studies department as well, which more or less explains the film section.</p>
                </div>
                {<img src={photo} alt="Your Logo" className="border-black border-3" />}
            </div>
        </div>
    );
};

export default Education;
