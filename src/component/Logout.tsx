import React from "react"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import logout from "../redux/services/logout";

function CerrerSeccion() {
    const navigate = useNavigate();

    const cerrarsession = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        logout().then((res)=>{
            navigate('/');
        })
    }

    return (
        <>
            <button  onClick={cerrarsession} className="font-medium text-indigo-600 hover:text-indigo-500 botton-cerrar">cerrar sesion</button>
        </>


    )
}

export default CerrerSeccion