import React, { FC, useEffect, useState } from 'react';
import { Star } from './Star';
import { fillness } from '../../utils';

interface Props {
    size: number;
}
const array = [1, 2, 3, 4, 5];
export const Stars: FC<Props> = ({ size }) => {
    const [state, setState] = useState(0);
    const array = [1, 2, 3, 4, 5];

    return (
        <div className="stars">
            {array.map((x) => (
                <Star
                    size={size}
                    key={x}
                    fill={x > state ? fillness.empty : fillness.full}
                    onHover={() => setState(x)}
                    onOut={() => setState(0)}
                />
            ))}
        </div>
    );
};
