import styles from '../css/MenuPrincipal.module.css';
import { mascaraData } from './Mascaras'
import { useState } from 'react'
import { TagInput } from './TagInput';

type Status = '' | 'AND' | 'SRE' | 'REJ' | 'APR';
type MeioAbordagem = '' | 'ABO' | 'CAN';
type Modalidade = '' | 'SEM' | 'HOM' | 'PRE' | 'NIF';

export function MenuInclusao() {
    const [dtCandidatura, setDtCandidatura] = useState('');
    const [tipo, setTipo] = useState<Status>('');
    const [descricaoVaga, setDescricaoVaga] = useState('');
    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [meioAbordagem, setMeioAbordagem] = useState<MeioAbordagem>('');
    const [modalidade, setModalidade] = useState<Modalidade>('');
    const [salarioVaga, setSalarioVaga] = useState('');
    const [canalFonte, setCanalFonte] = useState('');
    const [observacoes, setObservacoes] = useState('');
    const [endereco, setEndereco] = useState('');
    
    return (
        <div className={styles.card}>
            <h2 className="text-2xl font-bold mb-6">Inclusão de candidatura</h2>

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
                
                <div className="w-1/5">
                    <label htmlFor="dtCandidatura" className="text-sm font-semibold text-gray-700">
                        Data de candidatura
                    </label>
                    <div className="flex items-center gap-2">
                        <input id="dtCandidatura" type="text" placeholder="dd/MM/aaaa" maxLength={10}
                            className='w-full'
                            value={dtCandidatura} onChange={(e) => setDtCandidatura(mascaraData(e.target.value))} />
                    </div>
                </div>

                <div className="w-1/5">
                    <label htmlFor="status" className="text-sm font-semibold text-gray-700">
                        Status da vaga
                    </label>
                    <select id="status" className={styles.select} style={{ maxWidth: 'none' }} value={tipo}
                        onChange={(e) => setTipo(e.target.value as Status)}>
                        <option value="AND" selected>Em andamento</option>
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
                        <option value="CAN" selected>Candidatura</option>
                        <option value="ABO">Abordagem</option>
                    </select>
                </div>

                <div className="w-1/5">
                    <label htmlFor="modalidade" className="text-sm font-semibold text-gray-700">
                        Modalidade
                    </label>
                    <select id="modalidade" className={styles.select} style={{ maxWidth: 'none' }} value={modalidade}
                        onChange={(e) => setModalidade(e.target.value as Modalidade)}>
                        <option value="NIF" selected>Não informado</option>
                        <option value="PRE">Presencial</option>
                        <option value="HOM">Home office</option>
                        <option value="SEM">Semi-presencial</option>
                    </select>
                </div>

                <div className="w-full flex gap-3">
                    <div className="w-1/5">
                        <label htmlFor="difSalario" className="text-sm font-semibold text-gray-700">
                            Salário proposto (opcional)
                        </label>
                        <div className="flex items-center gap-2">
                            <input id="salarioVaga" type="text" placeholder="0,00"
                                className='w-full'
                                value={salarioVaga} onChange={(e) => setSalarioVaga(e.target.value)} />
                        </div>
                    </div>

                    <div className="w-1/5">
                        <label htmlFor="canalFonte" className="text-sm font-semibold text-gray-700">
                            Canal/Fonte (opcional)
                        </label>
                        <input id="canalFonte" type="text" placeholder="ex: Linkedin, Indeed, etc"
                                className='w-full'
                                value={canalFonte} onChange={(e) => setCanalFonte(e.target.value)} />
                    </div>

                    <div className="w-3/5">
                        <label htmlFor="endereco" className="text-sm font-semibold text-gray-700">
                            Endereço da empresa
                        </label>
                        <input id="endereco" type="text"
                                className='w-full'
                                value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="observacoes" className="text-sm font-semibold text-gray-700">
                        Observações adicionais
                    </label>
                    <textarea id="observacoes" className='w-full' rows={3}
                            value={observacoes} onChange={(e) => setObservacoes(e.target.value)} />
                </div>

                <div className='w-4/5'>
                    <label className="text-sm font-semibold text-gray-700">Requisitos</label>
                    <TagInput/>
                </div>

                <div className="flex flex-col gap-1 ml-auto">
                    <button
                        type="button"
                        className="h-10 px-6 rounded-lg bg-indigo-600 text-white font-semibold
                                        hover:bg-indigo-700 active:scale-95 transition cursor-pointer"
                        // onClick={() => console.log({ dataInicial, dataFinal, tipo })}
                    >
                        Incluir
                    </button>
                </div>

            </div>
        </div>
    )
}