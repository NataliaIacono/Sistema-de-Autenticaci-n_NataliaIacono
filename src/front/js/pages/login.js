import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const Login= () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {actions, store}= useContext(Context)

    return (
        <div>
            <h1>Login</h1>
            <input type="text" onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="email"></input>
            <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="password"></input>
            <button onClick={() => actions.login(email, password)}>Enviar</button> 

        </div>
    ) 
}

export default Login