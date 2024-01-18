import React from "react";
import Navigator from "../../components/Navigator/Navigator";
import Certificate from "./Certificate";
import Settings from "./Settings";

function User() {
	return (
		<main className="w-screen h-screen flex flex-col items-center justify-center">
			<div className="w-10/12 flex flex-col gap-6 pb-10 h-full pt-5">
				<Certificate />
				<Settings />
			</div>
			<Navigator place={"user"} />
		</main>
	);
}

export default User;
