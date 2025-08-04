import React from 'react';

const FilmPage = ({ title, videoSrc, description = "Video description goes here.", credits = "Credits go here." }) => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>{title}</h1>
            <div style={styles.videoContainer}>
                {videoSrc ? (
                    <video controls style={styles.video}>
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <p style={styles.placeholder}>Video will be added here.</p>
                )}
            </div>
            <div style={styles.textContainer}>
                <h2>Description</h2>
                <p>{description}</p>
                <h2>Credits</h2>
                <p>{credits}</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '20px',
    },
    videoContainer: {
        marginBottom: '20px',
    },
    video: {
        width: '100%',
        maxWidth: '800px',
        height: 'auto',
    },
    placeholder: {
        fontStyle: 'italic',
        color: '#888',
    },
    textContainer: {
        marginTop: '20px',
    },
};

export default FilmPage;