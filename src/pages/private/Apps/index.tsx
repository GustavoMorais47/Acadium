import { FaMicroscope } from "react-icons/fa";
import '../../../styles/css/Apps.css';
import { useContext } from "react";
import ScreenContext from "../../../contexts/ScreenSize/ScreenContext";
import { useNavigate } from "react-router-dom";

const Apps = () => {
    const navigate = useNavigate();
    const screenSize = useContext(ScreenContext);
    
    return <div style={{height: screenSize.height - 60}}>
        <section>
            <h4>Apps</h4>
            <button type='button' className="button appButon" onClick={()=> navigate('/apps/room-manager')}>
                <FaMicroscope size={45} color='#fff' />
                <h6 style={{ margin: 0, color: '#fff', textAlign: 'start' }}>Gerenciador de Salas</h6>
            </button>
        </section>
    </div>
}
export default Apps;