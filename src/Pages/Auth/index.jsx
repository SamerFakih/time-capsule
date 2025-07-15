import React, { useState } from "react";
import LoginForm from "../../Component/Auth/LoginForm/index.jsx";
import SignUpForm from "../../Component/Auth/SignupForm/index.jsx";

const Auth = ({signup=true}) => {
    const [isLogin, setIsLogin] = useState(signup);

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

