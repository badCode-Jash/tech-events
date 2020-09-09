import React, { FunctionComponent } from 'react'
import styles from './styles/pager.module.scss';
import Button from '../button/button';
import cs from 'classnames';
import { Direction } from '.';

interface PagerElementProps {
    page?: number,
    isDisabled?: boolean,
    direction?: Direction,
    isSelected: boolean,
    onClick?: (pageOrDirection?: number | Direction) => void
}

const PagerElement: FunctionComponent<PagerElementProps> = ({ direction, page, isSelected, isDisabled, onClick }) => {
    const text = page || direction || "...";
    const classModifiers = {
        'page': 'middle',
        '<<': 'left',
        '>>': 'right',
        '<': 'left',
        '>': 'right'
    }

    const buttonModifier = classModifiers[direction || 'page'];

    const _onClick = () => onClick && onClick(page || direction);

    const _isDisabled = () => {
        if(text === "...") return true;

        return isDisabled;
    }

    return <div className={styles["pager__element"]}>
        <Button
            disabled={_isDisabled()}
            filled={isSelected}
            onClick={_onClick}
            className={cs(styles["pager__element__button"], styles[`pager__element__button--${buttonModifier}`])} type="primary">
            {text}
        </Button>
    </div>
}

export default PagerElement;