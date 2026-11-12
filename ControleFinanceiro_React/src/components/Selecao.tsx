import styles from '../css/MenuPrincipal.module.css';
import  { mascaraData } from './Mascaras'
import { useState } from 'react'

type TipoMov = '' | 'E' | 'S' | 'T';

export function MenuSelecao() {
    const [dataInicial, setDataInicial] = useState('');
    const [dataFinal, setDataFinal] = useState('');
    const [tipo, setTipo] = useState<TipoMov>('');
    
    return (
        <div className={styles.card}>
            <h2 className="text-2xl font-bold mb-6">Seleção de movimentações</h2>

            <div className="flex flex-wrap items-end gap-6">

                <div className="w-3/5">
                    <label htmlFor="dataInicial" className="text-sm font-semibold text-gray-700">
                        Intervalo de datas
                    </label>
                    <div className="flex items-center gap-2">
                        <input id="dataInicial" type="text" placeholder="dd/MM/aaaa" maxLength={10}
                            className='w-1/4'
                            value={dataInicial} onChange={(e) => setDataInicial(mascaraData(e.target.value))} />
                        <label htmlFor="dataFinal">Até</label>
                        <input id="dataFinal" type="text" placeholder="dd/MM/aaaa" maxLength={10}
                            className='w-1/4'
                            value={dataFinal} onChange={(e) => setDataFinal(mascaraData(e.target.value))} />
                    </div>
                </div>

                <div className="w-1/4">
                    <label htmlFor="tipoMov" className="text-sm font-semibold text-gray-700">
                        Tipo de movimentação
                    </label>
                    <select id="tipoMov" className={styles.select} value={tipo}
                        onChange={(e) => setTipo(e.target.value as TipoMov)}>
                        <option value="" selected>Todas</option>
                        <option value="E">Entrada</option>
                        <option value="S">Saída</option>
                        <option value="T">Transferência</option>
                    </select>
                </div>

                <div className="flex flex-col gap-1">
                    <button
                        type="button"
                        className="h-10 px-6 rounded-lg bg-indigo-600 text-white font-semibold
                                        hover:bg-indigo-700 active:scale-95 transition cursor-pointer"
                        onClick={() => console.log({ dataInicial, dataFinal, tipo })}
                    >
                        Selecionar
                    </button>
                </div>

            </div>
        </div>
    )
}