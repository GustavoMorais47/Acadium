import React, { useContext } from "react";
import { color_background2, color_primary, color_secundary } from "../styles/colors";
import '../styles/css/Menu.css';
import logo from '../assets/logo.svg';
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import { HiArrowSmLeft, HiMenu, HiMenuAlt2 } from 'react-icons/hi';
import { IoAddCircle, IoApps, IoChatbox } from 'react-icons/io5';
import { FaUserAlt } from 'react-icons/fa';
import { IconType } from "react-icons";
import { Link, useNavigate } from "react-router-dom";
import ScreenContext from "../contexts/ScreenSize/ScreenContext";
import { AuthContext } from "../contexts/Auth/AuthContext";

type OptionsType = {
    id: number,
    title: string,
    to: string,
    icon: IconType
}

const SuperiorOptions: OptionsType[] = [
    { id: 0, title: 'Apps', to: '/apps', icon: IoApps },
    { id: 2, title: 'Cadastrar', to: '/register', icon: IoAddCircle },
]

const LowerOptions: OptionsType[] = [
    { id: 0, title: 'Chamados', to: '/called', icon: IoChatbox },
]

export const Menu = ({ showMenu, setShowMenu }: { showMenu: boolean, setShowMenu: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const screenSize = useContext(ScreenContext);
    const handleOption = (to: string) => {
        setShowMenu(false);
        navigate(to);
    }

    return <>
        <section style={{
            height: 50,
            paddingLeft: 10,
            paddingRight: 10,
            width: '100%',
            backgroundColor: color_background2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <button type="button" className="btn btn-light" onClick={() => { setShowMenu(!showMenu) }}>
                {showMenu === false ? <HiMenu size={28} color={color_secundary} /> : <HiMenuAlt2 size={28} color={color_secundary} />}
            </button>
            <Link to="/" style={{width: isMobile ? '50%' : '20%'}}><img src={logo} alt="Acadium Logo" /></Link>
            <BrowserView>
                <button type="button" className="btn btn-light" style={{ display: 'flex', flexDirection: 'row', gap: 7 }}><label>Olá {user?.name}</label><FaUserAlt size={20} color={color_secundary} /></button>
            </BrowserView>
            <MobileView>
                <div />
            </MobileView>
        </section>
        <BrowserView>
            <section style={{
                display: showMenu === true ? undefined : 'none',
                backgroundColor: color_primary,
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: 200,
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 10
            }}>
                <div style={{ height: 50, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <button type='button' onClick={() => setShowMenu(false)} style={{ background: 'none', border: 'none' }}>
                        <HiArrowSmLeft size={28} color={color_background2} />
                    </button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: screenSize.height - 60 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                        {
                            SuperiorOptions.map(op => {
                                return <button type='button' className="buttonOptionMenu" onClick={() => handleOption(op.to)} title={op.title} key={op.id}>
                                    <op.icon size={20} color='#fff' />
                                    <label>{op.title}</label>
                                </button>
                            })
                        }
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                        {
                            LowerOptions.map(op => {
                                return <button type='button' className="buttonOptionMenu" onClick={() => handleOption(op.to)} title={op.title} key={op.id}>
                                    <op.icon size={20} color='#fff' />
                                    <label>{op.title}</label>
                                </button>
                            })
                        }
                    </div>
                </div>
            </section>
        </BrowserView>
        <MobileView>
            <section style={{
                display: showMenu === true ? undefined : 'none',
                backgroundColor: color_primary,
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 10
            }}>
                <div style={{ height: 50, display: 'flex', flexDirection: 'row', justifyContent: 'end', alignItems: 'center' }}>
                    <button type="button" className="btn-close" aria-label="Close" style={{ backgroundColor: color_background2 }} onClick={() => setShowMenu(false)}></button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: screenSize.height - 60 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {
                            SuperiorOptions.map(op => {
                                return <button type='button' className="buttonOptionMenu" onClick={() => handleOption(op.to)} title={op.title} key={op.id} style={{ fontSize: 'large', gap: 10 }}>
                                    <op.icon size={24} color='#fff' />
                                    <label>{op.title}</label>
                                </button>
                            })
                        }
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {
                            LowerOptions.map(op => {
                                return <button type='button' className="buttonOptionMenu" onClick={() => handleOption(op.to)} title={op.title} key={op.id} style={{ fontSize: 'large', gap: 10 }}>
                                    <op.icon size={24} color='#fff' />
                                    <label>{op.title}</label>
                                </button>
                            })
                        }
                    </div>
                </div>
            </section>
        </MobileView>
    </>
}