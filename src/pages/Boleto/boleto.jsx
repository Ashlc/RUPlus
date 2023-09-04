import React from "react";
import icon from "../../assets/barcode.svg";
import Navigator from "../../components/Navigator/Navigator";
import Button from "../../components/Button/Button";
import Back from "../../components/Back/Back";

function Boleto() {
	const amount = 0;
	const expiration = 2;
	const number = "34191.75124 34567.871230 41234.560005 2 94230000026035";
	const copyToClipboard = () => {
		navigator.clipboard.writeText(number);
	};
	return (
		<div className="flex flex-col items-center h-screen w-full">
			{/* HEADER */}
			<div className="w-full flex justify-center items-center bg-stdblue text-white rounded-b-2xl h-14">
				<p className="font-semibold text-base">BOLETO</p>
			</div>
			{/* PAGE */}
			<div className="w-10/12 h-[80vh] flex flex-col gap-10 h-full items-center justify-center">
				{/* BARCODE ICON */}
				<img src={icon} alt="barcode icon" className="h-16" />
				{/* SALDO */}
				<div className="border border-silver flex gap-3 rounded-3xl justify-center w-full py-6 items-center">
					<p className="text-concrete font-extrabold text-3xl">R$</p>
					<b className="text-midnight font-extrabold text-4xl">{amount}</b>
				</div>
				{/* BOLETO CODE */}
				<div className="border border-silver flex rounded-3xl justify-center w-full py-6 items-center">
					<p className="text-concrete font-normal text-xs text-center">
						{number}
					</p>
				</div>
				{/* COPY BOLETO CODE */}
				<div className="flex flex-col w-full gap-2">
					<Button col="blue" text={"COPIAR"} func={copyToClipboard} />
					<p className="text-xs flex justify-center text-[#7F8C8D]">
						{"VALIDADE: " + expiration + " DIAS ÚTEIS"}
					</p>
				</div>
				{/* VOLTAR BUTTON */}
				<Back href={"/inserir"} col="blue" />
			</div>
			<Navigator />
		</div>
	);
}

export default Boleto;
