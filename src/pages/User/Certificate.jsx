import React from "react";
import "primeicons/primeicons.css";
import icon from "../../assets/DOCUMENT.svg";

function Certificate({ state = true }) {
	return (
		<div className="flex flex-col gap-5 tall:gap-6 w-full py-4">
			<div className="flex gap-5">
				<img src={icon} alt="" />
				<div className="flex flex-col">
					<p className="font-bold text-midnight">COMPROVANTE DE VÍNCULO</p>
					{state && (
						<div className="flex items-center gap-2">
							<i className="pi pi-check-circle text-stdblue font-bold" />
							<p className="text-stdblue font-semibold">ATUALIZADO</p>
						</div>
					)}
					{!state && (
						<div className="flex items-center gap-2">
							<i className="pi pi-exclamation-circle text-stdred font-bold" />
							<p className="text-stdred font-semibold">VENCIDO</p>
						</div>
					)}
				</div>
			</div>
			<div className="flex flex-col h-3/4 items-center justify-center rounded-3xl border border-silver text-center gap-4 px-2 py-4">
				{state && (
					<p className="text-stdblue font-bold">NENHUMA AÇÃO NECESSÁRIA</p>
				)}
				{!state && (
					<p className="text-stdred font-bold">COMPROVANTE DESATUALIZADO</p>
				)}
				{state && (
					<p className="text-midnight">
						Seu comprovante de vínculo vencerá no início do próximo período.
					</p>
				)}
				{!state && (
					<p className="text-midnight">
						Envie o seu comprovante de matrícula ou contra-cheque mais recente.
					</p>
				)}
			</div>
			{!state && (
				<button
					type="button"
					className="w-full flex justify-center items-center border
      		border-stdblue rounded-2xl py-1 text-stdblue font-bold text-md
	  		focus:outline-stdorange
	  		active:bg-whiteactive:text-stdblue
			disabled:bg-silver disabled:text-white">
					<p className="select-none">ENVIAR</p>
				</button>
			)}
		</div>
	);
}

export default Certificate;
