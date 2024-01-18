import React from "react";
import creditfail from "../../assets/RUPLUSGRAY.svg";
import Back from "../../components/Back/Back";

function ClosedRU() {
	return (
		<div className="flex justify-center w-full h-screen">
			<div className="flex flex-col w-9/12 justify-center items-center text-center gap-24">
				<div className="flex flex-col justify-center items-center gap-5">
					{/*SVG*/}
					<img src={creditfail} alt="RU+ SVG" />
					<div className="flex flex-col justify-center items-center">
						{/*Texto GRANDE*/}
						<p className="text-concrete font-extrabold text-4xl">
							INDISPONÍVEL
						</p>
					</div>
				</div>

				<div className="flex flex-col justify-center items-center">
					{/*Textinho*/}
					<p className="font-medium text-lg text-midnight">
						Verifique o horário de funcionamento.
					</p>
				</div>
				<div className = "fixed bottom-10">
					<Back href={"/home"}  col = {"midnight"}/>
				</div>

			</div>
		</div>
	);
}

export default ClosedRU;
