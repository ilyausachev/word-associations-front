import React, { FC, FormEvent, useState } from 'react';
import './Header.css';
import search from '../../icons/search.svg';
import login from '../../icons/login.svg';

export const Header: FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!searchValue.trim().length) {
            return;
        }
    };

    return (
        <header className="header">
            <div className="header__container">
                <nav className="header__navigation">
                    <a href="#" className="header__navigation-link">
                        Associations
                    </a>
                </nav>

                <div className="header__search">
                    <form className="header__search-form" onSubmit={onSubmit}>
                        <input
                            type="search"
                            className="header__search-input"
                            placeholder="Поиск ассоциации"
                            maxLength={40}
                            value={searchValue}
                            onChange={(event) => setSearchValue(event.currentTarget.value)}
                        />
                        <button type="submit" className="header__search-button">
                            <img className="header__search-image" src={search} alt="search" />
                        </button>
                    </form>
                </div>
                <div className="header__login">
                    <img className="header__login-image" src={login} alt="login" />
                </div>
            </div>
            <div className="header__buttom-line"></div>
        </header>
    );
};
