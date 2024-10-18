import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


const Private = () => {

    const { actions } = useContext(Context);
    const navigate = useNavigate();


    useEffect(() => {
        const checkAuth = async () => {
            const isAuthenticated = await actions.autentificar();
            if (!isAuthenticated) {
                navigate("/"); // Redirigir si el token es inválido o no existe
            }
        };

        checkAuth();
    }, [actions, navigate]);


    return (
        <div>
            <h1>Solo para usuarios registrados</h1>
            <img src="https://th.bing.com/th/id/OIG4.xsFu2O5MJibLpekHXGjE?pid=ImgGn"></img>


        </div>
    )
}

export default Private