import React from "react";
import { Link } from "react-router-dom";

function Back({ href, styles, col = "white" }) {
	if (col === "white") {
		return (
			<Link to={href} className={styles}>
				<p className="text-lg text-white font-bold underline">VOLTAR</p>
			</Link>
		);
	} else if (col === "midnight")  {
		return (
			<Link to={href} className={styles}>
				<p className="text-lg text-midnight font-bold underline">VOLTAR</p>
			</Link>
		);
	} else {
		return (
			<Link to={href} className={styles}>
				<p className="text-lg text-stdblue font-bold underline">VOLTAR</p>
			</Link>
		);
	}
}

export default Back;
