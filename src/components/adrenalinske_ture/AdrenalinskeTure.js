import React, { useEffect, useState } from 'react';
import ParachuteLoader from './ParachuteLoader';
import styles from './adrenalinske_ture.module.css';
import TourCard from './TourCard';
import TourDetailsModal from './TourDetailsModal';
import Padobranac from './padobranac.svg';

const sampleTours = [
  {
    id: 1,
    name: 'Skok padobranom Tara',
    shortDescription: 'Nezaboravno iskustvo skakanja iz aviona iznad Tare.',
    description: 'Skakanje sa 3500m, uz sertifikovanog instruktora.',
    departure: '08:00h, Beograd',
    destination: 'Tara, Srbija',
    image: Padobranac,
  },
  {
    id: 2,
    name: 'Rafting na Tari',
    shortDescription: 'Divlja vožnja rekom Tarom, idealna za avanturiste.',
    description: 'Rafting na najlepšim brzacima Tare uz vodiča i opremu.',
    departure: '06:00h, Užice',
    destination: 'Kamp Grab, Crna Gora',
    image: Padobranac,
  },
];

function AdrenalinskeTure() {
  const [loading, setLoading] = useState(true);
  const [selectedTour, setSelectedTour] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <ParachuteLoader />
      ) : (
        <div className={styles.mainContent}>
          <h1 className={styles.adminWelcome}>Adrenalinske ture</h1>
          <div className={styles.tourGrid}>
            {sampleTours.map(tour => (
              <TourCard key={tour.id} tour={tour} onReadMore={setSelectedTour} />
            ))}
          </div>
          <TourDetailsModal tour={selectedTour} onClose={() => setSelectedTour(null)} />
        </div>
      )}
    </>
  );
}

export default AdrenalinskeTure;
