import styles from '../css/MenuPrincipal.module.css'
import { MenuSelecao } from '../components/Selecao'
import { MenuInclusao } from '../components/Inclusao'
import { useState } from 'react'

export function MenuPrincipal() {
    const [acao, setAcao] = useState('');
    
    return (
        <div className={styles.bodyMenuPrincipal}>
            <div className={styles.divBtn}>
                <button className={styles.btn} onClick={() => setAcao("selecionar")}>Selecionar candidaturas</button>
                <button className={styles.btn} onClick={() => setAcao("incluir")}>Incluir candidatura</button>
                <button className={styles.btn} onClick={() => setAcao("area")}>Área do candidato</button>
            </div>

            <br></br>

            {acao === 'selecionar' && <MenuSelecao />}
            {acao === 'incluir' && <MenuInclusao />}
            {acao === 'area' && (
                <div className={styles.card}><h2>Área do candidato</h2></div>
            )}
        </div>
    )
}