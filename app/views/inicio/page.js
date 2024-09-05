"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Inicio.module.css';

const Inicio = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const eventosObjeto= [
       {
        id: 1,
        titulo: 'Concierto de Rock',
        descripcion: 'Disfruta de una noche de buena música con las mejores bandas de rock.',
        fecha: '2024-10-15',
        imagen: 'https://rockfm-cdnmed.rockfm.fm/resources/jpg/0/7/1584614301070.jpg',
      },
      {
        id: 2,
        titulo: 'Festival de Comida',
        descripcion: 'Vive una experiencia gastronómica única con los mejores chefs de la ciudad.',
        fecha: '2024-11-05',
        imagen: 'https://www.peruoea.org/wp-content/uploads/2016/07/13680384_815913188510430_7449070781456691066_o.jpg',
      },
      {
        id: 3,
        titulo: 'Conferencia de Tecnología',
        descripcion: 'Descubre las últimas innovaciones y tendencias en el mundo de la tecnología.',
        fecha: '2024-12-01',
        imagen: 'https://news.microsoft.com/wp-content/uploads/prod/sites/41/2023/03/image00016-960x640.jpeg',
      },
      {
        id: 4,
        titulo: 'Maratón Ciudad de Buenos Aires',
        descripcion: 'Únete a la mayor carrera del año y desafía tus límites.',
        fecha: '2024-09-25',
        imagen: 'https://turismo.buenosaires.gob.ar/sites/turismo/files/field/image/__maraton21k1500x610.jpg',
      },
      {
        id: 5,
        titulo: 'Torneo de E-Sports',
        descripcion: 'Compite en los juegos más populares y gana grandes premios.',
        fecha: '2024-10-20',
        imagen: 'https://media.tycsports.com/files/2022/12/26/519349/worlds-2022_416x234.webp',
      },
      {
        id: 6,
        titulo: 'Feria del Libro',
        descripcion: 'Explora una gran variedad de libros y conoce a tus autores favoritos.',
        fecha: '2024-11-10',
        imagen: 'https://turismo.buenosaires.gob.ar/sites/turismo/files/field/image/interior-feria-del-libro-1500x610.jpg',
      },
      {
        id: 7,
        titulo: 'Festival de Jazz',
        descripcion: 'Disfruta de los mejores músicos de jazz en vivo en un entorno increíble.',
        fecha: '2024-09-30',
        imagen: 'https://www.caravanjazz.es/wp-content/uploads/2020/01/fb-roots.jpg',
      },
      {
        id: 8,
        titulo: 'Expo Fotografía',
        descripcion: 'Admira increíbles exposiciones de los mejores fotógrafos contemporáneos.',
        fecha: '2024-12-10',
        imagen: 'https://www.lujan.gob.ar/sites/default/files/styles/imagen_destacada/public/web_2_139.png?itok=odpPBXVt',
      },
      {
        id: 9,
        titulo: 'Gala de Ballet',
        descripcion: 'Una noche mágica de ballet clásico en el teatro más prestigioso de la ciudad.',
        fecha: '2024-11-18',
        imagen: 'https://www.ellitoral.com/images/2023/05/05/hbnQ5H5zz_1300x655__1.jpg',
      },
    ];
    setEventos(eventosObjeto)
  }, []);

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
            <Link key={evento.id} href={`/views/eventos?page=${evento.id}`}>
              <div className={styles.eventCard}>
                <img src={evento.imagen} alt={evento.titulo} className={styles.eventImage} />
                <div className={styles.eventInfo}>
                  <h3 className={styles.eventTitle}>{evento.titulo}</h3>
                  <p className={styles.eventDescription}>{evento.descripcion}</p>
                  <p className={styles.eventDate}>Fecha: {evento.fecha}</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </section>
    </div>
  );

};

export default Inicio;