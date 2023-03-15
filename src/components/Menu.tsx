import React, { MouseEventHandler } from "react";
import { IconType } from "react-icons";
import { IoAddCircle, IoApps, IoCalendarClear, IoChatbox, IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
import { color_background2, color_primary } from "../styles/colors";
import '../styles/css/Menu.css';
import logo from '../assets/logo_branca.svg';

type MenuType = {
    handleLogout: MouseEventHandler<HTMLButtonElement>
}

type OptionsType = {
    id: number,
    tittle: string,
    to: string,
    icon: IconType
}

const SuperiorOptions: OptionsType[] = [
    { id: 0, tittle: 'Apps', to: '/', icon: IoApps },
    { id: 1, tittle: 'Agendar', to: '/to-schedule', icon: IoCalendarClear },
    { id: 2, tittle: 'Cadastrar', to: '/register', icon: IoAddCircle },
]

const LowerOptions: OptionsType[] = [
    { id: 0, tittle: 'Chamados', to: '/called', icon: IoChatbox },
]

export const Menu = ({ handleLogout }: MenuType) => {
    return <section style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        width: 60,
        backgroundColor: color_primary,
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        paddingTop: 10,
        paddingBottom: 10
    }}>
        <div className='option'>
            <Link to="/"><img src={logo} alt="Logo Acadium" width={30}/></Link>
        </div>
        <hr style={{
            opacity: 0.2,
            border: '1px solid' + color_background2,
            width: 40,
            borderRadius: 10
        }} />
        <div className='menu' style={{ height: '100%' }}>
            {/* Opção Superior */}
            <div>
                {
                    SuperiorOptions.map(op => {
                        return <div className='option' title={op.tittle} key={op.id}>
                            <Link to={op.to}><op.icon size={26} color='#fff' /></Link>
                        </div>
                    })
                }
            </div>
            {/* Opção Inferior */}
            <div>
                {
                    LowerOptions.map(op => {
                        return <div className='option' title={op.tittle} key={op.id}>
                            <Link to={op.to}><op.icon size={26} color='#fff' /></Link>
                        </div>
                    })
                }
                <button title='Sair' className='option' onClick={handleLogout}>
                    <IoLogOut size={26} color='#fff' />
                </button>
            </div>
        </div>
    </section>
}