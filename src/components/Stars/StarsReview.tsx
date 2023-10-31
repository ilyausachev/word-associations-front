import React, { FC } from 'react';
import { fillness } from '../../utils';
import { StarReview } from './StarReview';

interface Props {
    size: number;
    rating: number;
}
const determineFillness = (x: number): fillness => {
    let fill = fillness.empty;
    if (x == 1) {
        fill = fillness.quarter;
    } else if (x == 2) {
        fill = fillness.half;
    } else if (x == 3) {
        fill = fillness.treeQuarters;
    } else if (x == 4) {
        fill = fillness.full;
    }
    return fill;
};
const crateArrayFillness = (x: number): fillness[] => {
    const integer = Math.floor(x);
    const fraction = Math.round((x - Math.floor(x)) * 4);
    const fill = [];
    for (let i = 0; i < 5; i++) {
        if (i < integer) {
            fill.push(fillness.full);
        } else if (i == integer) {
            fill.push(fraction);
        } else {
            fill.push(fillness.empty);
        }
    }
    return fill;
};
export const StarsReview: FC<Props> = ({ size, rating }) => {
    const array = [0, 1, 2, 3, 4];
    const fillArray = crateArrayFillness(rating);
    return (
        <div className="stars">
            {array.map((x) => (
                <StarReview key={x} size={size} fill={fillArray[x]} />
            ))}
        </div>
    );
};
