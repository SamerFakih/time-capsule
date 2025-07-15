import React from 'react'
import './styles.css';
import Button from '../../Shared/Button';
import Input from '../../Shared/Input';



const LoginForm = () => {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form">
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
                    text={"Login"}
                    onClick={() => { /* Handle login */ }}
                />
            </form>
            <p className="signup-link">Don't have an account? <a href="/signup">Sign Up now</a></p>
        </div>
    )
}

export default LoginForm