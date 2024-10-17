"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Menu.module.css';

const Menu = () => {
  const [usuario, setUsuario] = useState('');

  useEffect(() => {
    const storageUsuario = localStorage.getItem('EmailRegistrado');
    setUsuario(storageUsuario);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      setUsuario(localStorage.getItem('EmailRegistrado'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {usuario && <li><Link href="../../views/inicio">Home</Link></li>}
        <li><Link href="../../views/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
