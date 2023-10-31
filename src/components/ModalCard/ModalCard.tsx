import React, { FC, useEffect } from 'react';
import './ModalCard.css';
import { createPortal } from 'react-dom';
import { Stars } from '../Stars/Stars';
import { useAdaptive } from '../../hooks';

interface Props {
    isOpen: boolean;
    onClose: VoidFunction;
}

export const ModalCard: FC<Props> = ({ isOpen, onClose }) => {
    const { isMobile } = useAdaptive();
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
            <div className="modal-card">
                <div className="modal-card__content" onMouseDown={(e) => e.stopPropagation()}>
                    <div className="modal-card__word">spectacular</div>
                    <div className="modal-card__word-association">
                        Спектакль был действительно впечатляющим,мы ходили на него всей семьей и много чего узнали а
                        него всей семьей и много че узнали
                    </div>
                    <div className="modal-card__info info-card">
                        <div className="info-card__author">defucnt</div>
                        <div className="info-card__stars">
                            <Stars size={isMobile ? 24 : 40} />
                        </div>
                    </div>
                </div>
            </div>
        ),
        document.getElementById('overlay') as HTMLElement
    );
};
