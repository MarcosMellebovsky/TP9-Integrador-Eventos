"use client";
import { useEffect, useState, useContext } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import style from './DetalleEvento.module.css';
import AuthContext from '@/app/context/AuthContext';

export default function DetalleEvento() {
  const [evento, setEvento] = useState({});
  const { id } = useParams();
  const { usuario } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!usuario) {
      router.push('/views/login');
    } else {
      const fetchEvento = async () => {
        if (id) {
          try {
            const response = await fetch(`http://localhost:4000/api/event/${id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });

            if (response.ok) {
              const eventoData = await response.json();
              setEvento(eventoData);
            } else {
              console.error('Error al obtener los detalles del evento:', response.status);
            }
          } catch (error) {
            console.error('Error en la solicitud de detalles del evento:', error);
          }
        }
      };

      fetchEvento();
    }
  }, [id, usuario, router]);

  const mensajeEnviado = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Agregado al evento correctamente",
      text: "Muchas gracias por participar",
      icon: "success"
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}-${month}-${year}`;
  };

  return (
    <>
      <h1 className={style.Titulo}>DETALLE DEL EVENTO</h1>

      <div className={style.todo}>
        <div className={style.container}>
          <h3 className={style.Subtitulo}>{evento.name}</h3>
          <p className={style.Descripcion}>{evento.description}</p>
          <h4 className={style.Hora}>Hora de inicio: {formatDate(evento.start_date)}</h4>
          <button onClick={mensajeEnviado} className={style.AnotarmeBtn}>Anotarme al evento</button>
        </div>
        <img className={style.Imagen} src={evento.imagen} alt={evento.imagen} />
      </div>
    </>
  );
}
