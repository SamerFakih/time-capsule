import React from 'react'
import "./styles.css"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserCapsuleCard from '../../Component/Shared/UserCard/index';
import request from '../../Apis/requests';


const User = () => {


    const [capsules, setCapsules] = useState([]);
    const Navigate = useNavigate()
    
    const Redirect = () => {
        Navigate("/create")
    }

    useEffect(() => {
    const FetchCapsules = async () => {
        try {
            const res = await request({
                url: 'capsule',
                method: 'get',
            });
            console.log(res)
            setCapsules(res);
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