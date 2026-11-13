import styles from '../css/MenuPrincipal.module.css';
import  { mascaraData } from './Mascaras'
import { useState } from 'react'

type Status = '' | 'AND' | 'SRE' | 'REJ' | 'APR';
type MeioAbordagem = '' | 'ABO' | 'CAN';
type Modalidade = '' | 'SEM' | 'HOM' | 'PRE' | 'NIF';

export function MenuSelecao() {
    const [dataInicial, setDataInicial] = useState('');
    const [dataFinal, setDataFinal] = useState('');
    const [tipo, setTipo] = useState<Status>('');
    const [descricaoVaga, setDescricaoVaga] = useState('');
    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [meioAbordagem, setMeioAbordagem] = useState<MeioAbordagem>('');
    const [modalidade, setModalidade] = useState<Modalidade>('');
    const [salarioInicial, setSalarioInicial] = useState('');
    const [salarioFinal, setSalarioFinal] = useState('');
    
    return (
        <div className={styles.card}>
            <h2 className="text-2xl font-bold mb-6">Seleção de candidaturas</h2>

            <div className="flex flex-wrap items-end gap-3">

                <div className="w-full flex gap-3">
                    <div className='flex-1'>
                        <label htmlFor="descricaoVaga" className="text-sm font-semibold text-gray-700">
                            Descrição da vaga
                        </label>
                        <div className="flex items-center gap-2">
                            <input id="descricaoVaga" type="text"
                                className='w-full'
                                value={descricaoVaga} onChange={(e) => setDescricaoVaga(e.target.value)} />
                        </div>
                    </div>

                    <div className='flex-1'>
                        <label htmlFor="nomeEmpresa" className="text-sm font-semibold text-gray-700">
                            Nome da empresa
                        </label>
                        <div className="flex items-center gap-2">
                            <input id="nomeEmpresa" type="text"
                                className='w-full'
                                value={nomeEmpresa} onChange={(e) => setNomeEmpresa(e.target.value)} />
                        </div>
                    </div>
                </div>
                
                <div className="w-1/4">
                    <label htmlFor="dataInicial" className="text-sm font-semibold text-gray-700">
                        Intervalo de datas
                    </label>
                    <div className="flex items-center gap-2">
                        <input id="dataInicial" type="text" placeholder="dd/MM/aaaa" maxLength={10}
                            className='w-full'
                            value={dataInicial} onChange={(e) => setDataInicial(mascaraData(e.target.value))} />
                        <label htmlFor="dataFinal">Até</label>
                        <input id="dataFinal" type="text" placeholder="dd/MM/aaaa" maxLength={10}
                            className='w-full'
                            value={dataFinal} onChange={(e) => setDataFinal(mascaraData(e.target.value))} />
                    </div>
                </div>

                <div className="w-1/5">
                    <label htmlFor="status" className="text-sm font-semibold text-gray-700">
                        Status da vaga
                    </label>
                    <select id="status" className={styles.select} style={{ maxWidth: 'none' }} value={tipo}
                        onChange={(e) => setTipo(e.target.value as Status)}>
                        <option value="" selected>Todas</option>
                        <option value="AND">Em andamento</option>
                        <option value="SRE">Sem retorno</option>
                        <option value="REJ">Rejeitada</option>
                        <option value="APR">Aprovada</option>
                    </select>
                </div>

                <div className="w-1/5">
                    <label htmlFor="meioContato" className="text-sm font-semibold text-gray-700">
                        Meio de contato
                    </label>
                    <select id="meioContato" className={styles.select} style={{ maxWidth: 'none' }} value={meioAbordagem}
                        onChange={(e) => setMeioAbordagem(e.target.value as MeioAbordagem)}>
                        <option value="" selected>Todas</option>
                        <option value="ABO">Abordagem</option>
                        <option value="CAN">Candidatura</option>
                    </select>
                </div>

                <div className="w-1/5">
                    <label htmlFor="modalidade" className="text-sm font-semibold text-gray-700">
                        Modalidade
                    </label>
                    <select id="modalidade" className={styles.select} style={{ maxWidth: 'none' }} value={modalidade}
                        onChange={(e) => setModalidade(e.target.value as Modalidade)}>
                        <option value="" selected>Todas</option>
                        <option value="PRE">Presencial</option>
                        <option value="HOM">Home office</option>
                        <option value="SEM">Semi-presencial</option>
                        <option value="NIF">Não informado</option>
                    </select>
                </div>

                <div className="w-1/4">
                    <label htmlFor="difSalario" className="text-sm font-semibold text-gray-700">
                        Valores
                    </label>
                    <div className="flex items-center gap-2">
                        <input id="salarioInicial" type="text" placeholder="0,00"
                            className='w-full'
                            value={salarioInicial} onChange={(e) => setSalarioInicial(e.target.value)} />
                        <label htmlFor="difSalario">Até</label>
                        <input id="salarioFinal" type="text" placeholder="0,00"
                            className='w-full'
                            value={salarioFinal} onChange={(e) => setSalarioFinal(e.target.value)} />
                    </div>
                </div>

                <div className="flex flex-col gap-1 ml-auto">
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