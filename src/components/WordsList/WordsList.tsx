import React, { useState } from 'react';
import './WordsList.css';
import { WordCard } from '../WordCard/WordCard';
import { ModalCard } from '../ModalCard/ModalCard';
import { ModalCreateWord } from '../ModalCreateWord/ModalCreateWord';

export const WordsList = () => {
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
            <ModalCard isOpen={isModal} isLocal={true} onClose={() => setIsModal(false)} />
            {/*<ModalCreateWord isOpen={isCreateModal} onClose={() => setIsCreateModal(false)} />*/}
        </>
    );
};
