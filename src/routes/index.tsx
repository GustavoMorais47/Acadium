import React from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "../pages/private/Home";
import Login from "../pages/public/Login";
import ResetPassword from "../pages/public/ResetPassword";
import NotFound from "../pages/public/NotFound";

// const PrivateRouter = ({children}: any) =>{
//     return children
// }

const Router = () => {
    return <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/" element={<Home/>}/> */}
    </Routes>
}

export default Router;

// eslint-disable-next-line no-lone-blocks
{/* <Routes>
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<RequireAuth><Container /></RequireAuth>}>
            <Route path='/' element={<Home />} />
            <Route path='/apps' element={<Apps />} />
            <Route path='/to-schedule' element={<ToSchedule />} />
            <Route path='/register' element={<Register />} />
            <Route path='/called' element={<Called />} />
        </Route>
    </Routes> */}