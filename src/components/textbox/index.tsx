import React, { FunctionComponent } from 'react';
import cs from 'classnames';
import styles from './textbox.module.scss';

const Textbox: FunctionComponent<React.HTMLProps<HTMLInputElement>> = (props) => {
    return <input {...props} className={cs(styles["textbox"], props.className)} type="text" />
}

export default Textbox;