"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Registro.module.css';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('')
  const [UserName, setUserName] = useState('');
  const [contraseña, setContraseña] = useState('');
  
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

   
  console.log(nombre, apellido, UserName, contraseña)
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

      const data = await response.text();
      console.log("data", data)

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
