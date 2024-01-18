import React from "react";
import creditfail from "../../assets/CREDITCARDFAIL.svg";
import Back from "../../components/Back/Back";

function FailedPayment() {
	return (
		<div className="flex justify-center w-full h-screen">
			<div className="flex flex-col w-9/12 justify-center items-center text-center gap-10">
				<div className="flex flex-col justify-center items-center">
					{/*SVG*/}
					<img src={creditfail} className="w-24" alt="Credit card fail SVG" />
				</div>
				<div className="flex flex-col justify-center items-center">
					{/*Texto GRANDE*/}
					<p className="text-concrete font-extrabold text-4xl">
						SALDO INSUFICIENTE
					</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					{/*Textinho*/}
					<p className="font-medium text-lg text-midnight">
						Insira créditos na sua carteira virtual para utilizar o RU+
					</p>
				</div>
				<Back href={"/home"} col={"midnight"} />
			</div>
		</div>
	);
}

export default FailedPayment;
