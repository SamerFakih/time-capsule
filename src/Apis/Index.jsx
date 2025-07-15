import { Routes, Route} from 'react-router-dom';
import React from 'react';
import LoginForm from '../Component/Auth/LoginForm/index.jsx';
import SignupForm from '../Component/Auth/SignupForm/index.jsx';

const Apis = () => {
    return (
    <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
    </Routes>
    )
}

export default Apis