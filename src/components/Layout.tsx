import { useContext } from "react";
import ScreenContext from "../contexts/ScreenSize/ScreenContext";
import logo from '../assets/logo.svg';
import { color_background } from "../styles/colors";
import { isMobile } from "react-device-detect";

const Layout = ({children}:{children: JSX.Element}) => {
    const screenSize = useContext(ScreenContext);
    const pkg = require('../../package.json');

    return <div style={{ 
        height: screenSize.height, 
        width: screenSize.width,
        backgroundColor: color_background,
        userSelect: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        gap: 20
    }}>
        <img width={isMobile ? '70%' : '20%'} src={logo} alt="Acadium Logo" />
        {children}
        <div>
            <p style={{color: 'gray', fontSize: 'small'}}>versão: {pkg.version}</p>
        </div>
    </div>
}

export default Layout;