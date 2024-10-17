"use client";

import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import styles from './Header.module.css';
import { useRouter } from 'next/navigation';

const Header = () => {
  const { usuario, logout } = useContext(AuthContext); 
  const router = useRouter(); 

  const handleLogoClick = () => {
    if (usuario) {
      router.push('/views/inicio');
    }
  };

  return (
    <header className={styles.header}>
      <img
        src="/logo.jpg"
        alt="Logo del Sitio"
        className={styles.logo}
        onClick={handleLogoClick}
        style={{ cursor: usuario ? 'pointer' : 'default' }}
      />
      
      {usuario ? (
        <div className={styles.userMenu}>
          <span className={styles.userIcon}>👤</span> 
          <span className={styles.userName}>{usuario}</span> 
          <a className={styles.logoutButton} onClick={logout}>Cerrar Sesión</a>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
