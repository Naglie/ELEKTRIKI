import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

import LandingPage from '../pages/LandingPage';
import Login from './Login';

export default function Content() {
    return (
        <main className='flex-shrink-0'>
            <Router>
                <Routes>
                    <Route exact path='/' element={<LandingPage />} />
                    {/* <Route path='/login' element={<Login />} /> */}
                </Routes>
            </Router>
        </main>
    )
}