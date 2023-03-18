import React, { useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import { Menu } from './Menu';
import Home from '../pages/private/Home';
import Called from '../pages/private/Called';
import Apps from '../pages/private/Apps';
import Register from '../pages/private/Register';
import { color_background } from '../styles/colors';

const Container = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    // const {signout} = useContext(AuthContext);
    // const {height} = useContext(ScreenContext);
    // const navigate = useNavigate();

    // const handleLogout = async () => {
    //     await signout();
    //     navigate('/')
    // }

    return <div>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu}/>
        <section onClick={()=>setShowMenu(false)} style={{backgroundColor: color_background, padding: '10px 10px 0 10px'}}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/profile' element={<Home/>}/>
                <Route path='/apps' element={<Apps/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/called' element={<Called/>}/>
            </Routes>           
        </section>
    </div>
}

export default Container;