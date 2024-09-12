"use client";

import React, { useContext } from 'react';
import Link from 'next/link';
import styles from './Menu.module.css';
import AuthContext from '../../context/AuthContext';


const Menu = () => {
  const { usuario } = useContext(AuthContext);

  

  if (!usuario) {
    return null; 
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li><Link href="../../views/inicio">Home</Link></li>
        <li><Link href="../../views/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
