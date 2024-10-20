import React from 'react';
import './PopUp.scss';

export const PopUp = ({ isOpen, onClose, children }) => {

    return (
        <>
            {
                <div className="popup">
                    <div className="popup-wrapper">
                        <div className="popup-content">
                            <button className="popup-close-button" onClick={() => onClose()}><span></span></button>
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>
    );
};
