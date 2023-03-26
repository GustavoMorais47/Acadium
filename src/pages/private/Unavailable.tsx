import { useContext } from "react";
import ScreenContext from "../../contexts/ScreenSize/ScreenContext";
import {CgUnavailable} from 'react-icons/cg';
import { color_primary } from "../../styles/colors";
import { isMobile } from "react-device-detect";

const Unavailable = () => {
    const screenSize = useContext(ScreenContext);

    return <div style={{height: screenSize.height - 60, display: 'flex', flexDirection: 'column', justifyContent: 'center' ,alignItems: 'center'}}>
        <CgUnavailable size={isMobile ? '10%' : '15%'} color={color_primary} />
        <h1 style={{ fontSize: 'x-large', color: color_primary, textAlign: 'center'}}>Página indisponível</h1>
    </div>
}

export default Unavailable;