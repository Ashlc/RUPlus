import React from "react";
import Navigator from "../../components/Navigator/Navigator";
import Saldo from "./Saldo";
import Extract from "./Extract";
import IconButton from "../../components/IconButton/IconButton";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/RUPLUSBLUE.svg";

function Home() {
	const navigate = useNavigate();
	const name = localStorage.getItem("name");
	const navigateInsert = () => {
		navigate("/inserir");
	};

	return (
		<main className="relative h-screen flex flex-col justify-center items-center gap-5 pb-14 tall:pb-10">
			<div className="justify-between w-4/5 hidden tall:flex absolute top-14">
				<img src={icon} alt="" className="h-6 tall:h-8" />
				{name ? (
					<div className="flex w-fit gap-2">
						<p className="text-stdblue text-2xl tall:text-3xl">{"Olá, "}</p>
						<p className="text-stdblue text-2xl tall:text-3xl font-bold">
							{name}
						</p>
					</div>
				) : (
					<div></div>
				)}
			</div>
			<div className="w-4/5 absolute flex flex-col items-center tall:top-32 top-10 gap-8 h-full">
				<Saldo />
				<Extract />
			</div>
				<div className="w-4/5 absolute bottom-32 tall:bottom-40">
					<IconButton
						text="INSERIR CRÉDITOS"
						icon="pi-credit-card"
						func={navigateInsert}
					/>
				</div>
			<Navigator place={"home"} />
		</main>
	);
}

export default Home;
