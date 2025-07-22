import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles.css';
import Button from '../../Shared/Button';
import Input from '../../Shared/Input';
import request from '../../../Apis/requests';


const LoginForm = ({toggle}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
    console.log("Email updated:", email);
    }, [email]);

    const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
    const res = await request({
        url: 'guest/login',
        method: 'post',
        data: { email, password },
        });
    localStorage.setItem('token', res.token);
    if (res) {
        navigate("/");
    } else {
        setError("Invalid email or password");
    }
    } catch (err) {
        setError("Login failed. Please try again.");
    }
};

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form">
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

                <Button onClick={handleLogin}
                text={"Login"} />
            </form>
            <p className="signup-link">Don't have an account? <span onClick={toggle}>Sign Up now</span></p>
        </div>
    )
}

export default LoginForm