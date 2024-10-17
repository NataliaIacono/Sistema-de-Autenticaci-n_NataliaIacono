import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";


const Private= () => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate("/login"); // Redirigir si no hay token
        }
    }, [navigate]);
   

    return (
        <div>
            <h1>Solo para usuarios registrados</h1>
            <img src="https://th.bing.com/th/id/OIG4.xsFu2O5MJibLpekHXGjE?pid=ImgGn"></img>
            

        </div>
    ) 
}

export default Private