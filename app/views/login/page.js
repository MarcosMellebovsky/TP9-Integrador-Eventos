"use client";
import React, { useState, useContext } from 'react';
import styles from './Login.module.css';
import { useRouter } from 'next/navigation';
import AuthContext from '../../context/AuthContext';

const Login = () => {
  const router = useRouter();
  const { login } = useContext(AuthContext);  
  
  const storedToken = localStorage.getItem('token');
  if (storedToken) {
    router.push('../../views/inicio');
    return null;
  }

  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  const validacionLogin = async (e) => {

    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: contraseña,
        }),
      });

      const data = await response.json();
      
      if (response.status === 200) {
        const token = data.token;
        localStorage.setItem('token', token);
        login(token, email);  
        router.push('../../views/inicio'); 
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error al logear:', error);
      alert('Error en el logeo');
    }
    
  };
 

  return (
  
    <div className={styles.loginContainer}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Bienvenido a EventBooking</h2>
        <form onSubmit={validacionLogin} className={styles.loginForm}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputField}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            className={styles.inputField}
            required
          />
          <button type="submit" className={styles.loginButton}>Iniciar Sesión</button>
        </form>
        <p className={styles.registerLink}>
          ¿No tienes cuenta? <a href="../../views/registro">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
