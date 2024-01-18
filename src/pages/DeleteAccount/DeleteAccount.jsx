import { React, useState } from "react";
import logo from "../../assets/RUPLUS.svg";
import Button from "../../components/Button/Button";
import Back from "../../components/Back/Back";
import BanksSelect from "./BanksSelect";
import { useNavigate } from "react-router-dom";

//import "primeicons/primeicons.css";

function DeleteAccount() {
	const navigate = useNavigate();

	const [checked, setChecked] = useState(true);
	const [display, setDisplay] = useState("hidden");

	const handleCheck = () => {
		display === "hidden" ? setDisplay("block") : setDisplay("hidden");
	};

	const handleSubmit = () => {
		navigate("/tchauzinho");
	};

	return (
		<div className="flex flex-col items-center w-full min-h-screen pt-10 bg-stdblue">
			<div className=" flex flex-col w-10/12 gap-8">
				<div className="flex justify-between w-full">
					<Back href={"/usuario"} />
					<img src={logo} alt="" className="h-6" />
				</div>
				<hr className="border-white w-full" />
				<div className="flex flex-col w-full gap-1">
					<label htmlFor="name" className="text-white text-sm">
						NOME COMPLETO
					</label>
					<input
						id="name"
						type="text"
						className="text-midnight rounded-md h-8 px-2 border-silver border focus:outline-stdorange text-sm"
					/>
				</div>
				<div className="flex flex-col w-full gap-1">
					<label htmlFor="name" className="text-white text-sm">
						BANCO DESTINATÁRIO
					</label>
					<BanksSelect />
				</div>
				<div className="flex flex-col w-full gap-1">
					<label htmlFor="name" className="text-white text-sm">
						CPF
					</label>
					<input
						id="name"
						type="text"
						className="text-midnight rounded-md h-8 px-2 border-silver border focus:outline-stdorange text-sm"
					/>
				</div>
				<div className="flex w-full gap-4">
					<div className="flex flex-col flex-none w-1/4 gap-1">
						<label htmlFor="name" className="text-white text-sm">
							AGÊNCIA
						</label>
						<input
							id="agency"
							type="number"
							className="text-midnight rounded-md h-8 px-2 border-silver border focus:outline-stdorange text-sm"
						/>
					</div>
					<div className="flex flex-col grow gap-1">
						<label htmlFor="name" className="text-white text-sm">
							CONTA
						</label>
						<input
							id="account"
							type="number"
							className="text-midnight rounded-md w-full h-8 px-2 border-silver border focus:outline-stdorange text-sm"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<label htmlFor="type" className="text-white text-sm">
						TIPO DE CONTA
					</label>
					<select
						name="type"
						id="type"
						className="text-midnight text-sm rounded-md h-8 px-2 border-silver border checked:outline-stdorange">
						<option
							value={null}
							className="appearance-none text-midnight bg-white text-sm">
							--
						</option>
						<option
							value="student"
							className="appearance-none text-midnight bg-white text-sm">
							Conta poupança
						</option>
						<option
							value="employee"
							className="appearance-none text-midnight bg-white text-sm">
							Conta corrente
						</option>
					</select>
				</div>
				<div className="flex w-full h-fit gap-4">
					<div className="w-6">
						<button onClick={handleCheck}>
							<div className="h-6 w-6 border border-white rounded flex items-center justify-center">
								<div className={"h-3 w-3 bg-white rounded " + display}></div>
							</div>
						</button>
					</div>
					<p className="text-white text-justify text-sm">
						Confirmo que desejo apagar minha carteira virtual RU+.
					</p>
				</div>
				<Button text={"AVANÇAR"} func={handleSubmit} />
				<hr className="border-white w-full my-5" />
			</div>
		</div>
	);
}

export default DeleteAccount;
