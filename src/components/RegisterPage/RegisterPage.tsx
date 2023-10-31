import React, { useState } from 'react';
import './RegisterPage.css';

export const RegisterPage = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordSecond, setPasswordSecond] = useState('');
    return (
        <div className="register">
            <div className="register__content">
                <div className="register__title">Регистрация</div>
                <form className="register__form">
                    <input
                        type="text"
                        name="login"
                        required={true}
                        className="register__login-input"
                        placeholder="Придумайте логин"
                        maxLength={20}
                        value={login}
                        onChange={(event) => setLogin(event.currentTarget.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        required={true}
                        className="register__password-input"
                        placeholder="Придумайте пароль"
                        maxLength={20}
                        value={password}
                        onChange={(event) => setPassword(event.currentTarget.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        required={true}
                        className="register__password-input"
                        placeholder="Повторите пароль"
                        maxLength={20}
                        value={passwordSecond}
                        onChange={(event) => setPasswordSecond(event.currentTarget.value)}
                    />
                    <div className="register__button-container">
                        <button type="submit" className="register__button">
                            Регистрация
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
