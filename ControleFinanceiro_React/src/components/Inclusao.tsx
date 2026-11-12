import styles from '../css/MenuPrincipal.module.css';
import { mascaraData } from './Mascaras'
import { useState } from 'react'

type TipoMov = '' | 'E' | 'S' | 'T';
type FormaPagamento = '' | 'PIX' | 'DIN' | 'CARCRE' | 'CARDEB' | 'BOL' | 'CRE'

export function MenuInclusao() {
    const [descricao, setDescricao] = useState('');
    const [dtMovimentacao, setDtMovimentacao] = useState('');
    const [tipo, setTipo] = useState<TipoMov>('');
    const [formaPagamento, setFormaPagamento] = useState<FormaPagamento>('');
    const [vlMovimentacao, setVlMovimentacao] = useState('');
    
    return (
        <div className={styles.card}>
            <h2 className="text-2xl font-bold mb-6">Inclusão de movimentação</h2>

            <div className="flex flex-wrap items-end gap-6">

                <div className="w-full">
                    <label htmlFor="descricao" className="text-sm font-semibold text-gray-700">
                        Descrição da movimentação
                    </label>
                    <div className="flex items-center gap-2">
                        <input id="descricao" type="text" placeholder="Descrição..."
                            className='w-full'
                            value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                    </div>
                </div>

                <div className='flex w-full'>
                    <div className="w-1/4">
                        <label htmlFor="dtMovimentacao" className="text-sm font-semibold text-gray-700">
                            Data da movimentação
                        </label>
                        <input id="dataInicial" type="text" placeholder="dd/MM/aaaa" maxLength={10}
                            value={dtMovimentacao} onChange={(e) => setDtMovimentacao(mascaraData(e.target.value))} />
                    </div>

                    <div className="w-1/4">
                        <label htmlFor="vlMovimentacao" className="text-sm font-semibold text-gray-700">
                            Valor da movimentação
                        </label>
                        <input id="vlMovimentacao" type="text" placeholder="0,00"
                            value={vlMovimentacao} onChange={(e) => setVlMovimentacao(e.target.value)} />
                    </div>

                    <div className="w-1/4">
                        <label htmlFor="tipoMov" className="text-sm font-semibold text-gray-700">
                            Tipo de movimentação
                        </label>
                        <select id="tipoMov" className={styles.select} value={tipo}
                            onChange={(e) => setTipo(e.target.value as TipoMov)}>
                            <option value="" selected></option>
                            <option value="E">Entrada</option>
                            <option value="S">Saída</option>
                            <option value="T">Transferência</option>
                        </select>
                    </div>

                    <div className="w-1/4">
                        <label htmlFor="formaPagamento" className="text-sm font-semibold text-gray-700">
                            Tipo de movimentação
                        </label>
                        <select id="formaPagamento" className={styles.select} value={formaPagamento}
                            onChange={(e) => setFormaPagamento(e.target.value as FormaPagamento)}>
                            <option value="" selected></option>
                            <option value="PIX">PIX</option>
                            <option value="DIN">Dinheiro</option>
                            <option value="CARDEB">Cartão de débito</option>
                            <option value="CARCRE">Cartão de crédito</option>
                            <option value="BOL">Boleto</option>
                            <option value="CRE">Crediário</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1 justify-end">
                        <button
                            type="button"
                            className="h-10 px-6 rounded-lg bg-indigo-600 text-white font-semibold
                                            hover:bg-indigo-700 active:scale-95 transition cursor-pointer">
                            Incluir
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}