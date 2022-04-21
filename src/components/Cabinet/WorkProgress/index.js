import React, { useState } from 'react'
import styles from './WorkProgress.module.sass'
import PropTypes from "prop-types";
import classNames from 'classnames';

const WorkProgress = ({ date, workHours }) => {
    const [workStatus, setWorkStatus] = useState(true)
    const dateNow = new Date()
    const checkCurrentMonth = () =>
        !!(dateNow.toLocaleString('Ru-ru', { month: 'long' }) === date.month.toLowerCase() && dateNow.getFullYear() === date.year)

    const calcProgress = () => {
        let result = workHours.fact / workHours.plan * 100
        if (result < 0) return 0
        if (result > 100) return 100
        return result
    }

    return (
        <div className={styles.wrapper} >
            <div className={styles.container}>
                <div className={styles.status}>
                    <p className={styles.statusTitle}>Текущий статус:</p>
                    <button
                        className={classNames({
                            [styles.statusButton]: true,
                            [styles.disable]: !checkCurrentMonth(),
                            [styles.red]: checkCurrentMonth() && !workStatus
                        })}
                        onClick={checkCurrentMonth() ? () => setWorkStatus(prevStatus => !prevStatus) : null}
                    >
                        {checkCurrentMonth() ? workStatus ? 'Работаю' : 'Не работаю' : 'Завершено'}
                    </button>
                </div>
                <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: `${calcProgress()}%` }}></div>
                </div>
                <div className={styles.annotationsWrapper}>
                    <div></div>
                    <div className={classNames(styles.annotation, styles.plan)}>{`план: ${workHours.plan} ч.`}</div>
                    <div className={classNames(styles.annotation, styles.fact)}>{`факт: ${workHours.fact} ч.`}</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default WorkProgress

WorkProgress.propTypes = {
    date: PropTypes.object.isRequired,
    workHours: PropTypes.object.isRequired,
}