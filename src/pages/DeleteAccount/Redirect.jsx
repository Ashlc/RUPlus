import React from "react";
import logo from "../../assets/RUPLUS.svg";
import { useNavigate } from "react-router-dom";

function Redirect() {
	const timeout = 7000;
	const navigate = useNavigate();

	setTimeout(() => {
		navigate("/");
	}, timeout);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-stdblue">
			<img src={logo} alt="" className="mb-10" />
			<p className="text-center font-bold text-2xl text-white mb-10">AGUARDE</p>
			<div className="w-4/5 text-justify text-lg text-white [text-align-last:center]">
				<p>O saque pode levar de 7 a 10 dias úteis para ser processado.</p>
			</div>
			<div className="flex items-center absolute bottom-20">
				<p className="text-white text-sm">Você será redirecionado.</p>
			</div>
		</div>
	);
}

export default Redirect;
