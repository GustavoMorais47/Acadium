import React, { useContext } from 'react';

// import '../styles/Menu.css';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../contexts/Auth/AuthContext';
import { Menu } from './Menu';

type ContainerType = {
    component: JSX.Element
}

const Container = ({ component }: ContainerType) => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await auth.signout();
        navigate('/')
    }

    return <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Menu handleLogout={handleLogout} />
        <section style={{ marginLeft: 60, paddingTop: 10, paddingLeft: 10, paddingRight: 10, width: '100%' }}>
            {component}            
        </section>
    </div>
}

export default Container;