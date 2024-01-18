import React from "react";
//import "primeicons/primeicons.css";

function Extract() {
	const [extract, setExtract] = React.useState([]);

	const getTransactions = async () => {
		const id = localStorage.getItem("idUser");

		const response = await fetch(`http://localhost:3001/transaction/latest/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		setExtract(data);
	};

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			if (localStorage.getItem("idUser")) {
				clearTimeout(timeout);
				getTransactions();
			}
		}, 100);
	}, []);

	const parseDate = (date) => {
		const newDate = new Date(date);
		const day = newDate.getDate();
		const month = newDate.getMonth() + 1;
		const year = newDate.getFullYear();
		return `${day}/${month}/${year}`;
	};

	const parseHour = (date) => {
		const newDate = new Date(date);
		const hour = newDate.getHours();
		const minutes = newDate.getMinutes();
		return `${hour}:${minutes}`;
	};

	let fields;
	if (Array.isArray(extract)) {
		if (extract.length === 0) {
			fields = (
				<div className="flex flex-col gap-10 tall:gap-16">
					<p className="ml-5 mt-2 text-sm text-concrete">
						Nenhuma transação realizada.
					</p>
				</div>
			);
		} else {
			fields = extract.map((e, index) => (
				<table
					key={`${e.mealName}-${index}`}
					className="table-auto w-full px-4 border-separate border-spacing-y-2 border-spacing-x-2 text-sm"
				>
					<tbody>
						<tr className="text-justify">
							<td className="w-6/12 font-medium">{e.mealName}</td>
							<td className="">{parseDate(e.createdAt)}</td>
							<td className="w-1/5 text-right">{parseHour(e.createdAt)}</td>
						</tr>
					</tbody>
				</table>
			));
		}
	} else {
		fields = (
			<div className="flex flex-col gap-10 tall:gap-16">
				<p className="ml-5 font-medium text-midnight">
					Nenhuma transação realizada.
				</p>
			</div>
		);
	}
	return (
		<div className="h-fit pb-4 border border-silver rounded-2xl w-full">
			{/* TITLE */}
			<div className="relative flex w-full">
				<div className="flex pt-4 pl-5 gap-2 mb-2">
					<p className="text-stdblue font-bold text-md">EXTRATO</p>
					<p className="text-silver"> | </p>
					<p className="text-silver"> JULHO </p>
				</div>
				<a href="../extrato">
					<i className="pi pi-arrow-circle-right absolute top-5 right-5 text-silver hover:text-stdblue" />
				</a>
			</div>
			{fields}
		</div>
	);
}

export default Extract;
