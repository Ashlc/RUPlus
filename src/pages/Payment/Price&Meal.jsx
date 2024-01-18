import React from "react";

function PriceNMeal({ mealType, price, white }) {
	var colorMealType = "stdblue";
	var color$ = "silver";
	var colorMoney = "midnight";
	if (white === true) {
		colorMealType = "white";
		color$ = "white";
		colorMoney = "white";
	}

	const additionalClassesMealType = "text-xl font-black";
	const additionalClasses$ = "font-medium";
	const additionalClassesMoney = "font-bold";

	return (
		<div className="flex flex-col justify-center items-center gap-2">
			<p className={`text-${colorMealType} ${additionalClassesMealType}`}>
				{mealType}
			</p>
			<p className="text-4xl">
				<span className={`text-${color$} ${additionalClasses$}`}>R$ </span>
				<span className={`text-${colorMoney} ${additionalClassesMoney}`}>
					{price.toFixed(2).replace(".", ",")}
				</span>
			</p>
		</div>
	);
}

export default PriceNMeal;
