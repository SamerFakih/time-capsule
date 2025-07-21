import React from 'react'
import "./styles.css"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserCapsuleCard from '../../Component/Shared/UserCard/index';
import request from '../../Apis/requests';


const User = () => {

    
    const [capsules, setCapsules] = useState([]);
    const Navigate = useNavigate()
    const token = localStorage.getItem('token');
    
    
    const Redirect = () => {
        Navigate("/create")
    }

    useEffect(() => {
    if (!token) {
        Navigate('/'); // or any page you want
    }
});

    useEffect(() => {
    const FetchCapsules = async () => {
        try {

            const res = await request({
                url: 'capsule',
                method: 'get',
            });
            console.log(res)
            const userCapsules =  res.map((capsule) => {
                
                let image =null;
                let audio =null;

                capsule.attachments?.forEach((attachment) => {
                
                const type = attachment.type.toLowerCase();

                if (type.startsWith("image")) image = attachment.encoded;
                if (type.startsWith("audio")) audio = attachment.encoded;

                console.log("Attachment", attachment);
            });
            console.log("Image:", image, "Audio:", audio);
            
            
            return {
                title: capsule.title,
                message: capsule.message,
                image,
                audio,
                reveal:capsule.reveal_at,
                privacy: capsule.privacy,
                color: capsule.color,
                mood: capsule.mood,
                tags: capsule.tags,
                location: capsule.location
            }

            });
            setCapsules(userCapsules);
        } catch (error) {
            console.error("Failed to fetch capsules:", error);
        }
    };

    FetchCapsules();
}, []);



    return (

    <div className="capsule-container">
        <div className="capsule-header">
            <span className="capsule-title">Capsule</span>
            <button className="add-button" aria-label="Add" onClick={Redirect}>
            <span className="plus-icon">+</span>
            </button>
        </div>
        <div className="capsule-list">
        {capsules.map((capsule, index) => (
            <UserCapsuleCard key={index} {...capsule} />
        ))}
        </div>
    </div>
    );
};

export default User