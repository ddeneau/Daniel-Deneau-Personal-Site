import React from 'react';

const TEXT_CONTAINER_CLASS = 'flex';

const FilmPage = ({ title, videoSrc, description = "Video description goes here.", credits = "Credits go here." }) => {
    return (
        <div>
            <h1>{title}</h1>
            <div>
                {videoSrc ? (
                    <video controls>
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <p>Video will be added here.</p>
                )}
            </div>
            <div className={TEXT_CONTAINER_CLASS}>
                <h2>Description</h2>
                <p>{description}</p>
                <h2>Credits</h2>
                <p>{credits}</p>
            </div>
        </div>
    );
};


export default FilmPage;