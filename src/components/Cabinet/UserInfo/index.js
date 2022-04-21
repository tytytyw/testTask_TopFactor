import React from 'react'
import styles from './UserInfo.module.sass'

const UserInfo = () => {
    return (
        <div className={styles.wrapper}>
            <img src='./assets/avatar.png' className={styles.avatar} alt='avatar' />
            <div className={styles.info}>
                <h1 className={styles.name}>Лимаренко Александр Валерьевич</h1>
                <p className={styles.position}>Программист 1С</p>
            </div>
        </div>
    )
}

export default UserInfo