import React, { useEffect, useState } from "react";

function BanksSelect() {
	const url =
		"https://gist.githubusercontent.com/antoniopresto/d73888dab087ae35a7cf41a61d8a3cbc/raw/43c94b305367afa82734f6fb4480f55e77e08a6e/banco_codigo.json";

	const [banks, setBanks] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				const data = await response.json();
				setBanks(data.sort((a, b) => a.label.localeCompare(b.label)));
			} catch (error) {
				console.error("Error fetching JSON:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<select className="text-midnight text-sm rounded-md h-8 px-2 border-silver border checked:outline-stdorange">
			<option value={null}>--</option>
			{banks.map((bank) => (
				<option key={bank.value} value={bank.value}>
					{bank.label}
				</option>
			))}
		</select>
	);
}

export default BanksSelect;
