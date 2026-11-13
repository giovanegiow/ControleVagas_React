import styles from '../css/MenuPrincipal.module.css';
import { useState } from 'react'
import { TagInput } from './TagInput';

type Nivel = 'TRE' | 'JUN' | 'PLE' | 'SEN';

export function AreaCandidato() {
    const [nomeCompleto, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGitHub] = useState('');
    const [cargo, setCargo] = useState('');
    const [nivel, setNivel] = useState<Nivel>('TRE');
    const [resumo, setResumo] = useState('');

    return (
        <div className={styles.card}>
            <h2 className="text-2xl font-bold mb-6">Área do candidato</h2>

            <div className="flex flex-wrap items-end gap-3">

                <div className="w-full flex gap-3">
                    <div className='flex-1'>
                        <label htmlFor="nomeCompleto" className="text-sm font-semibold text-gray-700">
                            Nome completo
                        </label>
                        <div className="flex items-center gap-2">
                            <input id="nomeCompleto" type="text"
                                className='w-full'
                                value={nomeCompleto} onChange={(e) => setNome(e.target.value)} />
                        </div>
                    </div>

                    <div className='flex-1'>
                        <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                            E-mail
                        </label>
                        <div className="flex items-center gap-2">
                            <input id="email" type="text"
                                className='w-full'
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className="w-1/5">
                    <label htmlFor="telefone" className="text-sm font-semibold text-gray-700">
                        Telefone
                    </label>
                    <div className="flex items-center gap-2">
                        <input id="telefone" type="text"
                            className='w-full' placeholder='(00) 0000-0000'
                            value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    </div>
                </div>

                <div className="w-1/5">
                    <label htmlFor="cidade" className="text-sm font-semibold text-gray-700">
                        Cidade
                    </label>
                    <div className="flex items-center gap-2">
                        <input id="cidade" type="text"
                            className='w-full'
                            value={cidade} onChange={(e) => setCidade(e.target.value)} />
                    </div>
                </div>

                <div className="w-1/6">
                    <label htmlFor="estado" className="text-sm font-semibold text-gray-700">
                        Estado (sigla)
                    </label>
                    <div className="flex items-center gap-2">
                        <input id="estado" type="text" placeholder='UF'
                            className='w-full' maxLength={2}
                            value={estado} onChange={(e) => setEstado(e.target.value)} />
                    </div>
                </div>

                <div className="w-full flex gap-3">
                    <div className='flex-1'>
                        <label htmlFor="linkedin" className="text-sm font-semibold text-gray-700">
                            Linkedin
                        </label>
                        <div className="flex items-center gap-2">
                            <input id="linkedin" type="text"
                                className='w-full'
                                value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
                        </div>
                    </div>

                    <div className='flex-1'>
                        <label htmlFor="github" className="text-sm font-semibold text-gray-700">
                            GitHub
                        </label>
                        <div className="flex items-center gap-2">
                            <input id="github" type="text"
                                className='w-full'
                                value={github} onChange={(e) => setGitHub(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className="w-full flex gap-3">
                    <div className='w-4/5'>
                        <label htmlFor="cargo" className="text-sm font-semibold text-gray-700">
                            Cargo/Objetivo
                        </label>
                        <div className="flex items-center gap-2">
                            <input id="cargo" type="text"
                                className='w-full'
                                value={cargo} onChange={(e) => setCargo(e.target.value)} />
                        </div>
                    </div>

                    <div className="w-1/5">
                        <label htmlFor="status" className="text-sm font-semibold text-gray-700">
                            Nível de experiência
                        </label>
                        <select id="status" className={styles.select} style={{ maxWidth: 'none' }} value={nivel}
                            onChange={(e) => setNivel(e.target.value as Nivel)}>
                            <option value="TRA" selected>Trainee</option>
                            <option value="JUN">Júnior</option>
                            <option value="PLE">Pleno</option>
                            <option value="SEN">Sênior</option>
                        </select>
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="resumo" className="text-sm font-semibold text-gray-700">
                        Resumo profissional
                    </label>
                    <textarea id="resumo" className='w-full' rows={3}
                        value={resumo} onChange={(e) => setResumo(e.target.value)} />
                </div>

                <div className='w-4/5'>
                    <label className="text-sm font-semibold text-gray-700">Habilidades/Tecnologias</label>
                    <TagInput />
                </div>

                <div className="flex flex-col gap-1 ml-auto">
                    <button
                        type="button"
                        className="h-10 px-6 rounded-lg bg-indigo-600 text-white font-semibold
                                                        hover:bg-indigo-700 active:scale-95 transition cursor-pointer"
                    // onClick={() => console.log({ dataInicial, dataFinal, tipo })}
                    >
                        Salvar
                    </button>
                </div>

            </div>
        </div>
    )
}