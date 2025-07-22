import React, { useState} from 'react';
import { useEffect } from 'react';
import './styles.css';

const PublicCard = ({
    name,
    title,
    message,
    image,
    audio,
    reveal,
    color,
    mood,
    tags,
    location
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
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

    const handleToggle = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className="userdata" style={{ borderColor: color }}>
            <button
                className="expand-btn"
                style={{backgroundColor: color,}}
                onClick={handleToggle}
                >
                <span>{name}</span>
                <h4>{title} {mood}</h4>
            </button>
            {isExpanded && (
                <div className="userdata-content">
                    <p><strong>Reveal on:</strong> {new Date(reveal).toLocaleString()}</p>
                    <p>{message}</p>

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
                            <strong>Location:</strong> {location}
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
            )}
        </div>
    );
};

export default PublicCard;
