import styles from '../css/MenuPrincipal.module.css'
import { useState, type ChangeEvent } from 'react'

type TipoMov = '' | 'E' | 'S' | 'T';

export function MenuPrincipal(){
    const [acao, setAcao] = useState('');
    const [dataInicial, setDataInicial] = useState('');
    const [dataFinal, setDataFinal] = useState('');
    const [tipo, setTipo] = useState<TipoMov>('');

    function mascaraData(valor: string): string {
    const d = valor.replace(/\D/g, '').slice(0, 8);
        if (d.length <= 2) return d;
        if (d.length <= 4) return `${d.slice(0, 2)}/${d.slice(2)}`;
        return `${d.slice(0, 2)}/${d.slice(2, 4)}/${d.slice(4)}`;
    }
    
    return (
        <div>
            <div className={styles.divBtn}>
                <button className={styles.btn} onClick={() => setAcao("selecionar")}>Selecionar movimentações</button>
                <button className={styles.btn} onClick={() => setAcao("incluir")}>Incluir movimentação</button>
                <button className={styles.btn} onClick={() => setAcao("importar")}>Importar movimentação (CSV)</button>
            </div>

            <br></br>
            
            {acao === 'selecionar' && (
                <div className={styles.card}>
                    <h2>Seleção de movimentações</h2>

                    <h5>Intervalo de datas</h5>
                    <div className={styles.intervalo}>
                        <input type="text" placeholder='dd/MM/aaaa' className={styles.inputData} maxLength={10} value={dataInicial} onChange={(e: ChangeEvent<HTMLInputElement>) => setDataInicial(mascaraData(e.target.value))}/>
                        <label htmlFor="dataFinal">Até</label>                
                        <input type="text" placeholder='dd/MM/aaaa' className={styles.inputData} maxLength={10} value={dataFinal} onChange={(e: ChangeEvent<HTMLInputElement>) => setDataFinal(mascaraData(e.target.value))}/>
                    </div>

                    <h5>Tipo de movimentação</h5>
                    <div className={styles.campo}>
                        <select
                            id="tipoMov"
                            className={styles.select}
                            value={tipo}
                            onChange={(e) => setTipo(e.target.value as TipoMov)}
                        >
                            <option value="" selected>Todas</option>
                            <option value="E">Entrada</option>
                            <option value="S">Saída</option>
                            <option value="T">Transferência</option>
                        </select>
                    </div>
                </div>
            )}
            {acao === 'incluir' && (
                <div className={styles.card}><h2>Inclusão de movimentação</h2></div>
            )}
            {acao === 'importar' && (
                <div className={styles.card}><h2>Importação de movimentação</h2></div>
            )}
        </div>
    )
}