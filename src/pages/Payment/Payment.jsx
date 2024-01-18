import React from "react";
import { useEffect } from "react";
import QRCode from "./QRCodeComponent";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PriceNMeal from "./Price&Meal";
import Navigator from "../../components/Navigator/Navigator";

function Payment1() {
	const location = useLocation();
	const navigate = useNavigate();
	const price = location.state.price;
	const mealType = location.state.mealType;
	const balance = location.state.balance;

	useEffect(() => {
		const createTransaction = async () => {
			const idUser = localStorage.getItem("idUser");
			const idWallet = localStorage.getItem("idWallet");
			const data = { price, mealType, idUser, idWallet };

			if (balance < price) {
				console.log(balance, price);
				navigate("/pagamento/erro");
				return;
			}

			try {
				const response = await fetch(
					"http://localhost:3001/transaction/createTr",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(data),
					},
				);
				if (response.ok) {
					setTimeout(() => {
						navigate("/pagamento/confirmado", {state: {price, mealType}});
						return;
					}, 1500);
				}
			} catch (error) {
				console.log(error.message);
			}
		}
		createTransaction();
	}, []);

	return (
		<main className="flex justify-center w-full h-screen">
			<div className="flex flex-col justify-start tall:justify-center pt-14 tall:pt-0 items-center text-center gap-10 tall:gap-16">
				<PriceNMeal mealType={mealType} price={price} white={false} />
				<QRCode />
				<div className="flex flex-col justify-center items-center">
					<Link
						to="/home"
						className="font-black text-xs text-stdred border rounded-3xl border-stdred py-3 px-7">
						CANCELAR TRANSAÇÃO
					</Link>
				</div>
				<Navigator place={"payment"} />
			</div>
		</main>
	);
}

export default Payment1;
