import "./SignUp.css";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/RUPLUS.svg";
import Form from "./Form";
import { User } from "./User";
import Button from "../../components/Button/Button";
import "primeicons/primeicons.css";

function SignUp() {
	const [file, setFile] = useState("");
	const [fileSize, setFileSize] = useState("");
	const [display, setDisplay] = useState("hidden");
	const [checked, setChecked] = useState(true);
	const [invalidPhone, setInvalidPhone] = useState(false);
	const [noFile, setNoFile] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem("idUser")) {
			navigate("/home");
		}
	}, []);

	const handleUpload = (e) => {
		if (e.target.files.length !== 0) {
			const doc = e.target.files[0];
			setFile(doc);
			const size = file.size;
			if (size <= 1000) {
				setFileSize(size + " B");
			} else if (size < 1000000) {
				setFileSize((size / 1000).toFixed(2) + " KB");
			} else {
				setFileSize((size / 1000000).toFixed(2) + " MB");
			}
			console.log(doc);
		} else {
			console.log("Upload aborted.");
		}
	};

	// PHONE MASK FROM https://www.ramoncp.com.br/snippets/mascara-de-telefone-para-input-em-js

	const handlePhone = (e) => {
		let input = e.target;
		input.value = phoneMask(input.value);
	};

	const phoneMask = (value) => {
		if (!value) return "";
		value = value.replace(/\D/g, "");
		value = value.replace(/(\d{2})(\d)/, "($1) $2");
		value = value.replace(/(\d)(\d{4})$/, "$1-$2");
		return value;
	};

	const handleClick = () => {
		document.getElementById("documents").click();
	};

	const handleCheck = () => {
		display === "hidden" ? setDisplay("block") : setDisplay("hidden");
	};

	const checkedTimeout = () => {
		setChecked(true);
	};

	const phoneTimeout = () => {
		setInvalidPhone(false);
	};

	const fileTimeout = () => {
		setNoFile(false);
	};

	const handleTel = () => {
		const phone = document.getElementById("phone").value.replace(/\D/g, "");
		if (phone.length !== 11) return false;
		else return true;
	};

	const handleSubmit = async () => {
		if (display === "hidden") {
			setChecked(false);
			setTimeout(checkedTimeout, 3000);
			return;
		}

		if (!file) {
			setNoFile(true);
			setTimeout(fileTimeout, 3000);
		}

		if (handleTel()) {
			try {
				const user = new User();
				user.addFiles(file);
				const data = user.getJSON();
				postUser(data)
				console.log(data);
			} catch (error) {
				console.error(error);
				return;
			}
		} else {
			setInvalidPhone(true);
			setTimeout(phoneTimeout, 3000);
		}		
	};

	const postUser = async (data) => {
		try {
			const response = await fetch("http://localhost:3001/user/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
			});
			console.log(response);
			if (response.status !== 200) {
				console.log("Error.");
			} else {
				navigate("/");
			}

			const result = await response.json();
			console.log(result);
		} catch (error) {
			console.log(error);
			return;
		}
	}

	return (
		<div className="flex flex-col items-center w-full min-h-screen pt-10 bg-stdblue">
			<div className=" flex flex-col w-10/12 lg:w-2/5 gap-8">
				<div className="flex justify-between w-full">
					<p className="text-white text-2xl font-extrabold">CADASTRO</p>
					<img src={logo} alt="" className="h-6" />
				</div>
				<hr className="border-white w-full" />
				<Form keyup={handlePhone} />
				<div className="flex flex-col gap-1 w-full">
					<label htmlFor="type" className="text-white text-sm">
						TIPO DE COMPROVANTE DE VÍNCULO
					</label>
					<select
						name="type"
						id="type"
						className="text-midnight text-sm rounded-md h-8 px-2 border-silver border checked:outline-stdorange">
						<option
							value={null}
							className="appearance-none text-midnight bg-white text-sm">
							--
						</option>
						<option
							value="student"
							className="appearance-none text-midnight bg-white text-sm">
							Matrícula
						</option>
						<option
							value="employee"
							className="appearance-none text-midnight bg-white text-sm">
							Contra-cheque
						</option>
					</select>
				</div>
				<div className="flex flex-col gap-5">
					<div className="flex gap-3 items-center">
						<i className="pi pi-file-import text-white text-xl" />
						<p className="text-md text-white">DOCUMENTOS</p>
					</div>
					<p className="text-justify text-sm text-white font-thin">
						Arquivo <span className="font-medium">PDF único</span> de no máximo{" "}
						<span className="font-medium">2MB</span> contendo CPF, RG e
						comprovante de vínculo de sua escolha.
					</p>
					<input
						type="file"
						name="documents"
						id="documents"
						className="hidden"
						onChange={handleUpload}
					/>
					<Button text={"INSERIR"} func={handleClick} />
					<div className="flex justify-between">
						<p className="w-1/2 text-sm text-white font-medium truncate">
							{file.name}
						</p>
						<p className="text-sm text-white font-thin">{fileSize}</p>
					</div>
					<div className="flex w-full h-fit gap-6">
						<div className="w-1/4">
							<button onClick={handleCheck}>
								<div className="h-6 w-6 border border-white rounded flex items-center justify-center">
									<div className={"h-3 w-3 bg-white rounded " + display}></div>
								</div>
							</button>
						</div>
						<p className="text-white font-thin text-justify text-sm">
							Declaro que as informações acima prestadas são verdadeiras, e
							assumo a inteira responsabilidade pelas mesmas sob as penas da Lei
							(Artigo 299 do Código Penal).
						</p>
					</div>
					{!checked && (
						<div className="flex gap-3 border border-white p-5 rounded-lg">
							<i className="pi pi-exclamation-triangle text-white" />
							<p className="text-white text-justify font-light text-sm">
								Você não pode avançar sem concordar com o termo acima.
							</p>
						</div>
					)}
					{invalidPhone && (
						<div className="flex gap-3 border border-white p-5 rounded-lg">
							<i className="pi pi-exclamation-triangle text-white" />
							<p className="text-white text-justify font-light text-sm">
								Insira um número de telefone válido.
							</p>
						</div>
					)}
					{noFile && (
						<div className="flex gap-3 border border-white p-5 rounded-lg">
							<i className="pi pi-exclamation-triangle text-white" />
							<p className="text-white text-justify font-light text-sm">
								Insira seus documentos.
							</p>
						</div>
					)}
					<Button text={"AVANÇAR"} func={handleSubmit} />
					<hr className="border-white w-full my-5" />
				</div>
			</div>
		</div>
	);
}

export default SignUp;
