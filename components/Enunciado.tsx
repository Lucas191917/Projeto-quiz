import styles from '../styles/Enunciado.module.css'

interface EnuciadoProps {
    texto: string 
}

export default function Enunciado(props: EnuciadoProps) {
    return (
        <div className={styles.enunciado}>
             <span className={styles.texto}>{props.texto}</span>
        </div>
    )
}