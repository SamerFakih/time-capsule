import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles.css';
import Button from '../../Shared/Button';
import Input from '../../Shared/Input';



const LoginForm = ({toggle}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()

    const navigate = useNavigate();

    useEffect(() => {
    console.log("DO Something");
    }, [email]);

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

                <Button
                    text={"Login"}
                    onClick={async () => {
                    console.log(email, password);

                    // const res = await axios.post("loginUrl", {
                    //    email,
                    //   password,
                    // });

            if (true) {
              // navigate to dashboard
                navigate("/user");
            } else {
              // display error on the ui
            }
        }}
                />
            </form>
            <p className="signup-link">Don't have an account? <span onClick={toggle}>Sign Up now</span></p>
        </div>
    )
}

export default LoginForm