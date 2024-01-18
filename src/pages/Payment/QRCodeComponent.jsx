import React from "react";
import QRCode from "react-qr-code";

function QRCodeComponent() {
	const hash = Math.random().toString(36).substring(7);
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="gap-14 flex flex-col justify-center items-center">
				{/* QR CODE */}
				<div className="max-w-4/5">
					<QRCode
						value={hash}
						size={196}
						style={{ height: "auto", maxWidth: "100%", width: "100%" }}
						viewBox={`0 0 196 196`}
					/>
				</div>
				<div className="flex flex-col justify-center items-center">
					{/* Texto explicativo */}
					<p className="font-medium text-xs text-midnight">
						APONTE O QR CODE PARA A CÂMERA PARA
					</p>
					<p className="font-medium text-xs text-midnight">
						REALIZAR O PAGAMENTO
					</p>
				</div>
			</div>
		</div>
	);
}

export default QRCodeComponent;
