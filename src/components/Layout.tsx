//Hook
import { useContext } from "react";
import { Link } from "react-router-dom";

//Contexto
import ScreenContext from "../contexts/ScreenSize/ScreenContext";

//Imagem
import logo from '../assets/logo.svg';
import { color_background } from "../styles/colors";

const Layout = ({children}:{children: JSX.Element}) => {
    const screenSize = useContext(ScreenContext);
    const pkg = require('../../package.json');

    return <div style={{ 
        height: screenSize.height, 
        width: screenSize.width, 
        gap: 50, 
        userSelect: 'none',
        backgroundColor: color_background,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
        }}>
        <Link to="/" style={{ width: '20%' }}><img src={logo} alt="Acadium Logo" /></Link>
        {children}
        <div>
            <p style={{color: 'gray', fontSize: 'small'}}>versão: {pkg.version}</p>
        </div>
    </div>
}

export default Layout;