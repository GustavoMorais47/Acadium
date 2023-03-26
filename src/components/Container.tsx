import React, { useContext, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Menu } from './Menu';
import { color_background } from '../styles/colors';
import Unavailable from '../pages/private/Unavailable';
import Apps from '../pages/private/Apps';
import RoomManager from '../pages/private/Apps/RoomManager';
import ScreenContext from '../contexts/ScreenSize/ScreenContext';
import NewRoom from '../pages/private/Apps/RoomManager/NewRoom';
import ReserveRoom from '../pages/private/Apps/RoomManager/Reserve';

const Container = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    // const {signout} = useContext(AuthContext);
    const { height } = useContext(ScreenContext);
    // const navigate = useNavigate();

    // const handleLogout = async () => {
    //     await signout();
    //     navigate('/')
    // }

    return <div>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        <section onClick={() => setShowMenu(false)} style={{ minHeight: height - 50, backgroundColor: color_background, padding: '10px 10px 0 10px' }}>
            <Routes>
                <Route path='/' element={<Unavailable />} />
                <Route path='/apps' element={<Outlet />}>
                    <Route path='/apps/' element={<Apps />} />
                    <Route path="/apps/room-manager" element={<Outlet />}>
                        <Route path='/apps/room-manager/' element={<RoomManager />} />
                        <Route path='/apps/room-manager/new' element={<NewRoom />} />
                        <Route path='/apps/room-manager/reserve' element={<ReserveRoom />} />
                    </Route>
                </Route>
            </Routes>
        </section>
    </div>
}

export default Container;