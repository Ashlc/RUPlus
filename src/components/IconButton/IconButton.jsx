import React from "react";
//import "primeicons/primeicons.css";

function IconButton({ text, func, icon = "" }) {
	return (
		<button
			type="button"
			onClick={func}
			className="w-full flex justify-center items-center border
      		border-stdblue rounded-2xl h-10 text-stdblue font-bold text-md gap-5
	  		focus:outline-stdorange
	  		active:bg-stdblue active:text-white
			disabled:bg-silver disabled:text-white">
			<p className="select-none">{text}</p>
			<i className={"pi " + icon} style={{ fontSize: "1.5rem" }} />
		</button>
	);
}

export default IconButton;
