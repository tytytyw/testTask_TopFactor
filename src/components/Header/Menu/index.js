import React, { useState, useEffect } from 'react'
import styles from './Menu.module.sass'
import PropTypes from "prop-types";
import classNames from 'classnames';

const Menu = ({ menuItems, menuName }) => {
    useEffect(() => {
        setChangedItems(menuItems)
    }, [menuItems])

    const [changedItems, setChangedItems] = useState(menuItems)
    const menuItemClickHandler = (index) =>
        setChangedItems(prevMenuitems => prevMenuitems.map((item, i) => i === index ? { ...item, text: 'кликнуто' } : item))
    return (
        <div className={classNames(styles.wrapper, styles[menuName])}>
            {changedItems?.map((menuItem, i) => (
                <div className={styles.menuItem} key={i} onClick={() => { menuItemClickHandler(i); menuItem.callback(menuItem.text) }}>{menuItem.text}</div>
            ))}
        </div>
    )
}

export default Menu

Menu.propTypes = {
    menuItems: PropTypes.array.isRequired,
    menuName: PropTypes.string
}