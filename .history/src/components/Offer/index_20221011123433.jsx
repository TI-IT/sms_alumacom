import React from 'react';
import styles from './Offer.module.scss';

const Offer = ({ name_product }) => {
  return (
    <div className={styles.root}>
      <h2>{name_product}</h2>
    </div>
  );
};

export default Offer;
