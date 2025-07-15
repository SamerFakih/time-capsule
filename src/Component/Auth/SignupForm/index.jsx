import React from 'react'
import './styles.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '../../Shared/Button';
import Input from '../../Shared/Input';

const SignupForm = ({toggle}) => {
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        console.log("DO Something");
    }, [fullName]);

    return (
    <div className="signup-container">
            <h2>Sign Up</h2>
            <form className="signup-form">
                <Input label={"Full Name"}
                        type={"text"}
                        name={"fullName"}
                        placeholder={"Type your full name"}
                        required={true}
                        onChange={(e) => setFullName(e.target.value)}
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

                <Button
                    text={"Sign Up"}
                    onClick={async () => {
                        console.log(fullName, email, password);

                        // const res = await axios.post("signupUrl", {
                        //     fullName,
                        //     email,
                        //     password,
                        // });

                        if (true) {
                            // navigate to dashboard
                            navigate("/dashboard");
                        } else {
                            // display error on the ui
                        }
                    }}
                />
            </form>
            <p className="login-link">Already have an account? <span onClick={toggle}>Log In</span></p>
        </div>


    )
}

export default SignupForm