import styles from '../css/MenuPrincipal.module.css'
import { MenuSelecao } from '../components/Selecao'
import { MenuInclusao } from '../components/Inclusao'
import { AreaCandidato } from '../components/AreaCandidato'
import { useState } from 'react'

export function MenuPrincipal() {
    const [acao, setAcao] = useState('');
    
    return (
        <div className={styles.bodyMenuPrincipal}>
            <div className={styles.divBtn}>
                <button className={`${styles.btn} w-full md:w-auto`} onClick={() => setAcao("selecionar")}>Selecionar candidaturas</button>
                <button className={`${styles.btn} w-full md:w-auto`} onClick={() => setAcao("incluir")}>Incluir candidatura</button>
                <button className={`${styles.btn} w-full md:w-auto`} onClick={() => setAcao("area")}>Área do candidato</button>
            </div>

            <br></br>

            {acao === 'selecionar' && <MenuSelecao />}
            {acao === 'incluir' && <MenuInclusao />}
            {acao === 'area' && <AreaCandidato />}
        </div>
    )
}