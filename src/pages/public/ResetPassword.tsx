import '../../styles/css/ContainerLayout.css';
import restoreKey from '../../assets/restore_key.svg';
import Layout from '../../components/Layout';
import { useNavigate } from 'react-router-dom';
import { isBrowser, isMobile } from 'react-device-detect';
import { color_primary, color_secundary } from '../../styles/colors';
import { useState } from 'react';

const ResetPassword = () => {
    const navigate = useNavigate();

    const [cpf, setCpf] = useState<string>('');

    const handleSubmit = async () => {
        // if (cpf && password) {
        //     if (cpf.length === 11) {
        //         const isLogged = await signin(cpf, password);
        //         if (isLogged) {         
        //             navigate('/');
        //         } else {
        //             alert('Não deu certo')
        //         }
        //     } else {
        //         toast.error('CPF inválido', {
        //             position: "top-right",
        //             autoClose: 5000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             style: { fontSize: 'small' },
        //             progress: undefined,
        //             theme: "light",
        //         });
        //     }
        // } else {
        //     toast.warn('Ambos os campos são de preenchimento obrigatório ', {
        //         position: "top-right",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         style: { fontSize: 'small' },
        //         progress: undefined,
        //         theme: "light",
        //     });
        // }
    }

    return <Layout>
        <section style={{
            width: isMobile ? '80%' : '30%',
            height: isMobile ? '65%' : '90%',
        }} className="containerLayout">
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <img src={restoreKey} alt="Acadium Logo" style={{ width: isMobile ? '50%' : '50%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                <h1 style={{ color: color_primary, fontSize: 'x-large' }}>Redefinir senha</h1>
                <p style={{ color: color_secundary, fontSize: 'smaller', textAlign: 'center' }}>Será aberto um chamado de redefinição de senha com o setor responsável!</p>
            </div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div>
                    <label htmlFor="InputCpf" className="form-label">CPF</label>
                    {isBrowser && <input type="text" className="form-control" id="InputCpf" maxLength={11} value={cpf} onChange={e => setCpf(e.target.value.replace(/\D/g, ''))} placeholder='Informe seu cpf' required/>}
                    {isMobile && <input type="number" className="form-control" id="InputCpf" maxLength={11} value={cpf} onChange={e => setCpf(e.target.value.replace(/\D/g, ''))} placeholder='Informe seu cpf' required />}
                </div>
                <input type='submit' className="btn button" />
            </form>
            <button type="button" className="btn btn-link" style={{
                    color: 'gray',
                    textDecoration: 'none',
                    fontSize: 'small',
                    textAlign: 'center'
                }} onClick={() => navigate('/login')}>Voltar</button>
        </section>
    </Layout>
}

export default ResetPassword;

// eslint-disable-next-line no-lone-blocks
{/* <section style={{ height: '65%', width: '25%' }} className="containerLayout">
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
        </section> */}