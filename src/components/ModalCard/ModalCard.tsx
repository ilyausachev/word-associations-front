import React, { FC, useEffect, useState } from 'react';
import './ModalCard.css';
import { createPortal } from 'react-dom';
import { Stars } from '../Stars/Stars';
import { useAdaptive } from '../../hooks';
import dots from '../../icons/dots.svg';
import { Dropdown } from '../Dropdown/Dropdown';
import { usePopper } from 'react-popper';

interface Props {
    isOpen: boolean;
    isLocal: boolean;
    onClose: VoidFunction;
}

export const ModalCard: FC<Props> = ({ isOpen, isLocal, onClose }) => {
    const { isMobile } = useAdaptive();
    const [isDrop, setIsDrop] = useState(false);
    const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
    const { styles } = usePopper(referenceElement, popperElement, {
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [-40, 10],
                },
            },
        ],
    });
    const eventOnMouseDown = () => {
        onClose();
        setIsDrop(false);
    };
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', eventOnMouseDown);
        }
        return () => {
            document.removeEventListener('mousedown', eventOnMouseDown);
        };
    }, [isOpen]);

    return createPortal(
        isOpen && (
            <>
                <div className="modal-card">
                    <div className="modal-card__content" onMouseDown={(e) => e.stopPropagation()}>
                        <div className="modal-card__word-container">
                            <div className="modal-card__word">Spectacular</div>
                            {isLocal && (
                                <div className="modal-card__word-dots" ref={(ref) => setReferenceElement(ref)}>
                                    <img onClick={() => setIsDrop(!isDrop)} src={dots} alt="dots" />
                                </div>
                            )}
                        </div>
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
                {isDrop && <Dropdown popperStyles={styles.popper} setter={setPopperElement} />}
            </>
        ),
        document.getElementById('overlay') as HTMLElement
    );
};
