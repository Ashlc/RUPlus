import React, { useState, useEffect } from "react";
import "./Navigator.css";
import "primeicons/primeicons.css";

function Navigator({ place = null }) {
	const [home, setHome] = useState(" h-10");
	const [user, setUser] = useState(" h-10");
	const [payment, setPayment] = useState(" h-10");

	useEffect(() => {
		if (place === "home") {
			setHome(" bg-moonstone h-12 w-12");
			setUser(" h-10");
			setPayment(" h-10");
		} else if (place === "user") {
			setUser(" bg-moonstone h-12 w-12");
			setHome(" h-10");
			setPayment(" h-10");
		} else if (place === "payment") {
			setPayment(" bg-moonstone h-12 w-12");
			setHome(" h-10");
			setUser(" h-10");
		}
	}, [place]);

	return (
		<div className="w-full lg:w-1/2 flex justify-around items-center bg-stdblue h-16 absolute bottom-0 rounded-t-2xl">
			<a href="/handler">
				<div
					className={
						"flex items-center justify-center w-10 rounded-xl hover:bg-moonstone transition-all" +
						payment
					}>
					<i className="pi pi-qrcode text-xl text-white hover:text-lg" />
				</div>
			</a>
			<a href="/home">
				<div
					id="home"
					className={
						"flex items-center justify-center w-10 rounded-xl hover:bg-moonstone transition-all" +
						home
					}>
					<i className="pi pi-home text-xl text-white hover:text-lg" />
				</div>
			</a>
			<a href="/usuario">
				<div
					className={
						"flex items-center justify-center w-10 rounded-xl hover:bg-moonstone transition-all" +
						user
					}>
					<i className="pi pi-user text-xl text-white hover:text-lg" />
				</div>
			</a>
		</div>
	);
}

export default Navigator;
