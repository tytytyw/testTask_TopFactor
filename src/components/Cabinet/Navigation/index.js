import React from 'react'
import styles from './Navigation.module.sass'
import Link from './Link'

const Navigation = () => {
    const buttons = [
        { iconSrc: './assets/icons/map.svg', text: 'Карта целей', link: 'https://www.google.com/' },
        { iconSrc: './assets/icons/smart.svg', text: 'SMART Задачи', link: 'https://www.google.com/' },
        { iconSrc: './assets/icons/evaluations.svg', text: 'Оценки', link: 'https://www.google.com/' },
        { iconSrc: './assets/icons/messages.svg', text: 'Сообщения', link: 'https://www.google.com/' },
        { iconSrc: './assets/icons/report.svg', text: 'Отчеты', link: 'https://www.google.com/' },
        { iconSrc: './assets/icons/bonus.svg', text: 'Премия', link: 'https://www.google.com/' },
    ]
    return (
        <div className={styles.wrapper}>
            {buttons.map(button => <Link key={button.text} content={button} />)}
        </div>
    )
}

export default Navigation