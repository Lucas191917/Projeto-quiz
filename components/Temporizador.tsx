import styles from '../styles/Temporizador.module.css'

import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TemporizadorProps {
    key: any 
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador (props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={[ '#ED827A','#BCE596', '#F7B801']}
                colorsTime= {[0.33,0.33,0.33]}>
                {({ remainingTime }) => remainingTime } 
            </CountdownCircleTimer>
        </div>
    )
}
