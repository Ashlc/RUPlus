import React from "react";
import icon from "../../assets/credit_card.svg";
import Navigator from "../../components/Navigator/Navigator";
import Button from "../../components/Button/Button";
import Back from "../../components/Back/Back";
import { useLocation, useNavigate } from "react-router-dom";

function InsertCreditCard() {
	const location = useLocation();
	const amount = location.state.amount;
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/confirmar");
	};
	return (
		<div className="flex flex-col items-center h-screen w-full">
			{/* HEADER */}
			<div className="w-full flex justify-center items-center bg-stdblue text-white rounded-b-2xl h-14">
				<p className="font-semibold text-base">CRÉDITO</p>
			</div>
			{/* PAGE */}
			<div className="w-10/12 h-[80vh] flex flex-col gap-10 h-full items-center justify-center">
				{/* BARCODE ICON */}
				<img src={icon} alt="barcode icon" className="h-16" />
				{/* SALDO */}
				<div className="border border-silver flex gap-3 rounded-3xl justify-center w-full py-6 items-center">
					<p className="text-concrete font-extrabold text-3xl">R$</p>
					<b className="text-midnight font-extrabold text-4xl">
						{amount.replace(".", ",")}
					</b>
				</div>
				{/* FIELDSET 1 */}
				<div className="w-full">
					<fieldset>
						<legend className="text-[#2D3436] font-normal mb-1 text-xs">
							NOME DO TITULAR
						</legend>
						<input
							type="text"
							className="border border-px border-[#BDC3C7] rounded-md w-full mb-4"
						/>
						<legend className="text-[#2D3436] font-normal mb-1 text-xs">
							Nº DO CARTÃO
						</legend>
						<input
							type="number"
							className="border border-px border-[#BDC3C7] rounded-md w-full mb-4"
						/>
					</fieldset>
					<div className="w-full flex gap-4">
						<div className="w-2/3">
							<fieldset>
								<legend className="text-[#2D3436] font-normal mb-1 text-xs">
									DATA DE VENCIMENTO
								</legend>
								<input
									type="number"
									className="border border-px border-[#BDC3C7] w-full rounded-md mb-4"
								/>
							</fieldset>
						</div>
						<div className="w-1/3">
							<fieldset>
								<legend className="text-[#2D3436] font-normal mb-1 text-xs">
									CVV
								</legend>
								<input
									type="number"
									className="border border-px border-[#BDC3C7] w-full rounded-md mb-4"
								/>
							</fieldset>
						</div>
					</div>
				</div>
				{/* PURCHASE BUTTON */}
				<Button text={"CONFIRMAR COMPRA"} col="blue" func={handleClick} />
				{/* VOLTAR BUTTON */}
				<Back href={"/inserir"} col="blue" />
			</div>
			<Navigator />
		</div>
	);
}

export default InsertCreditCard;
