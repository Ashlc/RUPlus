import React, {useEffect, useState} from "react";
import receipt from "../../assets/receipt.svg";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primeicons/primeicons.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import Navigator from "../../components/Navigator/Navigator";
import Select from "./Select";

function Extract() {
	const [extract, setExtract] = React.useState([]);
	const [filtered, setFiltered] = React.useState([]);

	const getCurrentMonth = () => {
		const date = new Date();
		return date.getMonth() + 1;
	}; 

	const [month, setMonth] = useState(getCurrentMonth());

	const getTransactions = async () => {
		const id = localStorage.getItem("idUser");

		const response = await fetch(`http://localhost:3001/transaction/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		setExtract(data);
		const filteredData = data.filter((e) => {
			const date = new Date(e.createdAt);
			return date.getMonth() + 1 === month;
		});
		setFiltered(filteredData);
	};
	
	useEffect(() => {
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

	const dateTemplate = (rowData) => {
		return (
				<p>{parseDate(rowData.createdAt)}</p>
		);
	}

	const hourTemplate = (rowData) => {
		return (
				<p>{parseHour(rowData.createdAt)}</p>
		);
	}

	return (
		<div className="relative h-screen w-full flex flex-col">
			<div className="flex flex-col p-6 h-full w-full gap-2">
				<div className="flex items-center gap-3 tall:gap-4 mb-3 tall:mt-3">
					<img src={receipt} alt="Extrato" className="h-8" />
					<p className="text-stdblue text-xl font-bold">EXTRATO</p>
				</div>
				<hr className="border-silver" />
				<div className="flex items-center justify-between px-6">
					<p className="text-silver">PERÍODO</p>
					<Select
					value={month}
					setFiltered={setFiltered}
					extract={extract}
					setValue={setMonth}/>
				</div>
				<hr className="border-silver tall:mb-3" />
				<DataTable
					value={filtered}
					scrollable
					scrollHeight="65vh"
					emptyMessage="Nenhuma transação realizada."
					className="w-full">
					<Column field="mealName" header="REFEIÇÃO" />
					<Column body={dateTemplate} header="DATA" />
					<Column body={hourTemplate} header="HORA" />
				</DataTable>
			</div>
			<Navigator />
		</div>
	);
}

export default Extract;
