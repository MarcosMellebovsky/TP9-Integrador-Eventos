"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Registro.module.css';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (contraseña !== confirmarContraseña) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombre.split(' ')[0],
          email: email,
          password: contraseña,
        }),
      });

      const data = await response.json();
      console.log(data)

      if (response.status === 201) {
        alert('Registro exitoso');
        router.push('../../views/login');
      } else {
        alert(`Error: ${data}`);
      }
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('Error en el registro');
    }
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Crear una cuenta</h2>
        <form onSubmit={handleRegister} className={styles.registerForm}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className={styles.inputField}
            required
          />
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
          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmarContraseña}
            onChange={(e) => setConfirmarContraseña(e.target.value)}
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
