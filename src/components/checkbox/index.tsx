import React, { FunctionComponent } from 'react';
import cs from 'classnames';
import styles from './checkbox.module.scss';

const Checkbox: FunctionComponent<React.HTMLProps<HTMLInputElement>> = (props) => {
    return <label className={props.className} htmlFor={props.id}>
        <input id={props.id} type="checkbox" className={styles["checkbox"]}></input>
        <span>{props.children}</span>
    </label>
}

export default Checkbox;