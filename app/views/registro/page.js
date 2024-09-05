"use client"
import React, { useState } from 'react';
import styles from './Registro.module.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    // lógica de registro (enviar los datos al backend)
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Crear una cuenta</h2>
        <form onSubmit={handleRegister} className={styles.registerForm}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputField}
            required
          />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
