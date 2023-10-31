import React, { FC, useEffect, useState } from 'react';
import './Stars.css';
import { fillness } from '../../utils';
interface Props {
    size: number;
    fill: fillness;
}
export const StarReview: FC<Props> = ({ size, fill }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={`${size}`}
            height={`${size}`}
            className="filling"
        >
            <g id="_01_align_center">
                {fill == fillness.empty && (
                    <path
                        d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453ZM12,15.346l3.658,2.689-1.4-4.344L17.937,11H13.39L12,6.669,10.61,11H6.062l3.683,2.691-1.4,4.344Z"
                        fill="#B345F7"
                    />
                )}
                {fill == fillness.quarter && (
                    <path
                        d="M 19.467 23.316 L 12 17.828 L 4.533 23.316 L 7.4 14.453 L -0.063 9 H 9.151 L 12 0.122 L 14.849 9 h 9.213 L 16.6 14.453 Z M 12 15.346 l 3.658 2.689 l -1.4 -4.344 L 17.937 11 H 13.39 L 12 6.669 L 10.61 11 H 10 l 0 6 Z"
                        fill="#B345F7"
                    />
                )}
                {fill == fillness.half && (
                    <path
                        d="M 19.467 23.316 L 12 17.828 L 4.533 23.316 L 7.4 14.453 L -0.063 9 H 9.151 L 12 0.122 L 14.849 9 h 9.213 L 16.6 14.453 Z M 12 15.346 l 3.658 2.689 l -1.4 -4.344 L 17.937 11 H 13.39 L 12 6.669 Z"
                        fill="#B345F7"
                    />
                )}
                {fill == fillness.treeQuarters && (
                    <path
                        d="M 19.467 23.316 L 12 17.828 L 4.533 23.316 L 7.4 14.453 L -0.063 9 H 9.151 L 12 0.122 L 14.849 9 h 9.213 L 16.6 14.453 Z M 13.964 16.937 L 15.658 18.035 l -1.4 -4.344 L 17.937 11 H 14 Z"
                        fill="#B345F7"
                    />
                )}
                {fill == fillness.full && (
                    <path
                        d="M 19.467 23.316 L 12 17.828 L 4.533 23.316 L 7.4 14.453 L -0.063 9 H 9.151 L 12 0.122 L 14.849 9 h 9.213 L 16.6 14.453 Z Z"
                        fill="#B345F7"
                    />
                )}
            </g>
        </svg>
    );
};
