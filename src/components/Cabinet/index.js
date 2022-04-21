import React from 'react'
import styles from './Cabinet.module.sass'
import UserInfo from './UserInfo'

const Cabinet = () => {
    return (
        <div className={styles.wrapper}>
            <UserInfo />
        </div>
    )
}

export default Cabinet