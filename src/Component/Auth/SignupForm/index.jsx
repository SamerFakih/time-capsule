import React from 'react'
import './styles.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '../../Shared/Button';
import Input from '../../Shared/Input';
import request from '../../../Apis/requests';

const SignupForm = ({toggle}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        console.log("email:",email);
        },[email]);

    const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
        const res = await request({
        url: 'guest/register',
        method: 'post',
        data: { name, email, password },
        });
    localStorage.setItem('token', res.token);
    if (res) {
        navigate("/user");
    } else {
        setError("Invalid email or password");
    }
    } catch (err) {
        setError("Login failed. Please try again.");
    }

};

    return (
    <div className="signup-container">
            <h2>Sign Up</h2>
            <form className="signup-form">
                <Input label={"Full Name"}
                        type={"text"}
                        name={"name"}
                        placeholder={"Type your full name"}
                        required={true}
                        onChange={(e) => setName(e.target.value)}
                />
                <Input label={"Email"}
                        type={"text"}
                        name={"email"}
                        placeholder={"Type your email"}
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                />
                
                <Input label={"Password"}
                        type={"password"}
                        name={"password"}
                        placeholder={"Type your password"}
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="error">{error}</p>}

                <Button
                    text={"Sign Up"}
                    onClick={handleSignup}
                />
            </form>
            <p className="login-link">Already have an account? <span onClick={toggle}>Log In</span></p>
        </div>


    )
}

export default SignupForm