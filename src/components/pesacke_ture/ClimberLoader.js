import React from 'react';
import styles from './pesacke_ture.module.css';
import Alpinista from './alpinista.svg'; // Uveri se da je fajl prisutan

const ClimberLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <img src={Alpinista} alt="Alpinista" className={styles.climber} />
    </div>
  );
};

export default ClimberLoader;
