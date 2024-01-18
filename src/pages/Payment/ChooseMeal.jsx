import React from "react";
import { useEffect, useState } from "react";
import Navigator from "../../components/Navigator/Navigator";
import { useNavigate } from "react-router-dom";

function ChooseMeal() {
	const navigate = useNavigate();

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

	const handleClickSoup = async () => {
		const price = 1;
		const mealType = "SOPA OU BOLO";
		navigate("/pagamento/", { state: { price, mealType, balance } });
	};

	const handleClickDinner = async () => {
		const price = 3;
		const mealType = "REGIONAL";
		navigate("/pagamento/", { state: { price, mealType, balance } });
	};

	return (
		<div className="flex justify-center w-full h-screen pb-20 tall:pb-10">
			<div className="flex flex-col justify-center items-center text-center gap-7 tall:gap-20">
				<button onClick={handleClickSoup}>
					<div className="border-2 border-silver rounded-3xl outline-2 flex-none">
						<div className="p-8 font-extrabold flex flex-col gap-9 w-72 h-48 justify-center">
							<div className="flex flex-col gap-4">
								<p className="text-stdblue text-xl">SOPA OU BOLO</p>
								<hr className="border border-silver"></hr>
							</div>
							<p className="text-4xl">
								<span className="text-silver font-medium text-2xl mr-2">R$</span>
								<span className="text-stdblue">1,00</span>
							</p>
						</div>
					</div>
				</button>
				<button onClick={handleClickDinner}>
					<div className="border-2 border-silver rounded-3xl outline-2 flex-none">
						<div className="p-8 font-extrabold flex flex-col gap-9 w-72 h-48 justify-center">
							<div className="flex flex-col gap-4">
								<p className="text-stdblue text-xl">REGIONAL</p>
								<hr className="border border-silver"></hr>
							</div>
							<p className="text-4xl">
								<span className="text-silver font-medium text-2xl mr-2">R$</span>
								<span className="text-stdblue">3,00</span>
							</p>
						</div>
					</div>
				</button>
				<Navigator place={"payment"} />
			</div>
		</div>
	);
}

export default ChooseMeal;
