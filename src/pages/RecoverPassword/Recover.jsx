import React from "react";
import Form from "./Form";
import logo from "../../assets/RUPLUS.svg";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function Recover() {
	const navigate = useNavigate();
	const [invalid, setInvalid] = React.useState(false);
	const [message, setMessage] = React.useState("");

	const warnTimeout = () => {
		setInvalid(false);
	};

	const warn = () => {
		setInvalid(true);
		setTimeout(warnTimeout, 5000);
	};

	const handleClick = () => {
		const password = document.getElementById("password").value;
		const confirmPassword = document.getElementById("confirmPassword").value;

		if (confirmPassword === "" || password === "") {
			setMessage("Insira uma senha válida.");
			warn();
		} else if (confirmPassword !== "" && password !== "") {
			setMessage("Suas senhas não são iguais.");
			warn();
		} else if (confirmPassword === password) {
			navigate("/");
		}

		document.getElementById("password").value = "";
		document.getElementById("confirmPassword").value = "";
	};
	return (
		<main className="flex flex-col items-center w-full h-screen pt-10 bg-stdblue lg:justify-center lg:pb-20">
			<div className=" flex flex-col w-10/12 gap-8 lg:w-1/5">
				<div className="flex justify-between items-center w-full">
					<p className="text-white w-1/2 text-xl font-extrabold">
						REDEFINA SUA SENHA
					</p>
					<img src={logo} alt="" className="h-8" />
				</div>
				<hr className="border-white w-full" />
				<div className="flex flex-col gap-4">
					<Form />
				</div>
				<Button text={"AVANÇAR"} func={handleClick} />
				{invalid && (
					<div className="flex items-center gap-3 border border-white p-5 rounded-lg">
						<i className="pi pi-exclamation-triangle text-white" />
						<p className="text-white text-justify text-md">{message}</p>
					</div>
				)}
			</div>
		</main>
	);
}

export default Recover;
