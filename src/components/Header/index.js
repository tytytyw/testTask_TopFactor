import React from 'react'
import styles from './Header.module.sass'
import classNames from 'classnames'
import { ReactComponent as ArrowIcon } from "./assets/arrow.svg";
import { ReactComponent as DoubleDownArrowIcon } from "./assets/doubleDownArrow.svg";
import { ReactComponent as PersonIcon } from "./assets/person.svg";

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div></div>
            <div className={styles.date}>
                <button className={classNames(styles.changeDateButton, styles.prev)}><ArrowIcon /></button>
                <p className={styles.text}>Апрель 2021 г.</p>
                <button className={classNames(styles.changeDateButton, styles.next)}><ArrowIcon /></button>
            </div>
            <div className={styles.menusWrapper}>
                <button className={classNames(styles.menu, styles.button)}><DoubleDownArrowIcon /></button>
                <button className={classNames(styles.PersonSettings, styles.button)}><PersonIcon /></button>
            </div>
        </div>
    )
}

export default Header