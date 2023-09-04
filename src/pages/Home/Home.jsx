import React from "react";
import Navigator from "../../components/Navigator/Navigator";
import Saldo from "./Saldo";
import Extract from "./Extract";
import IconButton from "../../components/IconButton/IconButton";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/RUPLUSBLUE.svg";

function Home() {
	const navigate = useNavigate();
	const navigateInsert = () => {
		navigate("/inserir");
	};

	return (
		<div className="relative h-screen flex flex-col justify-center items-center gap-5 pb-10">
			<img src={icon} alt="" className="absolute h-8 top-14" />
			<div className="w-4/5 flex flex-col justify-center items-center gap-8 h-full">
				<Saldo />
				<Extract />
				<IconButton
					text="INSERIR CRÉDITOS"
					icon="pi-credit-card"
					func={navigateInsert}
				/>
			</div>
			<Navigator place={"home"} />
		</div>
	);
}

export default Home;
