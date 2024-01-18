import React from "react";
import WatchIcon from "../../assets/chronic.svg";
import "./waitingconfig.css";
import Back from "../../components/Back/Back";

function WaitingConfirmation() {
	return (
		<div className="bg-stdblue flex flex-col justify-center items-center gap-4 min-h-screen">
			<div className="flex justify-center items-center">
				<img src={WatchIcon} alt="" />
			</div>
			<p className="flex justify-center font-bold text-lg text-white">
				AGUARDANDO CONFIRMAÇÃO
			</p>
			<p className="text-white w-10/12 text-center flex justify-center font-normal">
				Quando seu pagamento for confirmado, seus créditos estarão disponíveis
				na sua carteira.
			</p>
			<div className="flex items-center absolute bottom-20">
				<Back href={"/home"} />
			</div>
		</div>
	);
}
export default WaitingConfirmation;
