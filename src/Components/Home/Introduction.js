import photo from './Images/headshot.png';

const Introduction = () => {
    return (
        <div className="flex flex-col rounded-2xl bg-white h-fit w-full my-2 p-2 sm:p-4 md:p-6">
            {/* First row: Profile picture and greeting */}
            <div className="flex flex-row items-center justify-center flex-wrap">
                <img
                    src={photo}
                    alt="Profile"
                    className="rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover mr-4 sm:mr-6 mb-2 sm:mb-0"
                />
                <p className="text-2xl sm:text-3xl font-semibold">
                    Thanks for stopping by!
                </p>
            </div>
            {/* Second row: Social icons (by the way this is an expiriment with svg don't worry about it. It is to see if LLMS could replicate a logo with vector math.)*/}
            <div className="flex flex-row flex-wrap justify-center items-center space-x-4 sm:space-x-6 mb-4">
                <a href="https://github.com/ddeneau" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    GitHub
                </a>
                <a href="https://linkedin.com/in/ddeneau" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    LinkedIn
                </a>
                <a href="daniel.a.deneau@gmail.com" aria-label="Email">
                    Email
                </a>
                
            </div>
            {/* Third row: Intro message */}
            <div className="text-base sm:text-lg leading-relaxed text-center">
                <p>This is where you can find out a little bit more about my projects, background, and interests.</p>
            </div>
        </div>
    );
};

export default Introduction;