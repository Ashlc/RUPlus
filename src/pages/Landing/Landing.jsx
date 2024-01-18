import "./Landing.css";
import { React, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/RUPLUS.svg";
import Button from "../../components/Button/Button";
import { Toast } from "primereact/toast";

function Landing() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const toast = useRef(null);


	useEffect(() => {
		if (localStorage.getItem("idUser")) {
			navigate("/home");
		}
		
		const listener = (e) => {
			if (e.code === "Enter" || e.code === "NumpadEnter") handleLogIn();
		};

		document.addEventListener("keydown", listener);
		return () => {
			document.removeEventListener("keydown", listener);
		};
	});

	const handleLogIn = async () => {
		if (email === "" || password === "") {
			toast.current.show({
				severity: "error",
				summary: "Erro",
				detail: "Preencha todos os campos",
				life: 8000,
			});
			return;
		}

		toast.current.clear();

		try {
			const values = { email: email, password: password };
			const response = await fetch("http://localhost:3001/user/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});
			if (response.status !== 200) {
				console.log("Error.");
			} else {
				navigate("/home");
			}
			const data = await response.json();
			if (data.error) {
				toast.current.show({
					severity: "error",
					summary: "Erro",
					detail: "Email ou senha incorretos",
					life: 8000,
				});
			}
			localStorage.setItem("idUser", data.id);
			localStorage.setItem("idWallet", data.wallet.pop().id);
			localStorage.setItem("name", data.name);
		} catch (error) {
			toast.current.show({
				severity: "error",
				summary: "Erro",
				detail: "Problemas com o servidor, tente novamente mais tarde",
				life: 8000,
			});
		}
	};

	const handleSignUp = () => {
		navigate("/cadastro");
	};

	return (
		<div className="flex justify-center w-full h-screen bg-stdblue">
			<Toast ref={toast} />
			<div className="flex flex-col justify-center items-center text-center gap-10">
				<div className="gap-2 flex flex-col justify-center items-center">
					<img src={logo} alt="" className="w-36" />
					<p className="font-medium text-white">Carteira Virtual</p>
				</div>
				<div className="flex flex-col justify-center items-center gap-3">
					<input
						id="email"
						type="email"
						placeholder="Email"
						className="rounded-lg border-silver border w-72 pl-3 py-1 text-midnight focus:outline-stdorange"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						id="password"
						type="password"
						placeholder="Senha"
						className="rounded-lg border-silver border w-72 pl-3 py-1 text-midnight focus:outline-stdorange"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button text={"ENTRAR"} func={handleLogIn} />
					<a href="/recuperar">
						<p className="text-white font-light text-sm underline underline-offset-4">
							Esqueceu sua senha?
						</p>
					</a>
					<hr className="border-white w-full my-10" />
					<p className="text-white">PRIMEIRA VEZ?</p>
					<Button text={"CADASTRE-SE"} func={handleSignUp} />
				</div>
			</div>
		</div>
	);
}

export default Landing;
