import React from 'react'
import "./styles.css"
import { useNavigate } from 'react-router-dom';
import UserCapsuleCard from '../../Component/Shared/UserCard/index';
import landing4 from '../../assets/landing4.jpg'

const dummyCapsules = [{
    title: "A Message from the Past",
    message: "Hey future me! I hope you're still chasing your dreams 🚀.",
    image: landing4,
    audio: "https://www.w3schools.com/html/horse.mp3",
    reveal: "2025-12-25T10:30",
    privacy: "private",
    color: "#3498db",
    mood: "🌈",
    coverImage:landing4,
    surprise: false,
    tags: "future,self,growth"
},
{
    title: "A Message from the Past",
    message: "Hey future me! I hope you're still chasing your dreams 🚀.",
    image: landing4,
    audio: "https://www.w3schools.com/html/horse.mp3",
    reveal: "2025-12-25T10:30",
    privacy: "private",
    color: "#62e21dff",
    mood: "🌈",
    coverImage:landing4,
    surprise: false,
    tags: "future,self,growth"
},
{
    title: "A Message from the Past",
    message: "Hey future me! I hope you're still chasing your dreams 🚀.",
    image: landing4,
    audio: "https://www.w3schools.com/html/horse.mp3",
    reveal: "2025-12-25T10:30",
    privacy: "private",
    color: "#f10f0fff",
    mood: "🌈",
    coverImage:landing4,
    surprise: false,
    tags: "future,self,growth"
},
{
    title: "A Message from the Past",
    message: "Hey future me! I hope you're still chasing your dreams 🚀.",
    image: landing4,
    audio: "https://www.w3schools.com/html/horse.mp3",
    reveal: "2025-12-25T10:30",
    privacy: "private",
    color: "#cb15aaff",
    mood: "🌈",
    coverImage:landing4,
    surprise: false,
    tags: "future,self,growth"
}
];

const User = () => {
    const Navigate = useNavigate()
    const Redirect = () => {
        Navigate("/create")
    }


    return (

    <div className="capsule-container">
        <div className="capsule-header">
            <span className="capsule-title">Capsule</span>
            <button className="add-button" aria-label="Add" onClick={Redirect}>
            <span className="plus-icon">+</span>
            </button>
        </div>
        <div className="capsule-list">
        {dummyCapsules.map((capsule, index) => (
            <UserCapsuleCard key={index} {...capsule} />
        ))}
        </div>
    </div>
    );
};

export default User