import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Image from '../assets/not_found.svg';
import { color_primary } from "../styles/colors";

const NotFound = () => {
    return <Layout>
        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <img src={Image} alt="Error 404: Not Found" style={{ width: '50%' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                <h1 style={{
                    fontSize: 'xxx-large',
                    color: color_primary
                }}>404</h1>
                <h2 style={{
                    fontSize: 'x-large',
                    color: color_primary
                }}>Página não encontrada!</h2>
                <p style={{
                    fontWeight: 300,
                    color: color_primary
                }}>Desculpe, a página que você está procurando não existe</p>
            </div>
            <Link to='/' className="button">Voltar ao início</Link>
        </section>
    </Layout>
}

export default NotFound;