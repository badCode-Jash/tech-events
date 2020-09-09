import React, { FunctionComponent } from 'react';
import cs from 'classnames';
import styles from './button.module.scss';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    type: "primary" | "success" | "default" | "danger",
    filled?: boolean
}

const Button: FunctionComponent<ButtonProps> = ({ children, filled, type, ...props }) => {
    const classNames = cs(
        styles['button'],
        styles[`button--${filled ? 'filled' : 'outline'}-${type}`],
        props.className);
    
    return <button {...props} className={classNames}>
        {children}
    </button>
}

export default Button;