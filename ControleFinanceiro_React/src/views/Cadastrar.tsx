import '../css/LoginCadastro.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';

export function Cadastrar(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [erroEmail, setErroEmail] = useState('');
    const [erroNome, setErroNome] = useState('');
    const [erroSenha, setErroSenha] = useState('');
    const [erroConfirmarSenha, setErroConfirmarSenha] = useState('');

    function submitCadastro(e: any){
        e.preventDefault();

        if (!email){
            setErroEmail("O email é obrigatório!");
            return;
        }

        if (!nome){
            setErroNome("O nome é obrigatório!");
            return;
        }

        if (!senha){
            setErroSenha("A senha é obrigatória!");
            return;
        }

        if (!confirmarSenha){
            setErroConfirmarSenha("A confirmação da senha é obrigatória!");
            return;
        }

        if (senha.trim() != confirmarSenha.trim()){
            setErroConfirmarSenha("As duas senhas não coincidem!");
            return;
        }

        setErroEmail('');
        setErroSenha('');
        setErroNome('');
        setErroConfirmarSenha('');
        console.log('Login enviado:', { email, senha });
    }
    
    return (
        <div className='card'>
            <h1>Cadastrar</h1>

            <form onSubmit={submitCadastro}>
                <div className='campo'>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                </div>

                {erroEmail && <p className='erro'>{erroEmail}</p>}

                <div className='campo'>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="nome"
                        id="nome"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(e) => {setNome(e.target.value)}}
                    />
                </div>

                {erroNome && <p className='erro'>{erroNome}</p>}

                <div className='campo'>
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        placeholder="••••••••"
                        value={senha}
                        onChange={(e) => {setSenha(e.target.value)}}
                    />
                </div>

                {erroSenha && <p className='erro'>{erroSenha}</p>}

                <div className='campo'>
                    <label htmlFor="senha">Confirmar Senha</label>
                    <input
                        type="password"
                        id="senha"
                        placeholder="••••••••"
                        value={confirmarSenha}
                        onChange={(e) => {setConfirmarSenha(e.target.value)}}
                    />
                </div>

                {erroConfirmarSenha && <p className='erro'>{erroConfirmarSenha}</p>}

                <button type="submit" className='btn-entrar'>Entrar</button>
            </form>

            <div className='links linkCadastro'>
                <Link to="/login">Já tenho uma conta</Link>
            </div>
        </div>
    )
}