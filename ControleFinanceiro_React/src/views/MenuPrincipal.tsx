import styles from '../css/MenuPrincipal.module.css'
import { MenuSelecao } from '../components/Selecao'
import { MenuInclusao } from '../components/Inclusao'
import { useState } from 'react'

export function MenuPrincipal() {
    const [acao, setAcao] = useState('');
    
    return (
        <div className={styles.bodyMenuPrincipal}>
            <div className={styles.divBtn}>
                <button className={styles.btn} onClick={() => setAcao("selecionar")}>Selecionar movimentações</button>
                <button className={styles.btn} onClick={() => setAcao("incluir")}>Incluir movimentação</button>
                <button className={styles.btn} onClick={() => setAcao("importar")}>Importar movimentação (CSV)</button>
            </div>

            <br></br>

            {acao === 'selecionar' && <MenuSelecao />}
            {acao === 'incluir' && <MenuInclusao />}
            {acao === 'importar' && (
                <div className={styles.card}><h2>Importação de movimentação</h2></div>
            )}
        </div>
    )
}