import React from 'react';

const VideoPlayer = ({video}) => {
    return (
        <iframe
        width="100%"
        className="aspect-video"
        src={video}
        title="Some video title"
        frameBorder=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>
    );
};

export default VideoPlayer;