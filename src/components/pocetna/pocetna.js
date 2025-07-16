import React from 'react';
import { useNavigate } from 'react-router-dom'; // Dodat import za navigaciju
import styles from './pocetna.module.css';
import homeBackground from './Home.png';
import FaFacebookF from './FaFacebookF.png';
import FaInstagram from './FaInstagram.png';
import FaTiktok from './FaTiktok.png';
import FaYoutube from './FaYoutube.png';

function Pocetna() {
    const navigate = useNavigate(); // Koristi useNavigate za navigaciju
    return (
        <div className={styles.homePage}>
            <div className={styles.heroSection} style={{ backgroundImage: `url(${homeBackground})` }}>
                <header className={styles.header}>
                    <input type="search" className={styles.searchInput} placeholder="Pretraga..." />
                    <div className={styles.iconsContainer}>

                    </div>
                </header>
                <div className={styles.heroPlaceholder}>Novo u ponudi</div>
            </div>
            <p>Avanture</p>
            <section className={styles.sectionThreeItems}>
                <div className={styles.placeholder} onClick={() => navigate('/adrenalinske_ture')}>Adrenalinske avanture</div>
                <div className={styles.placeholder} onClick={() => navigate('/pesacke_ture')}>Pesacke ture</div>
                <div className={styles.placeholder} onClick={() => navigate('/festivali')}>Festivali</div>
                <div className={styles.placeholder} onClick={() => navigate('/biciklisticke_ture')}>Biciklisticke ture</div>
                <div className={styles.placeholder} onClick={() => navigate('/izleti')}>Izleti</div>
            </section>
            <p>Smestaj</p>
            <section className={styles.sectionTwoItems}>
                <div className={styles.placeholder}>Placeholder A</div>
                <div className={styles.placeholder}>Placeholder B</div>
            </section>
            <p>Vesti</p>
            <footer className={styles.footer}>
                <div className={styles.footerIcon}>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={FaFacebookF} alt="Facebook" />
                    </a>
                </div>
                <div className={styles.footerIcon}>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={FaInstagram} alt="Instagram" />
                    </a>
                </div>
                <div className={styles.footerIcon}>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                        <img src={FaTiktok} alt="TikTok" />
                    </a>
                </div>
                <div className={styles.footerIcon}>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src={FaYoutube} alt="YouTube" />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Pocetna;