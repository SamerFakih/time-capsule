import React from 'react';
import './styles.css';
import landing from'../../assets/landing.jpg';
import landing1 from'../../assets/landing1.jpg';
import landing2 from'../../assets/landing2.jpg';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
    <div className="landing-container">
        
        <main className="main-content">
        <h2>Send a Message to the Future</h2>
        <p>Save memories, photos, and thoughts. Open them when the time is right</p>

        <div className="buttons">
            {token ? (
                <button className="btn" onClick={handleLogout}>Logout</button>
            ) : (
                <>
                    <button className="btn" onClick={() => navigate('/login')}>Login</button>
                    <button className="btn" onClick={() => navigate('/signup')}>Signup</button>
                </>
            )}
        </div>

        <section className="section">
            <div className="text-box">
            <h3>What is a time capsule?</h3>
            <p>
                A time capsule refers to any container specifically and intentionally filled with items to inform people
                of the distant future about life in the period it was made...
            </p>
            </div>
            <img src={landing} alt="Time capsule" />
        </section>

        <section className="section reverse">
            <img src={landing1} alt="Family gathering" />
            <div className="text-box">
            <h4>Our Mission</h4>
            <p>
                Virtual Time Capsule is committed to preserving and sharing your thoughts, memories, and ideas with anyone
                in the future.
            </p>
            <h4>Our Vision</h4>
            <p>To create an easy to use system for preserving life's memories throughout the years.</p>
            </div>
        </section>

        <section className="section">
            <div className="text-box">
            <h3>Capture the moment</h3>
            <p>
                Life goes by so fast. Sometimes you will never know the value of a moment until it becomes a memory...
            </p>
            </div>
            <img src={landing2} alt="Family sunset" />
        </section>
        </main>
    </div>
    );
};

export default Landing;

