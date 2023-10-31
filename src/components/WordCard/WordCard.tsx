import React, { FC } from 'react';
import './WordCard.css';
import { StarsReview } from '../Stars/StarsReview';
interface Props {
    onClick: VoidFunction;
}
export const WordCard: FC<Props> = ({ onClick }) => {
    return (
        <div className="card" onClick={() => onClick()}>
            <div className="card__content">
                <div className="card__word">spectacular</div>
                <div className="card__word-association">
                    Спектакль был действительно впечатляющим,мы ходили на него всей семьей и много чего узнали а него
                    всей семьей и много чего узнали
                </div>
                <div className="card__info info">
                    <div className="info__author">defucnt</div>
                    <div className="info__stars">
                        <StarsReview size={24} rating={3.29} />
                    </div>
                </div>
            </div>
        </div>
    );
};
