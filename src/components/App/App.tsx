import React from 'react';
import { Header } from '../Header/Header';
import { SigningPage } from '../SigningPage/SigningPage';
import { RegisterPage } from '../RegisterPage/RegisterPage';
import { UserPage } from '../UserPage/UserPage';
import { SearchPage } from '../SearchPage/SearchPage';
import { LKPage } from '../LKPage/LKPage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/search/:word" element={<SearchPage />} />
            <Route path="/user/:user" element={<UserPage />} />
            <Route path="/lk" element={<LKPage />} />
            <Route path="/login" element={<SigningPage />} />
            <Route path="/login/new" element={<RegisterPage />} />
        </Routes>
    );
};
