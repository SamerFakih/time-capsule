import React from 'react'
import './styles.css';
import Button from '../../Shared/Button';
import Input from '../../Shared/Input';

const SignupForm = () => {
    return (
    <div className="signup-container">
            <h2>Sign Up</h2>
            <form className="signup-form">
                <Input label={"Full Name"}
                        type={"text"}
                        name={"fullName"}
                        placeholder={"Type your full name"}
                        required={true}
                />
                <Input label={"Email"}
                        type={"text"}
                        name={"email"}
                        placeholder={"Type your email"}
                        required={true}
                />
                
                <Input label={"Password"}
                        type={"password"}
                        name={"password"}
                        placeholder={"Type your password"}
                        required={true}
                />

                <Button
                    text={"Sign Up"}
                    onClick={() => { /* Handle sign up */ }}
                />
            </form>
            <p className="login-link">Already have an account? <a href="/login">Log In</a></p>
        </div>


    )
}

export default SignupForm