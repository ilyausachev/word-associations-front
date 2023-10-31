import React, { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './ModalCreateWord.css';

interface Props {
    isOpen: boolean;
    onClose: VoidFunction;
}

export const ModalCreateWord: FC<Props> = ({ isOpen, onClose }) => {
    const [word, setWord] = useState('');
    const [association, setAssociation] = useState('');
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', onClose);
        }
        return () => {
            document.removeEventListener('mousedown', onClose);
        };
    }, [isOpen]);

    return createPortal(
        isOpen && (
            <div className="modal-create">
                <div className="modal-create__content" onMouseDown={(e) => e.stopPropagation()}>
                    <div className="modal-create__title">Добавьте слово</div>
                    <form className="modal-create__search-form">
                        <input
                            type="text"
                            name="word"
                            required={true}
                            className="modal-create__word-input"
                            placeholder="Введите слово"
                            maxLength={30}
                            value={word}
                            onChange={(event) => setWord(event.currentTarget.value)}
                        />
                        <textarea
                            rows={7}
                            cols={30}
                            required={true}
                            name="association"
                            className="modal-create__association-input"
                            placeholder="Введите ассоциацию"
                            maxLength={140}
                            value={association}
                            onChange={(event) => setAssociation(event.currentTarget.value)}
                        />
                        <div className="modal-create__button-container">
                            <button type="submit" className="modal-create__button">
                                Добавить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        ),
        document.getElementById('overlay') as HTMLElement
    );
};
