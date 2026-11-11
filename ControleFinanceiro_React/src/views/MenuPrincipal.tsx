import styles from '../css/MenuPrincipal.module.css'

export function MenuPrincipal(){
    return (
        <div className={styles.divBtn}>
            <button className={styles.btn}>Selecionar movimentações</button>
            <button className={styles.btn}>Incluir movimentação</button>
            <button className={styles.btn}>Importar movimentação (CSV)</button>
        </div>
    )
}