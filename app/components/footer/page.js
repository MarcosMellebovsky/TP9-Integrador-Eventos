"use client";
import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import AuthContext from '@/app/context/AuthContext';

const Footer = () => {
  const router = useRouter(); 
  const {usuario} = useContext(AuthContext);

const handleLogoClick = () =>{
if(usuario){
router.push('../../views/inicio')
}
}
  return (
    <footer className={styles.piePagina}>
      <div className={styles.grupo1}>
        <div className={styles.box}>
          <figure>
              <img onClick={handleLogoClick} src="/logo.jpg" alt="Logo de footer" className={styles.logo} />
          </figure>
        </div>
        <div className={styles.box}>
          <h2>SOBRE NOSOTROS</h2>
          <p>Empresa líder en Eventos de todo tipo, Los mejores eventos del mundo.</p>
          <p>Reserva de Eventos de calidad en Argentina.</p>
        </div>
        <div className={styles.box}>
          <h2>SÍGUENOS</h2>
          <div className={styles.redSocial}>
            <a href="https://www.facebook.com/home.php" target='blank_' className={styles.icon}><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.instagram.com/"target='blank_' className={styles.icon}><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://x.com/home" target='blank_' className={styles.icon}><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://web.whatsapp.com/" target='blank_' className={styles.icon}><FontAwesomeIcon icon={faWhatsapp} /></a>
          </div>
        </div>
      </div>

      <div className={styles.grupo2}>
        <small>&copy; 2024 <b>EventBookings</b> Todos los derechos reservados</small>
      </div>
    </footer>
  );
};

export default Footer;
