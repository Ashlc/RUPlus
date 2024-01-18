import React from "react";

function Button({ text, func, col = "white" }) {
	if (col === "white") {
		return (
			<button
				type="button"
				onClick={func}
				className="w-full flex justify-center items-center border
      		border-white rounded-2xl h-10 text-white font-bold text-md
	  		focus:outline-stdorange
	  		active:bg-white active:text-stdblue
			disabled:bg-silver disabled:text-white">
				<p className="select-none">{text}</p>
			</button>
		);
	} else {
		return (
			<button
				type="button"
				onClick={func}
				className="w-full flex justify-center items-center border
      		border-stdblue rounded-2xl h-10 text-stdblue font-bold text-md
	  		focus:outline-stdorange
	  		active:bg-stdblue active:text-white
			disabled:bg-silver disabled:text-white">
				<p className="select-none">{text}</p>
			</button>
		);
	}
}

export default Button;
