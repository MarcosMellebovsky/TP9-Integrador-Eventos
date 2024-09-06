"use client";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const DetalleEvento = () => {
  const router = useRouter();
  const { id } = router.query;  // Obtiene el id del evento de la URL
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    const eventosObjeto = [
      // Eventos con sus detalles
    ];

    const eventoEncontrado = eventosObjeto.find(evento => evento.id === parseInt(id));
    setEvento(eventoEncontrado);
  }, [id]);

  if (!evento) {
    return <p>Cargando evento...</p>;
  }

  return (
    <div>
      <h1>{evento.titulo}</h1>
      <p>{evento.descripcion}</p>
      <p>Fecha: {evento.fecha}</p>
      <img src={evento.imagen} alt={evento.titulo} />
    </div>
  );
};

export default DetalleEvento;
