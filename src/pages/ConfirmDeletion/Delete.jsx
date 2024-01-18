import React from "react";
import logo from "../../assets/RUPLUS.svg";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Back from "../../components/Back/Back";

function Delete() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/apagar/saque");
	};

	return (
		<div className="flex flex-col items-center w-full min-h-screen pt-10 bg-stdblue lg:justify-center lg:pb-20">
			<div className=" flex flex-col w-10/12 gap-5 lg:w-1/5">
				<div className="flex justify-between items-center w-full">
					<p className="text-white w-1/2 text-xl font-extrabold">
						APAGAR CONTA
					</p>
					<img src={logo} alt="" className="h-8" />
				</div>
				<hr className="border-white w-full" />
				<p className="text-white text-justify text-md">
					Tem certeza que deseja apagar sua conta? Esta ação é irreversível.
				</p>
				<input
					id="password"
					type="password"
					placeholder="Digite sua senha para prosseguir."
					className="text-midnight rounded-md h-10 px-2 mb-2 border-silver border focus:outline-stdorange text-sm"
				/>
				<Button text={"AVANÇAR"} func={handleClick} />
			</div>
			<div className="mt-20">
				<Back href={"/usuario"} />
			</div>
		</div>
	);
}

export default Delete;
