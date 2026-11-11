import styles from '../css/LoginCadastro.module.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';

export function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erroEmail, setErroEmail] = useState('');
    const [erroSenha, setErroSenha] = useState('');

    function handleSubmit(e: any) {
        e.preventDefault();

        if (!email) {
            setErroEmail('O email é obrigatório!');
            return;
        }

        if (!senha) {
            setErroSenha('A senha é obrigatória!');
            return;
        }

        setErroEmail('');
        setErroSenha('');
        console.log('Login enviado:', { email, senha });
    }
    
    return (
        <div className={styles.card}>
            <h1>Entrar</h1>

            <form onSubmit={handleSubmit}>
                <div className={styles.campo}>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {erroEmail && <p className={styles.erro}>{erroEmail}</p>}

                <div className={styles.campo}>
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        placeholder="••••••••"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>

                {erroSenha && <p className={styles.erro}>{erroSenha}</p>}

                <button type="submit" className={styles.btnEntrar}>Entrar</button>
            </form>

            <div className={styles.links}>
                <a href="#">Esqueci minha senha</a>
                <Link to="/cadastrar">Criar conta</Link>
            </div>
        </div>
    );
}