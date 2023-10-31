import React from 'react';
import { Header } from '../Header/Header';
import { WordsList } from '../WordsList/WordsList';
import './SearchPage.css';
export const SearchPage = () => {
    return (
        <div className="search-page">
            <Header />
            <h1 className="search-page__title">
                Ассоциации по запросу:&nbsp;<div className="search-page__word">&quot;Spectacular&quot;</div>
            </h1>
            <WordsList isLocal={false} />
        </div>
    );
};
