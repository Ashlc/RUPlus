import React from "react";

function Select({value, setValue, extract, setFiltered}) {
	const months = [
		{
			name: "JAN",
			value: 1,
		},
		{
			name: "FEV",
			value: 2,
		},
		{
			name: "MAR",
			value: 3,
		},
		{
			name: "ABR",
			value: 4,
		},
		{
			name: "MAI",
			value: 5,
		},
		{
			name: "JUN",
			value: 6,
		},
		{
			name: "JUL",
			value: 7,
		},
		{
			name: "AGO",
			value: 8,
		},
		{
			name: "SET",
			value: 9,
		},
		{
			name: "OUT",
			value: 10,
		},
		{
			name: "NOV",
			value: 11,
		},
		{
			name: "DEZ",
			value: 12,
		},
	];

	const generateOptions = () => {
		return months.map((month) => (
			<option
				value={month.value}
				key={month.value}
				className="grow text-midnight text-sm h-8 px-2 border-silver border checked:outline-stdorange">
				{month.name}
			</option>
		));
	};

	const handleChange = (e) => {
		setValue(e.target.value);
		const filtered = extract.filter((transaction) => {
			const date = new Date(transaction.createdAt);
			return date.getMonth() + 1 === parseInt(e.target.value);
		}
		);
		setFiltered(filtered);
	};

	return (
		<select
			name="type"
			id="type"
			value={value}
			onChange={handleChange}
			placeholder="Mês"
			className="text-midnight h-8 px-4 border-silver border checked:outline-stdorange">
			{generateOptions()}
		</select>
	);
}

export default Select;
