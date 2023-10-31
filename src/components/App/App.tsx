import React from 'react';
import { Header } from '../Header/Header';
import { WordsList } from '../WordsList/WordsList';
import { SigningPage } from '../SigningPage/SigningPage';
import { RegisterPage } from '../RegisterPage/RegisterPage';

export const App = () => {
    return (
        <>
            <Header />
            <WordsList />
        </>
    );
};
