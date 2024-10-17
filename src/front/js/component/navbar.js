import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

	const navigate = useNavigate();
	const Logout = () => {
        
        localStorage.removeItem("token");
        navigate("/");
    };
	
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<Link to="/">
					<span className="navbar-brand mb-0 h1" onClick={Logout} >Cerrar sesión</span>
				</Link>
			</div>
		</nav>
	);
};
