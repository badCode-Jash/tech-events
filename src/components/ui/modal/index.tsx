import React, { FunctionComponent, forwardRef, useImperativeHandle, useState } from 'react';
import styles from './styles/modal.module.scss';
import cs from 'classnames';
import ConfirmationModalContent from './modalContents/confirmation/confirmation';

interface ModalProps {
    hideModal: () => void,
    showModal: (children: React.ReactNode) => void
}

const ModalContainer = forwardRef((_, ref) => {

    const [content, setContent] = useState<React.ReactNode>(null);

    useImperativeHandle(ref, () => ({
        showModal: (children: React.ReactNode) => setContent(children),
        hideModal: () => setContent(null)
    }))

    const _handleWrapperClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(e.target === e.currentTarget)
            hideModal();
    }

    if (!content) return <></>;

    return <div onClick={_handleWrapperClick} className={styles["modal-wrapper"]}>
        <div className={cs(styles["modal"], styles["fadeIn"],  styles["fadeOut"])}>
            {content}
        </div>
    </div>
})


const modalRef = React.createRef<ModalProps>();
const Modal = () => <ModalContainer ref={modalRef} />

export const hideModal = () => {
    document.body.style.overflow = "auto";
    modalRef?.current?.hideModal();
};

export const showModal = (children: React.ReactNode) => {
    document.body.style.overflow = "hidden";
    modalRef?.current?.showModal(children);
};

export const showConfirmationModal = (text: string, onSuccess: () => void, onCancel?: () => void) => {
    showModal(<ConfirmationModalContent
        onSuccess={onSuccess}
        onCancel={onCancel || hideModal}
        text={text} />)
}

export default Modal;