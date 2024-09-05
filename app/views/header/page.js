"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Header.module.css';

const Header = () => {
  const [usuario, setUsuario] = useState('');
  const router = useRouter();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('registeredEmail');
    if (loggedInUser) {
      setUsuario(loggedInUser);
    }
  }, []);

  const handleLogout = () => {
    
    localStorage.removeItem('registeredEmail');
    localStorage.removeItem('registeredPassword');
    setUsuario(''); 
    router.push('/views/login');
  };

  return (
    <header className={styles.header}>
      <img src="./logo.jpg" alt="Logo del Sitio" className={styles.logo} />
      
      {usuario && (
        <div className={styles.userMenu}>
          <span className={styles.userIcon}>👤</span> 
          <span className={styles.userName}>{usuario}</span>
          <button className={styles.logoutButton} onClick={handleLogout}>Cerrar Sesión</button>
        </div>
      )}
    </header>
  );
};

export default Header;
