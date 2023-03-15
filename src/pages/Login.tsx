import React, { useContext, useState } from "react";
// import '../styles/LoginPage.css';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth/AuthContext";
import Layout from "../components/Layout";
import { color_primary, color_secundary, color_tertiary } from "../styles/colors";
import { toast } from "react-toastify";

const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [cpf, setCpf] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async () => {
        if (cpf && password) {
            if (cpf.length === 11) {
                const isLogged = await auth.signin(cpf, password);
                if (isLogged) {
                    navigate('/');
                } else {
                    alert('Não deu certo')
                }
            }else{
                toast.error('CPF inválido', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    style: { fontSize: 'small' },
                    progress: undefined,
                    theme: "light",
                    });
            }
        } else {
            toast.warn('Ambos os campos são de preenchimento obrigatório ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                style: { fontSize: 'small' },
                progress: undefined,
                theme: "light",
            });
        }
    }

    return <Layout>
        <section style={{ height: '65%', width: '25%' }} className="containerLayout">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <h1 style={{ color: color_primary, fontSize: 'x-large' }}>Login</h1>
                <p style={{ color: color_secundary, fontSize: 'smaller', textAlign: 'center' }}>Insira as informações abaixo para entrar na plataforma!</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '95%', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                        <label htmlFor="cpfInput">CPF</label>
                        <input id="cpfInput" name="cpfInput"
                            type='text'
                            value={cpf}
                            maxLength={11}
                            onChange={e => setCpf(e.target.value.replace(/\D/g, ""))}
                            placeholder="Insira seu CPF"
                            required />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                        <label htmlFor="senhaInput">Senha</label>
                        <input id="senhaInput" name="senhaInput"
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Insira sua senha"
                            required />
                    </div>
                    <button onClick={handleLogin} className="button">Entrar</button>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5, fontSize: 'small', color: color_primary }}>
                        <p>Esqueceu sua senha?</p>
                        <Link to="/reset-password" style={{ color: color_tertiary, textDecoration: 'none' }}>Redefinir senha</Link>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
}

export default Login