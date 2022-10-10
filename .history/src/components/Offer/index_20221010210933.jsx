import React from 'react';
import styles from './Offer.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>Offer to Component</h1>

      <p className={styles.description}>К сожалению данная страница отсутствует</p>
    </div>
  );
};

export default NotFoundBlock;
