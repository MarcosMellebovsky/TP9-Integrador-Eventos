"use client";

import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '@/app/context/AuthContext';
import Link from 'next/link';
import styles from './Menu.module.css';

const Menu = () => {
  const { usuario } = useContext(AuthContext);

 

   

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
