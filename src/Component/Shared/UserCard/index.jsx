import React,{useState, useEffect} from 'react';
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
    tags,
    location
}) => {
    const [countdown, setCountdown] = useState("");

useEffect(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
    }, [reveal]);

const updateCountdown = () => {
    const target = new Date(reveal);
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
        setCountdown("Revealed!");
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
};
    return (
    <div className="userdata" style={{ borderColor: color }}>
        <div className="userdata-header" style={{ backgroundColor: color }}>
        <h4>{title} {mood}</h4>
        <span className="privacy">{privacy}</span>
    </div>


    <div className="userdata-content">
        <p><strong>Reveal on:</strong> {new Date(reveal).toLocaleString()}</p>
        <p >{message}</p>

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
        {countdown && (
        <p className="capsule-tags">
        {countdown}
        </p>
        )}
    </div>
    </div>
    );
};

export default UserCapsuleCard;
