import React from 'react';
import { Header } from '../Header/Header';
import { WordsList } from '../WordsList/WordsList';
import './LKPage.css';
export const LKPage = () => {
    return (
        <div className="lk-page">
            <Header />
            <h1 className="lk-page__title">Ваши ассоциации</h1>
            <WordsList isLocal={true} />
        </div>
    );
};
