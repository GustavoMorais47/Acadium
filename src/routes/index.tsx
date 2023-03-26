import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "../pages/public/Login";
import ResetPassword from "../pages/public/ResetPassword";
import NotFound from "../pages/public/NotFound";
import { RequireAuth } from "../contexts/Auth/RequireAuth";
import Container from "../components/Container";

const Router = () => {
    return <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<RequireAuth><Container /></RequireAuth>}>
            <Route path='/' element={<Outlet />} />
            <Route path='/apps' element={<Outlet />}>
                <Route path='/apps/' element={<Outlet />} />
                <Route path="/apps/room-manager" element={<Outlet />}>
                    <Route path='/apps/room-manager/' element={<Outlet />} />
                    <Route path='/apps/room-manager/new' element={<Outlet />} />
                    <Route path='/apps/room-manager/reserve' element={<Outlet />} />
                </Route>
            </Route>
        </Route>
    </Routes>
}

export default Router;