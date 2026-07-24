const OUTER_CLASS = "justify-items-center m-3"
const TEXT_CONTAINER_CLASS = 'flex-row';
const TITLE_CLASS = 'text-3xl font-bold mb-2 mr-2';
const SUBCAT_CLASS = 'text-xl font-bold mb-2 mr-2';
const TEXT_CLASS = 'mb-2 mr-2';
const IMAGE_CLASS = "max-h 24 h-auto";

const FilmPage = ({ title, posterSrc, altText, videoSrc, description, credits}) => {
    return (
        <div className={OUTER_CLASS}>
            <h1 className={TITLE_CLASS}>{title}</h1>
            {posterSrc ?  (
                <img className={IMAGE_CLASS} src={posterSrc} alt={altText}/>
            ) : (
                <p>poster coming soon</p>
            )}
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