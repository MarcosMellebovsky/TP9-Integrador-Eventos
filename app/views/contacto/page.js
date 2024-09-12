'use client'; 

import styles from './contacto.module.css';
import Swal from 'sweetalert2';

export default function Contacto() {

  const mensajeEnviado = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Mensaje enviado correctamente!",
      text: "Pronto nos pondremos en contacto con usted",
      icon: "success"
    });
  };

  return (
    <>
      <h1 className={styles.h1Contacto}>Contáctanos</h1>
      <form className={styles.form} onSubmit={mensajeEnviado}>
        <input
          type="email"
          placeholder="Ingrese su email"
          className={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Ingrese su nombre"
          className={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Cuéntanos qué necesitas"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.EnviarButton}>Enviar</button>
      </form>
    </>
  );
}
