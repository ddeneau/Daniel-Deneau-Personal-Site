const OUTER_CLASS = "justify-center"
const TEXT_CONTAINER_CLASS = 'flex flex-col';
const TITLE_CLASS = 'text-3xl font-bold mb-2 mr-2';
const SUBCAT_CLASS = 'text-xl font-bold mb-2 mr-2';
const TEXT_CLASS = 'mb-2 mr-2';

const FilmPage = ({ title, videoSrc, description, credits}) => {
    return (
        <div className={OUTER_CLASS}>
            <h1 className={TITLE_CLASS}>{title}</h1>
            <div>
                {videoSrc ? (
                    <video controls>
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <p>Video hosting in progress...Please view from the media page.</p>
                )}
            </div>
            <div className={TEXT_CONTAINER_CLASS}>
                <div>
                    <h2 className={SUBCAT_CLASS}>Description</h2>
                    <p className={TEXT_CLASS}>{description}</p>
                </div>
                <div>
                    <h2 className={SUBCAT_CLASS}>Credits</h2>
                    <p  className={TEXT_CLASS}>{credits}</p>
                </div>
            </div>
        </div>
    );
};


export default FilmPage;