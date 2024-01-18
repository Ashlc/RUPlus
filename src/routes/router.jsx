import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import SignUp from "../pages/SignUp/SignUp";
import Recover from "../pages/RecoverPassword/Recover";
import Redirect from "../pages/DeleteAccount/Redirect";
import PrivateList from "./PrivateList";

function Router() {	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/cadastro" element={<SignUp />} />
				<Route path="/recuperar" element={<Recover />} />
				<Route path="/tchauzinho" element={<Redirect />} />
				{PrivateList()}
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
