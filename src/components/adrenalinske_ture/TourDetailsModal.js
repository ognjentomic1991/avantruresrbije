import React, { useState } from 'react';
import styles from './adrenalinske_ture.module.css';

const TourDetailsModal = ({ tour, onClose }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    ime: '',
    email: '',
    brojOsoba: 1,
  });

  if (!tour) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Uspešno ste rezervisali turu "${tour.name}" za ${formData.brojOsoba} osoba. Bićete kontaktirani putem emaila.`);
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{tour.name}</h2>
        <p><strong>Opis:</strong> {tour.description}</p>
        <p><strong>Vreme polaska:</strong> {tour.departure}</p>
        <p><strong>Mesto dolaska:</strong> {tour.destination}</p>

        {!showForm ? (
          <button className={styles.reserveBtn} onClick={() => setShowForm(true)}>Rezerviši</button>
        ) : (
          <form onSubmit={handleSubmit} className={styles.reservationForm}>
            <label>
              Ime i prezime:
              <input type="text" name="ime" value={formData.ime} onChange={handleInputChange} required />
            </label>
            <label>
              Email adresa:
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </label>
            <label>
              Broj osoba:
              <input type="number" name="brojOsoba" min="1" value={formData.brojOsoba} onChange={handleInputChange} required />
            </label>
            <button type="submit" className={styles.submitBtn}>Pošalji rezervaciju</button>
          </form>
        )}

        <button className={styles.closeBtn} onClick={onClose}>Zatvori</button>
      </div>
    </div>
  );
};

export default TourDetailsModal;
