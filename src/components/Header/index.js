import React from 'react'
import styles from './Header.module.sass'
import classNames from 'classnames'
import { ReactComponent as ArrowIcon } from "./assets/arrow.svg";
import { ReactComponent as DoubleDownArrowIcon } from "./assets/doubleDownArrow.svg";
import { ReactComponent as PersonIcon } from "./assets/person.svg";
import PropTypes from "prop-types";

const Header = ({ date, changeDateHandler }) => {
    return (
        <div className={styles.wrapper}>
            <div></div>
            <div className={styles.date}>
                <button className={classNames(styles.changeDateButton, styles.prev)} onClick={() => changeDateHandler(-1)}><ArrowIcon /></button>
                <p className={styles.text}>{`${date.month} ${date.year} г.`}</p>
                <button className={classNames(styles.changeDateButton, styles.next)} onClick={() => changeDateHandler(+1)}><ArrowIcon /></button>
            </div>
            <div className={styles.menusWrapper}>
                <button className={classNames(styles.menu, styles.button)}><DoubleDownArrowIcon /></button>
                <button className={classNames(styles.PersonSettings, styles.button)}><PersonIcon /></button>
            </div>
        </div>
    )
}

export default Header

Header.propTypes = {
    changeDateHandler: PropTypes.func.isRequired,
    date: PropTypes.object.isRequired
}