import React from "react";
import { useEffect, useState } from "react";

export default function Saldo({}) {
	const [amount, setAmount] = useState(0);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (localStorage.getItem("idUser")) {
				clearTimeout(timeout);
				getData();
			}
		}, 100);
	}, []);

	const getData = async () => {
		const id = localStorage.getItem("idUser");
		const response = await fetch(`http://localhost:3001/user/getUser`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id }),
		});
		console.log(response);
		const data = await response.json();
		console.log(data);
		const bal = data.wallet.pop().balance;
		setAmount(bal);
	};

	return (
		<div className="h-1/5 w-full relative border border-silver rounded-2xl flex flex-col items-center justify-center gap-2">
			<div className="absolute top-3 left-4">
				<p className="text-stdblue font-bold text-md">SALDO</p>
			</div>
			<p className="text-silver text-4xl font-medium">
				R$ <b className="text-midnight">{amount}</b>
			</p>
		</div>
	);
}
