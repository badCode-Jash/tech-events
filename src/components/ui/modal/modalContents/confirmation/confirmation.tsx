import React, { FunctionComponent } from 'react';
import Button from '../../../button/button';
import styles from './confirmation.module.scss';

interface ConfirmationModalProps {
    text: string,
    onSuccess: () => void,
    onCancel: () => void
}

const ConfirmationModalContent: FunctionComponent<ConfirmationModalProps> = ({ text, onCancel, onSuccess }) => {
    return <div className={styles["confirmation"]}>
        <div className={styles["confirmation__text-container"]}>
            <span>{text}</span>
        </div>
        <div className={styles["confirmation__button-container"]}>
            <Button onClick={onSuccess} filled type="success">YES</Button>
            <Button onClick={onCancel} filled type="default">NO</Button>
        </div>
    </div>
}

export default ConfirmationModalContent;