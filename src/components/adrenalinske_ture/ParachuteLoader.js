import React from 'react';
import styles from './adrenalinske_ture.module.css';
import Padobranac from './padobranac.svg';

const ParachuteLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <img src={Padobranac} alt="Padobranac" className={styles.fallingParachuter} />
    </div>
  );
};

export default ParachuteLoader;
