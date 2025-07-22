import photo from './Images/headshot.png';

const Introduction = () => {
    return (
        <div className="flex flex-col rounded-2xl bg-white h-fit w-full my-2 mx-2 sm:mx-4 md:mx-12 p-2 sm:p-4 md:p-6">
            {/* First row: Profile picture and greeting */}
            <div className="flex flex-row items-center justify-start flex-wrap">
                <img
                    src={photo}
                    alt="Profile"
                    className="rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover mr-4 sm:mr-6 mb-2 sm:mb-0"
                />
                <p className="text-2xl sm:text-3xl font-semibold">
                    Thanks for stopping by!
                </p>
            </div>
            {/* Second row: Social icons */}
            <div className="flex flex-row flex-wrap justify-center items-center space-x-4 sm:space-x-6 mb-4">
                <a href="https://github.com/ddeneau" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="purple">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                </a>
                <a href="https://linkedin.com/in/ddeneau" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="blue">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
                    </svg>
                </a>
                <a href="mailto:daniel.a.deneau@gmail.com" aria-label="Email">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="green">
                        <path d="M12 13.065l-11.99-7.065v14h23.98v-14l-11.99 7.065zm11.99-9.065h-23.98l11.99 7.065 11.99-7.065z"/>
                    </svg>
                </a>
                <p className="break-all text-sm sm:text-base">daniel.a.deneau@gmail.com</p>
            </div>
            {/* Third row: Intro message */}
            <div className="text-base sm:text-lg leading-relaxed text-center">
                <p>This is where you can find out a little bit more about my projects, background, and interests.</p>
            </div>
        </div>
    );
};

export default Introduction;