import React from "react";
//Dependencias
import { Route, Routes } from "react-router-dom";

//Contextos
import { RequireAuth } from "../contexts/Auth/RequireAuth";

//Páginas
import ResetPassword from "../pages/ResetPassword";
import NotFound from "../pages/NotFound";
import Container from "../components/Container";
import Home from "../pages/Home";

const Router = () => {
    return <Routes>
        {/*Pública*/}
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<NotFound/>}/>
        {/*Privada*/}
        <Route path="/" element={
            <RequireAuth>
                <Container component={<Home/>}/>
            </RequireAuth>
        } />
    </Routes>
}

export default Router;