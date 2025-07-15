import { Routes, Route} from 'react-router-dom';
import React from 'react';
import Auth from '../Pages/Auth/index.jsx';
import Landing from '../Pages/Landing/index.jsx';
import Navbar from '../Component/Shared/Navbar/index.jsx';

const Apis = () => {
    return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/login" element={<Auth signup={true} />} />
            <Route path="/signup" element={<Auth signup={false} />} />
        </Routes>
    </>
    )
}

export default Apis