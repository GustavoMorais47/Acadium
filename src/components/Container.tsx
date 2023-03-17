import React, { useContext } from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';

import { AuthContext} from '../contexts/Auth/AuthContext';
import { Menu } from './Menu';
import Home from '../pages/private/Home';
import Called from '../pages/private/Called';
import Apps from '../pages/private/Apps';
import ToSchedule from '../pages/private/ToSchedule';
import Register from '../pages/private/Register';
import { color_background } from '../styles/colors';
import ScreenContext from '../contexts/ScreenSize/ScreenContext';

type ContainerType = {
    children?: any
}

const Container = ({ children }: ContainerType) => {
    const {signout} = useContext(AuthContext);
    const {height} = useContext(ScreenContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signout();
        navigate('/')
    }

    return <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Menu handleLogout={handleLogout} />
        <section style={{ marginLeft: 60, paddingTop: 10, paddingLeft: 10, paddingRight: 10, backgroundColor: color_background,height: height - 10 ,width: '100%' }}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/apps' element={<Apps/>}/>
                <Route path='/to-schedule' element={<ToSchedule/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/called' element={<Called/>}/>
            </Routes>           
        </section>
    </div>
}

export default Container;