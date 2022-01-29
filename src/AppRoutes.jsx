import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Register from './components/Register'

export default function AppRoutes() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="" element={<Main />} />
                    <Route exact path="/register" element={<Register />} />
                </Routes>
            </Router>
        </>
    );
}