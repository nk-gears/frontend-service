/* eslint-disable */

import React from 'react';
import EscapeKeyOverlay from 'es6!./escapeKeyOverlay';
import { Transition } from 'react-transition-group';
import { isNotEmptyObject } from 'base/commonHelpers';

const ModalComponent = ({ customStyle, className, modalIdx, customPosition, children }) => (
    <div
		className={`generic-modal ${!customPosition ? 'central-modal' : ''}`}
        style={{
            ...customStyle,
        }}
        className={className}
        modalIdx={modalIdx}
        customPosition={customPosition}
    >
        {children}
    </div>
)

const GenericModal = ({ closeModal, children, isCrossShown, style, transitionStyles, overrideBg, className, escapeOverlay, modalIdx, customPosition }) => [
    isNotEmptyObject(transitionStyles) ? <Transition in={true} timeout={0}>
        {state => (
            <ModalComponent
                customStyle={{
                    ...style,
                    ...transitionStyles[state],
                }}
                className={className}
                modalIdx={modalIdx}
                customPosition={customPosition}
                children={children}
            />
        )}
    </Transition> : <ModalComponent
            customStyle={{
                ...style,
            }}
            className={className}
            modalIdx={modalIdx}
            customPosition={customPosition}
            children={children}
        />,
    <EscapeKeyOverlay
        bg
        z={(modalIdx + 999) || 1000}
        overrideBg={overrideBg}
        {...escapeOverlay === false ? {} : {
            overlayClick: () => closeModal(),
            escapePressed: () => closeModal(),
        }}
    />
];

export default GenericModal;
