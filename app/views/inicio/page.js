"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Inicio.module.css';
import {  useRouter } from 'next/navigation';

const Inicio = () => {
  const [eventos, setEventos] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/event', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const eventosObjeto = await response.json();
          setEventos(eventosObjeto); 
          console.log(eventosObjeto); // Mover el console.log aquí

        } else {
          console.error('Error al obtener eventos:', response.status);
        }
      } catch (error) {
        console.error('Error en la solicitud de eventos:', error);
      }
    };
  console.log(eventos)
    fetchEventos();
  }, []);

  const irAdetalleEvento = (id) =>{
    router.push(`../../views/detalle_evento/${id}`);
  }

  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Bienvenido a EventBooking</h1>
        <p className={styles.subtitle}>Descubre los próximos eventos</p>
      </header>

      <section className={styles.eventList}>
        {eventos.length === 0 ? (
          <p className={styles.noEvents}>No hay eventos disponibles</p>
        ) : (
          eventos.map((evento) => (
<div key={evento.id} className={styles.eventCard} onClick={() => irAdetalleEvento(evento.id)}>
{console.log(evento.id)}
               <img src={evento.imagen} alt={evento.titulo} className={styles.eventImage} />
                <div className={styles.eventInfo}>
                  <h3 className={styles.eventTitle}>{evento.name}</h3>
                  <p className={styles.eventDescription}>{evento.description}</p>
                  <p className={styles.eventDescription}>{"Precio: " +evento.price}</p>
                  <p className={styles.eventDescription}>{"Maximo de personas: " + evento.max_assistance}</p>
                  <p className={styles.eventDate}>Fecha: {new Date(evento.start_date).toISOString().slice(0, 10)}</p>
                  </div>
              </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Inicio;
