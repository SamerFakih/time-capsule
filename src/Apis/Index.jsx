import { Routes, Route} from 'react-router-dom';
import React from 'react';
import Auth from '../Pages/Auth/index.jsx';
import Landing from '../Pages/Landing/index.jsx';
import Navbar from '../Component/Shared/Navbar/index.jsx';
import User from '../Pages/User/index.jsx';
import CreateCapsule from '../Pages/CreateCapsule/index.jsx';
import PublicPage from '../Pages/Public/index.jsx';

const Apis = () => {
    return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/login" element={<Auth signup={true} />} />
            <Route path="/signup" element={<Auth signup={false} />} />
            <Route path="/user" element={<User />} />
            <Route path='/create' element={<CreateCapsule />} />
            <Route path='/public' element = {<PublicPage/>} />
        </Routes>
    </>
    )
}

export default Apis