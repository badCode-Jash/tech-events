import React, { FunctionComponent } from 'react';
import cs from 'classnames';
import styles from './button.module.scss';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    type: "primary"
}

const Button: FunctionComponent<ButtonProps> = ({ children, type, ...props }) => {
    return <button {...props} className={cs(styles['button'], styles[`button--outline-${type}`])}>
        {children}
    </button>
}

export default Button;