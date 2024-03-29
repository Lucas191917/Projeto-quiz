import { link } from 'fs'
import styles from '../styles/Botao.module.css'
import Link from 'next/link'

interface BotaoProps {
    texto: string
    href?: string
    onclick?: (e: any) => void
}


export default function Botao(props) {

    function renderizarBotao () {
        return (
            <button className={styles.botao}
            onClick={props.onClick}>
            {props.texto}
        </button>
        )
    }
    return props.href? (
        <Link href={props.href}>
            {renderizarBotao () }
        </Link>
    
    ) : renderizarBotao ( )
}