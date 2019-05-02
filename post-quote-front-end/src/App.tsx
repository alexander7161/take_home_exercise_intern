import React, { useState, useEffect } from "react";

const App: React.FC = () => {
	const [data, setData] = useState("");
	const [request, setRequest] = useState({
		pickupPostcode: "SW1A1AA",
		deliveryPostcode: "EC2A3LT",
		vehicle: "bicycle"
	});

	async function fetchQuote() {
		const res = await fetch("quote", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(request)
		});
		const data = await res.json();
		console.log(data);
		setData(data);
	}

	useEffect(() => {
		fetchQuote();
	}, [request]);
	return <div className="App">{JSON.stringify(data)}</div>;
};

export default App;
