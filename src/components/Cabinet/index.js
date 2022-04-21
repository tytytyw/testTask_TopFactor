import React from 'react'
import styles from './Cabinet.module.sass'
import UserInfo from './UserInfo'
import PropTypes from "prop-types";
import classNames from 'classnames';

const Cabinet = ({ performanceValues }) => {
    const calcBonus = (performance) => performance.baseRate * performanceValues.find(item => item.name === 'result').value / 100
    const renderPerformanceValue = (performance) =>
        performance.name === 'bonus'
            ? <span className={styles[performance.name]}>
                {`${calcBonus(performance)}Р`}
            </span>
            : <span className={classNames({
                [styles[performance.name]]: true,
                [styles.red]: performance.value < 100,
                [styles.yellow]: performance.value === 100,
                [styles.green]: performance.value > 100,
            })}>
                {`${performance.value}%`}
            </span>
    const renderPerformanceValues = () => (
        performanceValues.map(performance => (
            <div className={styles.performance} key={performance.title}>
                <p className={styles.performanceTitle}>{performance.title}</p>
                <p className={styles.performanceValue}>{renderPerformanceValue(performance)}</p>
            </div>
        ))
    )
    return (
        <div className={styles.wrapper}>
            <UserInfo />
            <main className={styles.main}>
                <div className={styles.performanceValues}>{renderPerformanceValues()}</div>
            </main>
            <footer style={{ flexGrow: 1 }}></footer>
        </div>
    )
}

export default Cabinet

Cabinet.propTypes = {
    performanceValues: PropTypes.array.isRequired
}