import React from "react";
import { useEffect, useState } from "react";

function HeaderAmount({}) {
	const [balance, setBalance] = useState(0);

	const getData = async () => {
		const id = localStorage.getItem("idUser");
		const response = await fetch(`http://localhost:3001/user/getUser`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id }),
		});
		const data = await response.json();
		setBalance(data.wallet[0].balance);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="absolute top-0 flex items-center gap-10 justify-center bg-stdblue w-full p-3 rounded-b-3xl">
			<p className=" text-white font-extrabold">SALDO ATUAL</p>
			<div className="text-white w-fit gap-2 flex items-center">
				<p>R$</p>
				<p className="text-lg">{balance}</p>
			</div>
		</div>
	);
}

export default HeaderAmount;
