import React from "react";
import "primeicons/primeicons.css";
import { useNavigate } from "react-router-dom";

function Settings() {
	const navigate = useNavigate();

	const handleClick = async () => {
		try {
			const id = localStorage.getItem("idUser");
			console.log("id: ", id);
			const response = await fetch(`http://localhost:3001/user/delete/${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (response.status !== 200) {
				console.log("Error.");
			} else {
				navigate("/");
			}
			const result = await response.json();
			console.log(result);
		} catch (error) {
			console.log(error);
			return;
		}
	};

	const handleSignOut = () => {
		localStorage.clear();
		navigate("/");
	};

	return (
		<div className="flex flex-col gap-2 tall:gap-4">
			<hr />
			<p className="text-silver">CONFIGURAÇÕES</p>
			<hr className="mb-4" />
			<div className="flex flex-col gap-10 tall:gap-16">
				<button onClick={handleSignOut}>
					<div className="flex gap-3 items-center text-concrete">
						<p className="font-medium">SAIR</p>
						<i className="pi pi-sign-out font-medium"></i>
					</div>
				</button>
				<a href="/extrato">
					<p className="font-medium text-midnight">VISUALIZAR EXTRATO</p>
				</a>
				<a href="/mudar-senha">
					<p className="font-medium text-midnight">ALTERAR SENHA</p>
				</a>
				<a href="/apagar" onClick={handleClick}>
					<p className="font-medium text-stdred">APAGAR CONTA</p>
				</a>
			</div>
		</div>
	);
}

export default Settings;
