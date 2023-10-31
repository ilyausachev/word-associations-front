import React, { useState } from 'react';
import './SigningPage.css';

export const SigningPage = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="signing">
            <div className="signing__content">
                <div className="signing__title">Вход</div>
                <form className="signing__form">
                    <input
                        type="text"
                        name="login"
                        required={true}
                        className="signing__login-input"
                        placeholder="Введите логин"
                        maxLength={20}
                        value={login}
                        onChange={(event) => setLogin(event.currentTarget.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        required={true}
                        className="signing__password-input"
                        placeholder="Введите пароль"
                        maxLength={20}
                        value={password}
                        onChange={(event) => setPassword(event.currentTarget.value)}
                    />
                    <div className="signing__button-container">
                        <button type="submit" className="signing__button">
                            Войти
                        </button>
                    </div>
                </form>
                <div className="singing__reg">Регистрация</div>
            </div>
        </div>
    );
};
