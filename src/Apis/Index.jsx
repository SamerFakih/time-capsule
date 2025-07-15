import { Routes, Route} from 'react-router-dom';
import React from 'react';
import Auth from '../Pages/Auth/index.jsx';

const Apis = () => {
    return (
    <Routes>
        <Route path="/auth" element={<Auth />} />
    </Routes>
    )
}

export default Apis