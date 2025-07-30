import React, { useEffect, useState } from 'react';
import BikerLoader from './BikerLoader';
import styles from './bicikilsticke_ture.module.css';
import TourCardBike from './TourCardBike';
import TourDetailsBikeModal from './TourDetailsBikeModal';
import bikeImage from './biciklista.svg'; // postavi svoju sliku ovde

const sampleBikeTours = [
  {
    id: 1,
    name: 'Tura Fruška gora',
    shortDescription: 'Lagani uspon i prelepa priroda nacionalnog parka.',
    description: 'Staza srednje zahtevnosti, dužine 25km, sa vodičem i pauzama za fotografisanje.',
    departure: '08:00h, Novi Sad',
    destination: 'Popovica, Fruška gora',
    image: bikeImage,
  },
  {
    id: 2,
    name: 'Beograd – Avala',
    shortDescription: 'Gradska vožnja sa usponom do spomenika na Avali.',
    description: 'Tura od 18km sa vodičem, šumskim putevima i pogledom na grad.',
    departure: '10:00h, Kalemegdan',
    destination: 'Vrh Avale',
    image: bikeImage,
  },
];

function BiciklistickeTure() {
  const [loading, setLoading] = useState(true);
  const [selectedTour, setSelectedTour] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <BikerLoader />
      ) : (
        <div className={styles.mainContent}>
          <h1 className={styles.adminWelcome}>Biciklističke ture</h1>
          <div className={styles.tourGrid}>
            {sampleBikeTours.map(tour => (
              <TourCardBike key={tour.id} tour={tour} onReadMore={setSelectedTour} />
            ))}
          </div>
          <TourDetailsBikeModal tour={selectedTour} onClose={() => setSelectedTour(null)} />
        </div>
      )}
    </>
  );
}

export default BiciklistickeTure;
