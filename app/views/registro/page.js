"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Registro.module.css';

const Register = () => {
  const [nombre, setnombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setconfirmarContraseña] = useState('');
  
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (contraseña !== confirmarContraseña) {
      alert('Las contraseñas no coinciden');
      return;
    }

    localStorage.setItem('EmailRegistrado', email);
    localStorage.setItem('ContraseñaRegistrada', contraseña);

    router.push('../../views/login');
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
            onChange={(e) => setnombre(e.target.value)}
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
            onChange={(e) => setconfirmarContraseña(e.target.value)}
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
