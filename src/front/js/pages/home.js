import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Bienenidos</h1>
			<Link to={"/login"}>
			<button>Iniciar Sesion</button>
			</Link>
			<Link to={"/signup"}>
			<button>Registrarse</button>
			</Link>
		</div>
	);
};
