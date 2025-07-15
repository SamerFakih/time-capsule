import React, { useState } from "react";
import LoginForm from "../../Component/Auth/LoginForm/index.jsx";
import SignUpForm from "../../Component/Auth/SignupForm/index.jsx";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const switchForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="auth-page">
            <div className="auth-box">
                {isLogin ? (
                    <LoginForm toggle={switchForm} />
                ) : (
                    <SignUpForm toggle={switchForm} />
                )}
            </div>
        </div>
    );
};

export default Auth;

