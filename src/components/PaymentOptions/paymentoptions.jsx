import React, { useState } from "react";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function PaymentOptions({ val, setVal }) {
	const [displayCredit, setDisplayCredit] = useState("hidden");
	const [displayBoleto, setDisplayBoleto] = useState("block");
	const [displayPix, setDisplayPix] = useState("hidden");

	const handleCheckCredit = () => {
		displayCredit === "hidden"
			? setDisplayCredit("block")
			: setDisplayCredit("hidden");
		setDisplayBoleto("hidden");
		setDisplayPix("hidden");
		setVal("credit");
	};

	const handleCheckBoleto = () => {
		displayBoleto === "hidden"
			? setDisplayBoleto("block")
			: setDisplayBoleto("hidden");
		setDisplayCredit("hidden");
		setDisplayPix("hidden");
		setVal("boleto");
	};

	const handleCheckPix = () => {
		displayPix === "hidden" ? setDisplayPix("block") : setDisplayPix("hidden");
		setDisplayBoleto("hidden");
		setDisplayCredit("hidden");
		setVal("pix");
	};

	return (
		<div
			id="paymentoptions"
			className="border border-silver w-full p-4 flex flex-col rounded-2xl gap-4"
			selected={val}>
			<p className="text-stdblue font-semibold text-sm">
				ESCOLHA UMA FORMA DE PAGAMENTO
			</p>
			<div className="flex flex-col gap-4">
				<div className="flex items-center gap-4 w-full h-fit">
					<button onClick={handleCheckBoleto}>
						<div className="h-6 w-6 border border-stdblue rounded-xl flex items-center justify-center">
							<div
								className={
									"h-3 w-3 bg-stdblue rounded-xl " + displayBoleto
								}></div>
						</div>
					</button>
					<p className="text-midnight">BOLETO</p>
				</div>
				<div className="flex items-center gap-4 w-full h-fit">
					<button onClick={handleCheckCredit}>
						<div className="h-6 w-6 border border-stdblue rounded-xl flex items-center justify-center">
							<div
								className={
									"h-3 w-3 bg-stdblue rounded-xl " + displayCredit
								}></div>
						</div>
					</button>
					<p className="text-midnight">CARTÃO DE CRÉDITO</p>
				</div>
				<div className="flex items-center gap-4 w-full h-fit">
					<button onClick={handleCheckPix}>
						<div className="h-6 w-6 border border-stdblue rounded-xl flex items-center justify-center">
							<div
								className={"h-3 w-3 bg-stdblue rounded-xl " + displayPix}></div>
						</div>
					</button>
					<p className="text-midnight">PIX</p>
				</div>
			</div>
		</div>
	);
}

export default PaymentOptions;
