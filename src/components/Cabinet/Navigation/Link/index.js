import React from 'react'
import PropTypes from "prop-types";
import styles from './Link.module.sass'

const Link = ({ content }) => {
    return (
        <div className={styles.wrapper}>
            <a href={content.link} className={styles.content}>
                <img className={styles.icon} src={content.iconSrc} alt={content.text} />
                <p className={styles.text}>{content.text}</p>
            </a>
        </div>
    )
}

export default Link

Link.propTypes = {
    content: PropTypes.object.isRequired,
}