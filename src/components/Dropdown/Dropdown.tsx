import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import './Dropdown.css';

interface Props {
    setter: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
    popperStyles: React.CSSProperties;
}
export const Dropdown: FC<Props> = ({ setter, popperStyles }) => {
    return createPortal(
        <div className="dropdown" style={popperStyles} ref={(ref) => setter(ref)}>
            <ul className="dropdown__list">
                <li className="dropdown__list-item">
                    <div className="dropdown__list-text">Изменить</div>
                </li>
                <div className="dropdown__list-line"></div>
                <li className="dropdown__list-item">
                    <div className="dropdown__list-text">Удалить</div>
                </li>
            </ul>
        </div>,
        document.getElementById('overlay') as HTMLElement
    );
};
