import React, { FC, useState } from 'react';
import './WordsList.css';
import { WordCard } from '../WordCard/WordCard';
import { ModalCard } from '../ModalCard/ModalCard';

interface Props {
    isLocal: boolean;
}

export const WordsList: FC<Props> = ({ isLocal }) => {
    const [isModal, setIsModal] = useState(false);
    const [isCreateModal, setIsCreateModal] = useState(true);
    return (
        <>
            <div className="template">
                <WordCard onClick={() => setIsModal(true)} />
                <WordCard onClick={() => setIsModal(true)} />
                <WordCard onClick={() => setIsModal(true)} />
                <WordCard onClick={() => setIsModal(true)} />
            </div>
            <ModalCard isOpen={isModal} isLocal={isLocal} onClose={() => setIsModal(false)} />
            {/*<ModalCreateWord isOpen={isCreateModal} onClose={() => setIsCreateModal(false)} />*/}
        </>
    );
};
