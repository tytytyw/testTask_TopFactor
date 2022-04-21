import React, { useState } from 'react'
import styles from './Header.module.sass'
import classNames from 'classnames'
import { ReactComponent as ArrowIcon } from "./assets/arrow.svg";
import { ReactComponent as DoubleDownArrowIcon } from "./assets/doubleDownArrow.svg";
import { ReactComponent as PersonIcon } from "./assets/person.svg";
import PropTypes from "prop-types";
import { menuItems } from '../../collections'
import Menu from './Menu';


const Header = ({ date, changeDateHandler }) => {
    const [showMenu, setShowMenu] = useState(null)
    const onMenuHandler = (name) => setShowMenu(prevShowMenu => prevShowMenu?.name !== name ? { name, menuItems: menuItems[name] } : null)

    return (
        <div className={styles.wrapper} onMouseLeave={() => setShowMenu(null)}>
            <div></div>
            <div className={styles.date}>
                <button className={classNames(styles.changeDateButton, styles.prev)} onClick={() => changeDateHandler(-1)}>
                    <ArrowIcon />
                </button>
                <p className={styles.text}>{`${date.month} ${date.year} г.`}</p>
                <button className={classNames(styles.changeDateButton, styles.next)} onClick={() => changeDateHandler(+1)}>
                    <ArrowIcon />
                </button>
            </div>
            <div className={styles.menusWrapper}>
                <button className={classNames(styles.menu, styles.button)} onClick={() => onMenuHandler('menu')}>
                    <DoubleDownArrowIcon />
                </button>
                <button className={classNames(styles.PersonSettings, styles.button)} onClick={() => onMenuHandler('person')}>
                    <PersonIcon />
                </button>
            </div>
            {showMenu?.name && <Menu menuItems={showMenu?.menuItems} menuName={showMenu?.name} />}
        </div>
    )
}

export default Header

Header.propTypes = {
    changeDateHandler: PropTypes.func.isRequired,
    date: PropTypes.object.isRequired
}