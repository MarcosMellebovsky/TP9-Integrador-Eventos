import styles from './contacto.module.css'
export default function Contacto() {
    return(
        <>
        <h1 className={styles.h1Contacto}>Contactanos</h1>
        <form className={styles.form}>
        <input
            type="text"
            placeholder="Ingrese su nombre"
            className={styles.input}
            required
          />    
          <input
            type="text"
            placeholder="Cuentanos que necesitas"
            className={styles.input}
            required
          />  
        
            <button type="submit" className={styles.EnviarButton}>Enviar</button>
  
          
        </form>
    
        </>
    )
}