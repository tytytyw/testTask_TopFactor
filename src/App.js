import React, { useState } from "react";
import styles from './App.module.sass'
import Header from './components/Header'
import Cabinet from './components/Cabinet'
import { data } from './collections'

const App = () => {
  const [state, setState] = useState(data[0])

  const changeDateHandler = (increaseValue) => {
    let newId = state.id + increaseValue
    if (newId < 0) newId = data.length - 1
    if (newId > data.length - 1) newId = 0
    setState(data[newId])
  }

  return (
    <div className={styles.wrapper}>
      <Header date={state.date} changeDateHandler={changeDateHandler} />
      <Cabinet />
    </div>
  )
}

export default App;
