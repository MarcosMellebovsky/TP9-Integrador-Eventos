"use client";
import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Registro.module.css';
import AuthContext from '@/app/context/AuthContext';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [UserName, setUserName] = useState('');
  const [contraseña, setContraseña] = useState('');
  
  const router = useRouter();
  const { login } = useContext(AuthContext); 

  const validacionRegistro = async (e) => {
    e.preventDefault();
  
    console.log('Enviando los siguientes datos:', {
      first_name: nombre,
      last_name: apellido,
      username: UserName,
      password: contraseña,
    });
  
    try {
      const response = await fetch('http://localhost:4000/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: nombre,
          last_name: apellido,
          username: UserName,
          password: contraseña,
        }),
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        console.error('Error recibido del servidor:', errorMessage);
        throw new Error(errorMessage);
      }
  
      const data = await response.json();
      const token = data.token;
      const userEmail = UserName;
  
      localStorage.setItem('token', token);
      login(token, userEmail);
      router.push('../../views/login');
    } catch (error) {
      console.error('Error en el registro:', error.message);
      alert(`Error en el registro: ${error.message}`);
    }
  };
  

  return (
    <div className={styles.registerContainer}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Crear una cuenta</h2>
        <form onSubmit={validacionRegistro} className={styles.registerForm}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className={styles.inputField}
            required
          />
          <input
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className={styles.inputField}
            required
          />
          <input
            type="email"
            placeholder="Ingrese su mail"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
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
          <button type="submit" className={styles.registerButton}>Registrarse</button>
        </form>
        <p className={styles.loginLink}>
          ¿Ya tienes una cuenta? <a href="../../views/login">Inicia sesión aquí</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
