import React from "react";
import styles from './App.module.sass'
import Header from './components/Header'

const App = () => {

  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  )
}

export default App;
