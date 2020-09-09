import React, { FunctionComponent } from 'react';
import styles from './checkbox.module.scss';

interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
    labelClassName?: string
}

const Checkbox: FunctionComponent<CheckboxProps> = (props) => {
    const { labelClassName, children, ...defaultProps } = props;
    return <label className={labelClassName} htmlFor={defaultProps.id}>
        <input {...defaultProps} type="checkbox" className={styles["checkbox"]}></input>
        <span>{children}</span>
    </label>
}

export default Checkbox;