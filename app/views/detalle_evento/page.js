"use client";
import style from './DetalleEvento.module.css';
import Swal from 'sweetalert2';

export default function DetalleEvento() {
    const mensajeEnviado = (event) => {
        event.preventDefault();
        Swal.fire({
          title: "Agregado al evento correctamente",
          text: "Muchas gracias por participar",
          icon: "success"
        });
      };
    return (
<>
        <h1 className={style.Titulo}>DETALLE DEL EVENTO</h1>

        <div className={style.todo}>
            

            <div className={style.container}>
                <h3 className={style.Subtitulo}>Concierto de Rock</h3>
                <p className={style.Descripcion}>Disfruta de una noche de buena música con las mejores bandas de rock</p>
                <h4 className={style.Hora}>Hora de inicio: 9:00 AM 2024-10-15</h4>
                <h4 className={style.lista}>Bandas que pasarán por el evento:</h4>
                <ul className={style.Bandas}>
                    <li>Queen</li>
                    <li>Led Zeppelin</li>
                    <li>Nirvana</li>
                    <li>The Rolling Stones</li>
                    <li>Foo Fighters</li>
                </ul>
                <button onClick={mensajeEnviado}className={style.AnotarmeBtn}>Anotarme al evento</button>
            </div>
            <img className={style.Imagen} src='https://news.microsoft.com/wp-content/uploads/prod/sites/41/2023/03/image00016-960x640.jpeg  ' alt='Concierto de Rock' />
        </div>
        </>
    );
}
