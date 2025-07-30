import React from 'react';
import styles from './bicikilsticke_ture.module.css';
import Biciklista from './biciklista.svg';

const BikerLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <img src={Biciklista} alt="Biciklista" className={styles.biker} />
    </div>
  );
};

export default BikerLoader;
