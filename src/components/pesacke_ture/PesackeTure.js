import React, { useEffect, useState } from 'react';
import ClimberLoader from './ClimberLoader';
import styles from './pesacke_ture.module.css';

function PesackeTure() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 4000); // animacija 4s
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <ClimberLoader />
      ) : (
        <div className={styles.mainContent}>
          <h1>Dobrodošli na početnu stranicu! Pesacke_ture</h1>
          {/* Dodajte svoj sadržaj ovde */}
        </div>
      )}
    </>
  );
}

export default PesackeTure;
