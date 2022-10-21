import React from 'react'
import styles from './NotFounBlock.module.scss'

console.log(styles)
const NotFoundBlock = () => {
  return (
    <div>
      <h1 className={styles.root}>
        <span>😵</span>
        Ничего не найдено
      </h1>

      <p className={styles.description}>К сожалению данная страница отсутствует</p>
    </div>
  )
}

export default NotFoundBlock
