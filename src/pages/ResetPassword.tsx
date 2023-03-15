import '../styles/css/ContainerLayout.css';
import restoreKey from '../assets/restore_key.svg';
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { color_primary, color_secundary } from '../styles/colors';
import { useState } from 'react';

const ResetPassword = () => {
    const [cpf, setCPF] = useState<string>('');
    return <Layout>
        <section style={{ height: '65%', width: '25%' }} className="containerLayout">
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <img src={restoreKey} alt="Acadium Logo" style={{ width: '50%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                <h1 style={{color: color_primary, fontSize: 'x-large'}}>Redefinir senha</h1>
                <p style={{color: color_secundary, fontSize: 'smaller', textAlign: 'center'}}>Informe seu cpf, será aberto um chamado para redefinição da senha com o setor responsável. As instruções serão enviadas para o e-mail cadastrado.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '95%', display: 'flex', flexDirection: 'column', gap: 10}}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                        <label htmlFor="cpfInput" style={{fontSize: 'small'}}>CPF</label>
                        <input id="cpfInput" name="cpfInput" type='text' placeholder="Insira seu cpf" required
                        maxLength={11}
                        value={cpf}
                        onChange={(e)=> setCPF(e.target.value.replace(/\D/g,''))} />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                        <button className='button'>Redefinir</button>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Link to="/" style={{color: 'gray', textDecoration: 'none', fontSize: 'small'}}>Voltar</Link>
            </div>
        </section>
    </Layout>
}

export default ResetPassword