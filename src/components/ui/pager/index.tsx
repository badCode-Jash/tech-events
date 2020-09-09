import React, { FunctionComponent } from 'react'
import styles from './styles/pager.module.scss';
import PagerElement from './pagerElement';
import { PAGINATION_MINIMUM_FETCH_VALUE } from '../../../config';
import { isNumber } from 'lodash';

interface PagerProps {
    count: number,
    currentPage: number,
    onPageChanged: (page: number) => void
}

export type Direction = "<" | ">" | "<<" | ">>";

const Pager: FunctionComponent<PagerProps> = ({ count, currentPage, onPageChanged }) => {


    const countOfPagerElement = Math.round((count - 1) / PAGINATION_MINIMUM_FETCH_VALUE);

    if (!count || countOfPagerElement < 2) return <></>

    const arrays = createLeftAndRightSideArray(countOfPagerElement, currentPage);
    const isItemSelected = (item: number) => currentPage === item;

    const pagerElementClicked = (pageOrDirection?: number | Direction) => {
        switch (pageOrDirection) {
            case "<": onPageChanged(currentPage - 1);
                break;
            case ">": onPageChanged(currentPage + 1);
                break;
            case "<<": onPageChanged(1);
                break;
            case ">>": onPageChanged(countOfPagerElement);
                break;
            default:
                if (isNumber(pageOrDirection))
                    onPageChanged(pageOrDirection);
                break;
        }
    };

    const reachedEnd = currentPage === countOfPagerElement;
    const reachedBeginning = currentPage === 1;

    function renderPagerElements(arr: number[]) {
        if (!arr.length) return <></>;

        return arr.map((item, index) => {
            return <PagerElement
                key={pagerElementKeyExtractor(item, index)}
                onClick={pagerElementClicked}
                isSelected={isItemSelected(item)}
                page={item} />
        })
    }

    function renderDirectionPagerElements(direction: Direction, isDisabled: boolean) {
        return <PagerElement
            isDisabled={isDisabled}
            onClick={pagerElementClicked}
            isSelected={false}
            direction={direction} />
    }

    return <div className={styles["pager"]}>
        {renderDirectionPagerElements("<<", reachedBeginning)}
        {renderDirectionPagerElements("<", reachedBeginning)}

        {renderPagerElements(arrays.left)}

        {!!arrays.right.length && <PagerElement isSelected={false} />}

        {renderPagerElements(arrays.right)}

        {renderDirectionPagerElements(">", reachedEnd)}
        {renderDirectionPagerElements(">>", reachedEnd)}
    </div>
}

function pagerElementKeyExtractor(item: number, index: number) {
    return `pager-element-${item}-${index}`;
}

function createLeftAndRightSideArray(countOfPagerElement: number, currentPage: number) {
    let leftSizeArray: number;
    let rightSizeArray: number;

    if (countOfPagerElement === 0) return {
        left: [],
        right: []
    }

    if (countOfPagerElement < 7) {
        return {
            left: new Array(countOfPagerElement).fill(1).map((_, index) => (index + 1)),
            right: []
        }
    }

    //TODO: Refactor and move numbers to config file
    leftSizeArray = currentPage > (countOfPagerElement - 6) ? 2 : 5;
    rightSizeArray = leftSizeArray === 2 ? 5 : 2;


    return {
        left: new Array(leftSizeArray).fill(1).map((_, index) => {
            var item = currentPage + (index - 2);

            if (leftSizeArray === 2) return index + 1;

            return currentPage < leftSizeArray ? index + 1 : item;
        }),
        right: new Array(rightSizeArray).fill(1).map((_, index) => {
            var item = (countOfPagerElement + 1) - (rightSizeArray - index);
            return item;
        })
    };
}

export default Pager;