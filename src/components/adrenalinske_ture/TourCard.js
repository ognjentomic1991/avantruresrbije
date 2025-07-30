import React from 'react';
import styles from './adrenalinske_ture.module.css';

const TourCard = ({ tour, onReadMore }) => {
  return (
    <div className={styles.tourCard} style={{ backgroundImage: `url(${tour.image})` }}>
      <div className={styles.tourOverlay}>
        <h2>{tour.name}</h2>
        <p>{tour.shortDescription}</p>
        <button onClick={() => onReadMore(tour)}>Read More</button>
      </div>
    </div>
  );
};

export default TourCard;
