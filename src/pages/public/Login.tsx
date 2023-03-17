import { useContext, useState } from "react";
import Layout from "../../components/Layout";
import '../../styles/css/ContainerLayout.css';
import { color_primary, color_secundary } from "../../styles/colors";
import { isBrowser, isMobile } from "react-device-detect";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
    const { signin } = useContext(AuthContext);
    const navigate = useNavigate();

    const [cpf, setCpf] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (cpf.length === 11) {
            const isLogged = await signin(cpf, password);
            if (isLogged) {
                navigate('/');
            } else {
                alert('Não deu certo')
            }
        } else {
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
    }

    return <Layout>
        <section style={{
            width: isMobile ? '80%' : '30%',
            height: isMobile ? '65%' : '90%'
        }} className="containerLayout">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{ color: color_primary, fontSize: 'x-large' }}>Login</h1>
                <p style={{ color: color_secundary, fontSize: 'smaller', textAlign: 'center' }}>Insira as informações abaixo para entrar na plataforma!</p>
            </div>
            <div>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <div>
                        <label htmlFor="InputCpf" className="form-label">CPF</label>
                        {isBrowser && <input type="text" className="form-control" id="InputCpf" maxLength={11} value={cpf} onChange={e => setCpf(e.target.value.replace(/\D/g, ''))} placeholder='Informe seu cpf' required />}
                        {isMobile && <input type="number" className="form-control" id="InputCpf" maxLength={11} value={cpf} onChange={e => setCpf(e.target.value.replace(/\D/g, ''))} placeholder='Informe seu cpf' required />}
                    </div>
                    <div>
                        <label htmlFor="InputPassword" className="form-label">Senha</label>
                        <input type="password" className="form-control" id="InputPassword" value={password} onChange={e => setPassword(e.target.value)} placeholder='Informe sua senha' required />
                    </div>
                    <input type='submit' className="btn button" />
                    <p style={{ textAlign: 'center', fontSize: 'small' }}>Esqueceu a senha? <Link to='/reset-password'>Redefinir senha</Link></p>
                </form>
            </div>
        </section>
    </Layout>
}

export default Login;