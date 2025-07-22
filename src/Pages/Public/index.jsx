import React from 'react'
import "./styles.css"
import { useEffect, useState } from 'react';
import Input from '../../Component/Shared/Input'
import request from '../../Apis/requests';
import PublicCard from '../../Component/Shared/PublicCard';



const PublicPage = () => {

    const [users, setUsers] = useState([]);
    const [SearchFilter, setSearchFilter] = useState([]);

    const HandleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = users.filter(
            (user) =>
                user.name?.toLowerCase().includes(term)
        );
        setSearchFilter(filtered);
    }

    useEffect(() => {
    const FetchCapsules = async () => {
        try {

            const res = await request({
                url: 'public',
                method: 'get',
            });

            const allCapsules = [];

        res.map((user) => {
            let image = null;
            let audio = null;

    user.capsules.forEach((capsule) => {
    capsule.attachments?.forEach((attachment) => {
    const type = attachment?.type?.toLowerCase();
        if (!type) return;

        if (type.startsWith("image")) image = attachment.encoded;
        if (type.startsWith("audio")) audio = attachment.encoded;
        });

        allCapsules.push({
                            name: user.name,
                            title: capsule.title,
                            message: capsule.message,
                            image,
                            audio,
                            reveal: capsule.revealed_at,
                            privacy: capsule.privacy,
                            color: capsule.color,
                            mood: capsule.mood,
                            tags: capsule.tags,
                            location: capsule.location,
                        });
});


            return {
                    name: user.name,
                    title: user.capsules.title,
                    message: user.capsules.message,
                    image,
                    audio,
                    reveal:user.capsules.revealed_at,
                    privacy: user.capsules.privacy,
                    color: user.capsules.color,
                    mood: user.capsules.mood,
                    tags: user.capsules.tags,
                    location: user.capsules.location
            }

            });
            setUsers(allCapsules);
            setSearchFilter(allCapsules);
        } catch (error) {
            console.error("Failed to fetch capsules:", error);
        }
    };

    FetchCapsules();
},[]);

    return (
    <div className="capsule-container">
        <div className="capsule-header">
            <span className="capsule-title">Public Capsule</span>
        <div className='Search-bar-public'>
            <Input placeholder={"Search by user"}
            onChange={HandleSearch}
            />
        </div>
        </div>
        <div className="capsule-list">
        {SearchFilter.map((user, index) => (
            <PublicCard key={index} {...user} />
        ))}
        </div>
    </div>
    )
}

export default PublicPage