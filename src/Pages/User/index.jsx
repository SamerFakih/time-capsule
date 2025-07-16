import React from 'react'
import "./styles.css"
import { useNavigate } from 'react-router-dom';

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
    </div>
    );
};

export default User