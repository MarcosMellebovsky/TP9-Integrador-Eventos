"use client";

import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import styles from './Header.module.css';

const Header = () => {
  const { usuario, logout } = useContext(AuthContext); 

  return (
    <header className={styles.header}>
      <img src="/logo.jpg" alt="Logo del Sitio" className={styles.logo} />
      
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
