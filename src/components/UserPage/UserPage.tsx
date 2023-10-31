import React from 'react';
import { Header } from '../Header/Header';
import { WordsList } from '../WordsList/WordsList';
import './UserPage.css';
export const UserPage = () => {
    return (
        <div className="user-page">
            <Header />
            <h1 className="user-page__title">
                Ассоциации&nbsp;<div className="user-page__user">defunct</div>
            </h1>
            <WordsList isLocal={false} />
        </div>
    );
};
