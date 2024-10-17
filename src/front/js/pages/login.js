import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Login= () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {actions, store}= useContext(Context)
    const navigate = useNavigate();

 
    return (
        <div className="d-flex justify-content-center mt-5">
            <h1>Login</h1>
            <input type="text" onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="email" autoComplete="off"></input>
            <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="password" autoComplete="off"></input>
            
            <button className="btn btn-primary me-3" onClick={async() => {
                try {
                    await actions.login(email, password);
                    console.log("Inicio de sesión exitoso");
                    setEmail(""); // Limpiar el campo de email
                    setPassword(""); // Limpiar el campo de password
                    navigate("/private"); 
                } catch (error) {
                    alert(error);
                }
            }}>Enviar</button>

        </div>
    ) 
}

export default Login