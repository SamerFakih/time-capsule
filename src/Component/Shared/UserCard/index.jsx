import React from 'react';
import './styles.css';


const UserCapsuleCard = ({
    title,
    message,
    image,
    audio,
    reveal,
    privacy,
    color,
    mood,
    surprise,
    tags,
    location
}) => {
    return (
    <div className="userdata" style={{ borderColor: color }}>
        <div className="userdata-header" style={{ backgroundColor: color }}>
        <h4>{title} {mood}</h4>
        <span className="privacy">{privacy}</span>
    </div>


    <div className="userdata-content">
        <p><strong>Reveal on:</strong> {new Date(reveal).toLocaleString()}</p>
        {!surprise && <p className="capsule-message">{message}</p>}

        {image && (
        <div>
            <p><strong>Attached Image:</strong></p>
            <img src={image} alt="Attached" className="capsule-media" />
        </div>
        )}

        {audio && (
        <div>
            <p><strong>Audio Note:</strong></p>
            <audio controls src={audio}></audio>
        </div>
        )}

        {location && (
        <p className="capsule-tags">
            <strong>location:</strong> {location}
        </p>
        )}

        {tags && (
        <p className="capsule-tags">
            <strong>Tags:</strong> {tags}
        </p>
        )}
    </div>
    </div>
    );
};

export default UserCapsuleCard;
