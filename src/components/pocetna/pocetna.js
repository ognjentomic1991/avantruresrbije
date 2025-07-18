import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './pocetna.module.css';
import homeBackground from './Home.png';
import FaFacebookF from './FaFacebookF.png';
import FaInstagram from './FaInstagram.png';
import FaTiktok from './FaTiktok.png';
import FaYoutube from './FaYoutube.png';

function Pocetna() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && !isMobile && menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [menuOpen, isMobile]);

    // Detektuj širinu ekrana
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className={`${styles.homePage} ${menuOpen && isMobile ? styles.menuActiveMobile : ''}`}>
                <div className={styles.heroSection} style={{ backgroundImage: `url(${homeBackground})` }}>
                    <header className={styles.header}>
                        <div className={styles.headerRow}>
                            <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? '✖' : '☰'}
                            </button>
                            <input type="search" className={styles.searchInput} placeholder="Pretraga..." />
                        </div>
                    </header>
                </div>

                <p>Avanture</p>
                <section className={styles.carousel}>
                    <div className={styles.carouselTrack}>
                        <div className={styles.placeholder} onClick={() => navigate('/adrenalinske_ture')}>Adrenalinske avanture</div>
                        <div className={styles.placeholder} onClick={() => navigate('/pesacke_ture')}>Pešačke ture</div>
                        <div className={styles.placeholder} onClick={() => navigate('/festivali')}>Festivali</div>
                        <div className={styles.placeholder} onClick={() => navigate('/biciklisticke_ture')}>Biciklističke ture</div>
                        <div className={styles.placeholder} onClick={() => navigate('/izleti')}>Izleti</div>
                    </div>
                </section>

                <p>Smestaj</p>
                <section className={styles.carouselSmestaj}>
                    <div className={styles.carouselTrackSmestaj}>
                        <div className={styles.placeholder}>Apartmani u prirodi</div>
                        <div className={styles.placeholder}>Seoska domaćinstva</div>
                        <div className={styles.placeholder}>Planinske kolibe</div>
                        <div className={styles.placeholder}>Hosteli</div>
                        <div className={styles.placeholder}>Hoteli</div>
                    </div>
                </section>

                <p>Vesti</p>
                <div className={styles.heroPlaceholder}>Novo u ponudi</div>

                <footer className={styles.footer}>
                    <div className={styles.footerLeft}>
                        Avanture Srbije, Kostolac<br />
                        Telefon: 069 69 69 699
                    </div>

                    <div className={styles.footerCenter}>
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
                    </div>

                    <div className={styles.footerRight}>
                        Autorsko pravo © <a href="https://ognjentomic.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>Ognjen Tomic</a> 2025. Sva prava zadržana.
                    </div>
                </footer>
            </div>

            {menuOpen && (
                <div
                    ref={menuRef}
                    className={`${styles.dropdownMenu} ${styles.fadeIn}`}
                >
                    <div onClick={() => { navigate('/login'); setMenuOpen(false); }}>Uloguj se / Registruj se</div>
                    <div onClick={() => { navigate('/pesacke_ture'); setMenuOpen(false); }}>Pešačke ture</div>
                    <div onClick={() => { navigate('/izleti'); setMenuOpen(false); }}>Izleti</div>
                    <div onClick={() => { navigate('/festivali'); setMenuOpen(false); }}>Festivali</div>
                    <div onClick={() => { navigate('/biciklisticke_ture'); setMenuOpen(false); }}>Biciklističke ture</div>
                    <div onClick={() => { navigate('/adrenalinske_ture'); setMenuOpen(false); }}>Adrenalinske ture</div>
                    <div onClick={() => { navigate('/vinske_ture'); setMenuOpen(false); }}>Vinske ture</div>
                    <div onClick={() => { navigate('/smestaj'); setMenuOpen(false); }}>Smeštaj</div>
                </div>
            )}
        </>
    );
}

export default Pocetna;
