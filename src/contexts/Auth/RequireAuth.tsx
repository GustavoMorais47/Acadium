import React, { useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export const RequireAuth = ({children}: {children: React.ReactElement})=>{
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!auth.user){
            navigate('/login');
            console.log('Ué')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return children;
}