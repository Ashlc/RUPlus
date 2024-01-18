import React from "react";

function Form({ keyup }) {
	const data = [
		{
			id: "name",
			text: "NOME COMPLETO",
			type: "text",
			placeholder: "",
		},
		{
			id: "email",
			text: "EMAIL",
			type: "email",
			placeholder: "pessoa@email.com",
		},
		{
			id: "phone",
			text: "CELULAR",
			type: "tel",
			placeholder: "(82) 99999-9999",
		},
		{
			id: "password",
			text: "SENHA",
			type: "password",
			placeholder: "",
		},
	];

	const fields = data.map((e) => {
		if (e.id === "phone")
			return (
				<div key={e.id} className="flex flex-col w-full">
					<div className="flex flex-col w-full gap-1">
						<label htmlFor={e.id} className="text-white text-sm">
							{e.text}
						</label>
						<input
							id={e.id}
							type={e.type}
							placeholder={e.placeholder}
							onKeyUp={keyup}
							className="text-midnight rounded-md h-8 px-2 border-silver border focus:outline-stdorange text-sm"
						/>
					</div>
				</div>
			);

		return (
			<div key={e.id} className="flex flex-col w-full">
				<div className="flex flex-col w-full gap-1">
					<label htmlFor={e.id} className="text-white text-sm">
						{e.text}
					</label>
					<input
						id={e.id}
						type={e.type}
						placeholder={e.placeholder}
						className="text-midnight rounded-md h-8 px-2 border-silver border focus:outline-stdorange text-sm"
					/>
				</div>
			</div>
		);
	});

	return fields;
}

export default Form;
